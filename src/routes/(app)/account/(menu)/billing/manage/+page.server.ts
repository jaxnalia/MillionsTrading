import { redirect, error } from "@sveltejs/kit"
import { getOrCreateCustomerId } from "../../../subscription_helpers.server"
import type { PageServerLoad } from "./$types"
import {stripe} from "$lib/server/stripe/client"

export const load: PageServerLoad = async ({
  url,
  locals: { getSession, supabaseServiceRole },
}) => {
  const session = await getSession()
  if (!session) {
    throw redirect(303, "/auth")
  }

  const { error: idError, customerId } = await getOrCreateCustomerId({
    supabaseServiceRole,
    session,
  })
  if (idError || !customerId) {
    throw error(500, {
      message: "Unknown error (PCID). If issue persists, please contact us.",
    })
  }

  let portalLink
  try {
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${url.origin}/account/billing`,
    })
    portalLink = portalSession?.url
  } catch (e) {
    console.log("error",e)
    throw error(
      500,
      "Unknown error (PSE). If issue persists, please contact us.",
    )
  }

  throw redirect(303, portalLink ?? "/account/billing")
}
