import { PRIVATE_STRIPE_WEBHOOK_KEY } from '$env/static/private';
import { handleCheckoutCompleted, handleCheckoutUpdated , handleCheckoutCancelled } from '$lib/server/stripe/checkout';
import { stripe } from '$lib/server/stripe/client';
import { json, type RequestHandler } from '@sveltejs/kit';
import type Stripe from 'stripe';

export const POST: RequestHandler = async (event) => {
	console.log("EVENT:",event)
	const stripeSignature = event.request.headers.get('stripe-signature');

	if (!stripeSignature) {
		return json('Unauthorized', { status: 401 });
	}

	const body = await event.request.text();

	let stripeEvent;
	try {
		stripeEvent = stripe.webhooks.constructEvent(
			body,
			stripeSignature,
			PRIVATE_STRIPE_WEBHOOK_KEY
		) as Stripe.DiscriminatedEvent;
	} catch (e) {
		return json('Invalid signature', { status: 401 });
	}
	try {
		switch (stripeEvent.type) {
			case 'checkout.session.completed':
			//The user paid successfully and a subsription is created (if any)
			//🟩 Allow access
				await handleCheckoutCompleted(stripeEvent.data.object);
				break;
			case 'customer.subscription.updated':
			//The user may have updated plan to a different tier
			//🟩 Allow access
				await handleCheckoutUpdated(stripeEvent.data.object);
				break;
			case 'customer.subscription.deleted':
			//The subscription has been cancelled
			//❌ Block access 
				await handleCheckoutCancelled(stripeEvent.data.object);
				break;
			default:
				return json({ received: true }, { status: 200 });
		}
	} catch (e) {
		return json(`Error processing event ${stripeEvent.type}`, { status: 500 });
	}
	return json({ received: true }, { status: 200 });
};