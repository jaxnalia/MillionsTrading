<script lang="ts">
  import "../app.css"
  import { navigating } from "$app/stores"
  import { expoOut } from "svelte/easing"
  import { slide } from "svelte/transition"
</script>

<svelte:head>
  <meta
    property="og:image"
    content="https://bigjax.s3.eu-west-2.amazonaws.com/ogimage.png"
  />
  <meta property="og:image:width" content="1200px" />
  <meta property="og:image:height" content="630px" />
  <meta property="og:url" content="https://millionstrading.com/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Millions Trading Course" />
  <meta
    property="og:description"
    content="#1 Trading Course on the Web | Supply and Demand Trading | Liquidity Scalping | We teach you everything you need to know to become a profitable trader in 90 days"
  />
  <meta
    name="twitter:description"
    content="#1 Trading Course on the Web | Supply and Demand Trading | Liquidity Scalping | We teach you everything you need to know to become a profitable trader in 90 days"
  />
  <meta
    name="twitter:image"
    content="https://bigjax.s3.eu-west-2.amazonaws.com/ogimage.png"
  />
</svelte:head>

{#if $navigating}
  <!-- 
    Loading animation for next page since svelte doesn't show any indicator. 
     - delay 100ms because most page loads are instant, and we don't want to flash 
     - long 12s duration because we don't actually know how long it will take
     - exponential easing so fast loads (>100ms and <1s) still see enough progress,
       while slow networks see it moving for a full 12 seconds
  -->
  <div
    class="fixed w-full top-0 right-0 left-0 h-1 z-50 bg-primary"
    in:slide={{ delay: 100, duration: 12000, axis: "x", easing: expoOut }}
  ></div>
{/if}
<slot />
