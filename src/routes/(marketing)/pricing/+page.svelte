<script lang="ts">
  import Pricing from "$lib/components/Pricing.svelte"
  import { WebsiteName } from "./../../../config"
</script>

<svelte:head>
  <title>Pricing</title>
  <meta name="description" content="Pricing details for {WebsiteName}" />
</svelte:head>

<div class="min-h-[70vh] pb-8 pt-[5vh] px-4">
  <h1 class="text-3xl font-bold text-center">Pricing</h1>
  <h2 class="text-xl text-center text-slate-500 mt-1 pb-3">
    Choose a plan that suits your desk's needs
  </h2>

  <div class="w-full my-8">
    <Pricing callToAction="Choose Plan" highlightedPlanId="trader" />
  </div>
</div>
