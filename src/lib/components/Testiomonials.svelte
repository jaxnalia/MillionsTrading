<script lang="ts">
    const testimonialsData = [
        {
            text: "I wanted a website that truly represented my creative work and personality. Web Design AI perfectly captured my vision and designed a website that is not only beautiful but also unique. They were a pleasure to work with, and I'm proud to showcase my portfolio on the site they created for me.",
            name: "Emily, USA",
            profilePic: "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3"
        },
        {
            text: "Web Design AI completely transformed my small business with their innovative approach. The AI-powered design solutions they offered not only look amazing but are also highly effective in attracting customers. I'm thrilled with the results!",
            name: "Michael, USA",
            profilePic: "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3"
        },
        {
            text: "Web Design AI has taken my e-commerce website to the next level. Their AI-driven design techniques have improved user experience and conversion rates. The team at Web Design AI is a game-changer in the web design industry",
            name: "David, Canada",
            profilePic: "https://plus.unsplash.com/premium_photo-1681319553238-9860299dfb0f?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3"
        }
    ];
</script>
<section id="testimonials">
<div class="grid place-items-center w-full">
    <div class="max-w-6xl px-4 py-24 content-center justify-center">
        <h1 class="text-3xl text-center font-bold">Testimonials</h1>
        <div class="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
            {#each testimonialsData as data }
                <div class="card">
                    <figure class="px-10 pt-10">
                        <img alt="example" class="mask w-20 h-20 mask-circle object-cover" src={data.profilePic} />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p>{data.text}</p>
                        <p class="text-slate-500">-{data.name}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
</section>


<style>
    .card {
        @apply w-full bg-base-100 shadow-xl;
    }
    .card-body {
        @apply items-center text-center;
    }
    .card img {
        @apply mask w-20 h-20 mask-circle object-cover;
    }
</style>