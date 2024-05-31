<script>
    import { onMount } from 'svelte'
    export let message
    onMount(() => {
        const dialog= document.getElementById('my_modal_1')
        dialog.showModal();
	})
   
</script>
<dialog id="my_modal_1" class="modal">
  <div class="flex flex-col modal-box items-center justify-center gap-5">
    <h3 class="font-bold text-xl animate animate-pulse">{message}</h3>
    <div class="flex gap-2">
    <div class='h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div class='h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div class='h-3 w-3 bg-black rounded-full animate-bounce'>
  </div>
    </div>
    {#if message == "Failed, please try again!"}
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
    {/if}
  </div>
</dialog>