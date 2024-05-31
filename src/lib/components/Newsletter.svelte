<script lang="ts">
import { enhance, type SubmitFunction } from '$app/forms'
import Toast from './Toast.svelte';

let toast: Toast;
// eslint-disable-next-line  @typescript-eslint/no-unused-vars
let loading = false;
const subscribe: SubmitFunction = () =>{
  loading = true;
  return async ({ result, update }) => {
    loading = false;
    console.log(result)
    console.log("result type",result.type)
    switch (result.type){
      case 'success':
            toast.callToast('✅  Thanks for subscribing!', 'success')
			await update();
        break;
      case 'failure':
        break
    }
  }
}

</script>

<Toast bind:this={toast} />
<div class="bg-base-200 py-20 text-center">
    <h2 class="text-2xl font-bold">
        Subscribe for our newsletter
    </h2> 
    <form
    method="POST"
    action="?/sendmail"
    use:enhance={subscribe} class="mt-4 flex items-center justify-center gap-2">
        <input type="email" placeholder="you@example.com" class="input input-bordered" name="email" required> 
        <input type="hidden" name="userGroup" value="Newsletter"> <button type="submit" class="btn btn-primary">Subscribe</button>
    </form> 
</div>