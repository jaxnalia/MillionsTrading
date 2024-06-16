<script lang="ts">
  import { WebsiteName } from "./../../config"
  import Hero from "$lib/components/Hero.svelte"
  import Features from "$lib/components/Features.svelte"
  import Testiomonials from "$lib/components/Testiomonials.svelte"
  import FAQ from "$lib/components/FAQ.svelte"
  import Hero_with_Image from "$lib/components/Hero_with_Image.svelte"
  import Newsletter from "$lib/components/Newsletter.svelte"
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta
    name="og:description"
    content="#1 Trading Course on the Web &#9889; Supply and Demand Trading 💧 Liquidity Scalping 🎓 We teach you everything ou need to know to become a profitable trader in 90 days"
  />
</svelte:head>

<div class="mt-10">
  <Hero />
  <!-- <Hero_with_Image /> -->
</div>

<Features />
<!-- <Testiomonials /> -->
<div class="mt-10">
  <Newsletter />
</div>
<FAQ />
