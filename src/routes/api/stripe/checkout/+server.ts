import { stripe } from "$lib/server/stripe/client"
import type { RequestHandler } from "@sveltejs/kit";
import { PRIVATE_STRIPE_PRICE_ID } from "$env/static/private"

export const POST: RequestHandler = async ({url}) => {
    const priceId = PRIVATE_STRIPE_PRICE_ID
    try {
        const checkoutSession = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity:1
                },
            ],
            success_url: `http://${url.host}/success`,
            cancel_url: `http://${url.host}/`
        });
        return new Response(JSON.stringify({ sessionId: checkoutSession.id }));
    } catch (err) {
        //@ts-ignore
        return new Response(JSON.stringify({ status:500, detail: err.detail  }));
    }
}