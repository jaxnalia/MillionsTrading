<script lang="ts">
  import { Auth } from "@supabase/auth-ui-svelte"
  import { sharedAppearance, oauthProviders } from "../auth_config"

  export let data
</script>

<svelte:head>
  <title>Sign up</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Sign Up</h1>

<Auth
  supabaseClient={data.supabase}
  redirectTo={`${data.url}/auth/callback`}
  showLinks={false}
  providers={oauthProviders}
  socialLayout="vertical"
  view="sign_up"
  onlyThirdPartyProviders
/>

<!-- <div class="text-l text-slate-800 mt-4 mb-2">
  Have an account? <a class="underline" href="/auth/sign_in">Sign in</a>.
</div> -->
