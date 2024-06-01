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
            #1 Trading Course</span
          >
          on the Web
        </div>

        <div class="mt-6 md:mt-10 text-sm md:text-xl">
          Hosted by <a href="http://x.com/bigjax_pls" class="link font-bold"
            >Jack Sendall</a
          >, streamed live on weekdays 9:30am - 11:00am EST
        </div>
        <div class="mt-6 md:mt-10 text-sm font-bold md:text-lg">
          This all in one course is all you need to kick start your journey to
          become a profitable trader from scratch!
        </div>
        <div class="mt-6 md:mt-2">
          <Sparkles>
            <a href="/pricing">
              <CheckoutButton
                classes="btn btn-wide btn-lg btn-outline btn-primary btn-sm px-6 mt-3 mx-2"
                >Enroll Now</CheckoutButton
              >
            </a>
          </Sparkles>
        </div>
        <div class="mx-auto mt-6 inline-flex items-center gap-2">
          <div class="avatar-group -space-x-4 rtl:space-x-reverse">
            <div class="avatar">
              <div class="w-8">
                <img src="https://i.pravatar.cc/64?u=0" alt="Profile" />
              </div>
            </div>
            <div class="avatar">
              <div class="w-8">
                <img
                  alt="example"
                  src="https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3"
                  class="max-w-sm h-80 object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div class="avatar">
              <div class="w-8">
                <img src="https://i.pravatar.cc/64?u=2" alt="Profile" />
              </div>
            </div>
            <div class="avatar">
              <div class="w-8">
                <img src="https://i.pravatar.cc/64?u=3" alt="Profile" />
              </div>
            </div>
            <div class="avatar">
              <div class="w-8">
                <img src="https://i.pravatar.cc/64?u=4" alt="Profile" />
              </div>
            </div>
          </div>
          <div>
            <div class="text-left">
              <div class="rating">
                <span class="mask mask-star-2 h-4 w-4 bg-yellow-400"></span>
                <span class="mask mask-star-2 h-4 w-4 bg-yellow-400"></span>
                <span class="mask mask-star-2 h-4 w-4 bg-yellow-400"></span>
                <span class="mask mask-star-2 h-4 w-4 bg-yellow-400"></span>
                <span class="mask mask-star-2 h-4 w-4 bg-yellow-400"></span>
              </div>
              <div class="text-sm font-medium text-base-content/80">
                20+ like-minded students
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
