<script lang="ts">
    import { onMount } from 'svelte';
    import { loadStripe } from '@stripe/stripe-js';
    import { PUBLIC_STRIPE_API_KEY } from '$env/static/public';
    import { invalidateAll } from '$app/navigation';
  
    export let classes: string
    let stripe: any
  
    onMount(async () => {
      stripe = await loadStripe(PUBLIC_STRIPE_API_KEY);
    });
  
    export const handleCheckout = async () => {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("data",data)
        await stripe?.redirectToCheckout({ sessionId: data.sessionId });
        invalidateAll();
      } else {
        console.error("Stripe error:", response.statusText);
      }
    };
  </script>
  
  <button on:click={() => handleCheckout()} class={classes}>
    <slot />
  </button>
  