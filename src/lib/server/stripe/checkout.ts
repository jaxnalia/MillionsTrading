import type { Stripe } from 'stripe';
import { stripe } from './client';
import { supabaseAdmin } from '../supabase/supabase-admin';

// Doing this as the type is not complete for the subscription
interface SubscriptionResponse extends Stripe.Subscription {
	plan: {
		id: string;
	};
}

export const handleCheckoutCompleted = async (checkout: Stripe.Checkout.Session) => {
	console.log("handleCheckoutCompleted",checkout)
	const sessionId = checkout.id
	const userId = checkout.client_reference_id
	const subscriptionId = checkout.subscription;
	try {
		const { data: profile, error } = await supabaseAdmin
			.from('stripe_customers')
			.select('user_id')
			.eq('user_id', userId)
			.limit(1)
			.single();

		if (!profile || error) {
			throw new Error('error checkout getting profile:' + error.message);
		}

		const subscription = (await stripe.subscriptions.retrieve(
			subscriptionId as string
		)) as unknown as SubscriptionResponse;
        
		//get items from session id
		const items  = await stripe.checkout.sessions.listLineItems(sessionId);
		//get product name from the first and only item
		const plan_type = items.data[0].description
		const { error: errorSub } = await supabaseAdmin
			.from('stripe_customers')
			.update({
				stripe_customer_id: subscription.customer,
				is_active: subscription.status,
                plan_type: plan_type
			})
            .eq('user_id', userId)
			.select()
			.single();

		if (errorSub) {
			throw new Error('sub ' + errorSub.message);
		}
	} catch (e) {
		console.error('ERR: Updating user', e);
	}
};

export const handleCheckoutUpdated = async (subscription: Stripe.Subscription) => {
	console.log("handleCheckoutUpdated",subscription)
	//get product id from subscription object
	const productId = subscription.items.data[0].price.product
	//get product from product id
	const product = await stripe.products.retrieve(productId)
	const plan_type = product.name
    try {
		const { error } = await supabaseAdmin
			.from('stripe_customers')
			.update({
				is_active: subscription.status,
                plan_type: plan_type
			})
			.eq('stripe_customer_id', subscription.customer);
		if (error) {
			throw new Error(error.message);
		}
	} catch (e) {
		console.error('ERR: Updating subscription', e);
	}
};


export const handleCheckoutCancelled = async (subscription: Stripe.Subscription) => {
	console.log("handleCheckoutCancelled",subscription)
    const plan_type = "FREE"
    try {
		const { error } = await supabaseAdmin
			.from('stripe_customers')
			.update({
				is_active: subscription.status,
                plan_type: plan_type
			})
			.eq('stripe_customer_id', subscription.customer);
		if (error) {
			throw new Error(error.message);
		}
	} catch (e) {
		console.error('ERR: Updating to cancel subscription', e);
	}
};