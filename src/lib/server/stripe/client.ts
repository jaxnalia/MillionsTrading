import Stripe from 'stripe';
import { PRIVATE_STRIPE_API_KEY } from "$env/static/private";

export const stripe = new Stripe(PRIVATE_STRIPE_API_KEY, {
    apiVersion: '2024-04-10',
	typescript: true
});