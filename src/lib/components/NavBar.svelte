<script lang="ts">
  import ThemeSwitcher from "./ThemeSwitcher.svelte"
</script>

<header>
  <div class="navbar bg-base-100 container mx-auto">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="/"
        ><img
          class="h-12"
          alt="Millions Trading logo"
          src="../../images/millionsyellow.png"
        /></a
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 hidden sm:flex font-bold text-lg">
        <!-- <ThemeSwitcher /> -->
        <!-- <li class="md:mx-2"><a href="/blog">Blog</a></li> -->
        <li class="md:mx-2"><a href="/pricing">Pricing</a></li>
        <li class="md:mx-2"><a href="/contact_us">Contact</a></li>
        <li class="md:mx-2"><a href="/account">Account</a></li>
      </ul>
      <div class="dropdown dropdown-end sm:hidden">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            /></svg
          >
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
        >
          <!-- <li><a href="/blog">Blog</a></li> -->
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/contact_us">Contact</a></li>
          <li><a href="/account">Account</a></li>
        </ul>
      </div>
    </div>
  </div>
</header>
