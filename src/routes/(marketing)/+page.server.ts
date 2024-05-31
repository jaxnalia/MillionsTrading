import * as mg from '$lib/server/mailgun/subscribe'
import type { Actions } from './$types'
import { fail } from '@sveltejs/kit'


export const actions: Actions = {
    sendmail: async ({request}) => {
      const formData = await request.formData()
      const email = formData.get('email') as string
      const response = await mg.sendEmail(email)
      console.log("response",response)
      if (response instanceof Error) {
          return fail(400, {
            response
          })
        }
      return { success: true}
      }
}