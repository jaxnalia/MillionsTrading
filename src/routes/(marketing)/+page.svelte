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
</svelte:head>

<div class="mt-10">
  <Hero />
  <!-- <Hero_with_Image /> -->
</div>

<Features />
<!-- <Testiomonials /> -->
<div class="mt-10">
  <!-- <Newsletter /> -->
  <!-- <FAQ /> -->
</div>
