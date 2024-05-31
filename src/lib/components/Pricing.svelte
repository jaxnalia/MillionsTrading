<script lang="ts">
  import { pricingPlans } from "../../routes/(marketing)/pricing/pricing_plans";
  import { writable } from "svelte/store";

  export let highlightedPlanId: string = "";
  export let callToAction: string;
  export let currentPlanId: string = "";
  export let center = true;

  const isYearly = writable(false);

  const togglePricing = () => {
    isYearly.update(n => !n);
  };

  $: selectedPricingPlans = $isYearly 
    ? pricingPlans.map(plan => ({
        ...plan,
        price: plan.yearlyPrice,
        priceIntervalName: "/ yearly"
      }))
    : pricingPlans.map(plan => ({
        ...plan,
        price: plan.price,
        // priceIntervalName: "/ monthly"         //  line removed to show custom time frames a opposed to strictly monthly or yearly
      }));
      type PlanFeatureRow = {
    name: string
    freeIncluded?: boolean
    proIncluded?: boolean
    freeString?: string
    proString?: string
    header?: boolean
  }

  const planFeatures: PlanFeatureRow[] = [
    {
      name: "Access",
      header: true,
    },
    {
      name: "Free signals",
      freeIncluded: true,
      proIncluded: true,
    },
    {
      name: "Premium signals",
      freeIncluded: false,
      proIncluded: true,
    },
    {
      name: "Trading Course",
      header: true,
    },
    {
      name: "Weekly live sessions",
      freeString: "1",
      proString: "5",
    },
    {
      name: "1-to-1 Mentorship",
      freeIncluded: false,
      proIncluded: true,
    },
  ]
</script>

<!-- <div class="flex justify-center mb-4">
  <label class="label cursor-pointer">
    <span class="label-text">Monthly</span>
    <input type="checkbox" class="toggle toggle-primary mx-2" bind:checked={$isYearly} on:click={togglePricing}/>
    <span class="label-text">Yearly</span>
  </label>
</div> -->

<div class="flex flex-col lg:flex-row gap-10 {center ? 'place-content-center' : ''} flex-wrap">
  {#each selectedPricingPlans as plan}
    <div class="flex-none card card-bordered {plan.id === highlightedPlanId ? 'border-primary' : 'border-gray-200'} shadow-xl flex-1 flex-grow min-w-[260px] max-w-[310px] p-6">
      <div class="flex flex-col h-full">
        {#if plan.deal}
          <div class="bg-gray-100/10 rounded-full mx-auto px-5 py-2 text-red-500 text-center text-md font-semibold mb-2">{plan.deal}</div>
        {/if}

        <div>
          <span class="text-4xl font-bold">{plan.price}</span>
          <span class="text-gray-500 font-semibold ">{plan.priceIntervalName}</span>
        </div>

        <div class="text-2xl font-bold">{plan.name}</div>
        <p class="mt-2 text-sm text-gray-400 leading-relaxed">{plan.description}</p>
        
        <div class="mt-auto pt-4 text-sm text-gray-400">
          Plan Includes:
          <ul class="list-disc list-inside mt-2 space-y-1">
            {#each plan.features as feature}
              <li class="">{feature}</li>
            {/each}
          </ul>
        </div>
        <div class="pt-8">
          
          <div class="mt-6 pt-4 flex-1 flex flex-row items-center">
            {#if plan.id === currentPlanId}
              <div class="btn btn-outline btn-success no-animation w-[80%] mx-auto cursor-default">
                Current Plan
              </div>
            {:else}
              <a href={"/account/subscribe/" + (plan?.stripe_price_id ?? "free_plan")} class="btn btn-primary w-[80%] mx-auto">
                {callToAction}
              </a>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<svg style="display:none" version="2.0">
  <defs>
    <symbol id="checkcircle" viewBox="0 0 24 24" stroke-width="2" fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"/>
    </symbol>
  </defs>
</svg>

<svg style="display:none" version="2.0">
  <defs>
    <symbol id="nocircle" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,11H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"/>
    </symbol>
  </defs>
</svg>

<h1 class="text-2xl font-bold text-center mt-16">Plan Features</h1>
<h2 class="text-xl text-center text-slate-500 mt-1 pb-3">Comprehensive feature table</h2>

<div class="overflow-visible mx-auto max-w-xl mt-4">
  <table class="table">
    <thead class="text-lg sticky top-0 bg-base-100 bg-opacity-50 z-10 backdrop-blur">
      <tr>
        <th></th>
        <th class="text-center">Free</th>
        <th class="text-center">Member</th>
      </tr>
    </thead>
    <tbody>
      {#each planFeatures as feature}
        {#if feature.header}
          <tr class="bg-base-200 font-bold">
            <td colspan="3">{feature.name}</td>
          </tr>
        {:else}
          <tr class="relative">
            <td>{feature.name}</td>
            <td class="text-center">
              {#if feature.freeString}
                {feature.freeString}
              {:else if feature.freeIncluded}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 ml-2 inline text-success">
                  <use href="#checkcircle"/>
                </svg>
              {:else}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-[26px] h-[26px] inline text-base-200">
                  <use href="#nocircle"/>
                </svg>
              {/if}
            </td>
            <td class="text-center">
              {#if feature.proString}
                {feature.proString}
              {:else if feature.proIncluded}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 ml-2 inline text-success">
                  <use href="#checkcircle"/>
                </svg>
              {:else}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-[26px] h-[26px] inline text-base-200">
                  <use href="#nocircle"/>
                </svg>
              {/if}
            </td>
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</div>
