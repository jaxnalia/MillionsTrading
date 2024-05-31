<script lang="ts">
  import Sparkles from "./Sparkles.svelte"
  import CheckoutButton from "./CheckoutButton.svelte"
</script>

<section id="hero" class="bg-base-100">
  <div class="hero min-h-[60vh]">
    <div class="hero-content text-center py-12">
      <div class="max-w-xl">
        <div
          class="text-4xl md:text-6xl font-bold px-2"
          style="line-height: 1.2;"
        >
          The
          <span
            class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >
          </span>
          <span
            class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >
            #1 Day Trading Course</span
          >
          on the Internet.
          <!-- <span
            class="underline decoration-secondary decoration-4 md:decoration-[6px]"
            >full-featured</span
          >
          <span> Sveltekit Boilerplate</span> -->
        </div>
        <div class="mt-6 md:mt-10 text-sm md:text-lg">
          Hosted by <a href="http://x.com/bigjax_pls" class="link font-bold"
            >BigJax</a
          > Live on Weekdays, Mon-Fri.
        </div>
        <div class="mt-6 md:mt-2">
          <Sparkles>
            <CheckoutButton
              classes="btn btn-wide btn-lg btn-outline btn-primary btn-sm px-6 mt-3 mx-2"
              >Enroll Now</CheckoutButton
            >
          </Sparkles>
        </div>
      </div>
    </div>
  </div>
</section>
