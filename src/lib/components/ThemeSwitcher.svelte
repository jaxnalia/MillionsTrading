<script lang="ts">
    const themes = [
      'svelteship',
      'dark',
      'bumblebee',
      'corporate',
    ]
  </script>


<div class="dropdown">
    <!-- Dropdown Button -->
    <div tabindex="0" role="button" class="btn">
      Theme
      <svg
        width="12px"
        height="12px"
        class="h-2 w-2 fill-current opacity-60 inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
      </svg>
    </div>
  
    <!-- Dropdown Content -->
    <ul
      class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 flex flex-col gap-y-2"
    >
      <!-- Theme Options -->
      {#each themes as theme}
        <li>
          <!-- Radio Button for Each Theme -->
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label={theme}
            value={theme}
          />
        </li>
      {/each}
    </ul>
  </div>