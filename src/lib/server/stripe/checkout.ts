import type { Stripe } from 'stripe';
import { stripe } from './client';
import { supabaseAdmin } from '../supabase/supabase-admin';
import { fetchSubscription } from '../../../routes/(app)/account/subscription_helpers.server';

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
		// get subscription from subscription object
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
	//get customer id from subscription object
	const customerId = subscription.customer
	//get product id from subscription object
	const productId = subscription.items.data[0].price.product
	//get product from product id
	// @ts-ignore
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
	//get subscription of customer id
	const {
		primarySubscription,
		hasEverHadSubscription,
		error: fetchErr,
	} = await fetchSubscription({
		// @ts-ignore
		customerId,
	})
	if (fetchErr) {
		console.log("error",fetchErr)
		// @ts-ignore
		throw error(500, {
		message: "Unknown error. If issue persists, please contact us.",
		})
	}
	let isActiveCustomer = !!primarySubscription
	//get user ID of customer id
	console.log(customerId)
	let user_Id
	try {
		const { data: userId, error: stripeCustomerError } = await supabaseAdmin
			.from("stripe_customers")
			.select(`user_id`)
			.eq("stripe_customer_id", customerId)
			.single()
			
			user_Id = userId?.user_id
		if (stripeCustomerError) {
			throw new Error(stripeCustomerError.message);
		}
	} catch (e) {
		console.error('ERR: getting customer id', e);
	}
	console.log(user_Id)
	// //get discord username of user id
	let discord_Username
	try {
		const { data: discordUsername, error: discordError } = await supabaseAdmin
			.from("profiles")
			.select(`discord`)
			.eq("id", user_Id)
			.single()
			discord_Username = discordUsername
		if (discordError) {
			throw new Error(discordError.message);
		}
	} catch (e) {
		console.error('ERR: getting discord username', e);
	}
	console.log(discord_Username)
	//POST to n8n endpoint discord username & active subscription plan
	
	try {
		const res = await fetch('https://bigjax.app.n8n.cloud/webhook-test/discordUpdate', {
			method: 'POST',
			body: JSON.stringify({
				discord: discord_Username?.discord,
				plan: primarySubscription
			})
		})
		const json = await res.json()
		const result = JSON.stringify(json)
		
	} catch (e) {
		console.error('ERR: posting n8n webhook', e);
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