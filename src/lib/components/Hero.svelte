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
          >, streamed live on weekdays from 9:30am until 11:00am EST
        </div>
        <div class="mt-6 md:mt-10 text-sm font-bold md:text-lg">
          This all in one course is all you need to kick start your journey to
          become a profitable trader from scratch!
        </div>
        <div class="mt-6 md:mt-2">
          <a href="https://discord.gg/7WnHUCvGeR">
            <div
              class="btn btn-wide btn-lg btn-outline btn-destructive btn-sm px-6 mt-3 mx-2"
            >
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"
                ><path
                  class="cls-1"
                  d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                />
              </svg> -->
              Join us on Discord
            </div>
          </a>
        </div>
        <div class="mt-2 md:mt-2">
          <Sparkles>
            <a href="/pricing">
              <div
                class="btn btn-wide btn-lg btn-outline btn-primary btn-sm px-6 mt-3 mx-2"
              >
                Enroll Now
              </div>
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
