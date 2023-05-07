<script lang="ts">
  import StackedIcon from '$lib/misc/icons/StackedIcon.svelte';

  export let open = false;
</script>

<button
  class="inline-flex -m-2.5 p-2.5 rounded-md prose dark:prose-invert lg:hidden"
  class:open
  id="navdrop-toggle"
  type="button"
  on:click={() => (open = !open)}
>
  <span class="sr-only"><slot /></span>
  <StackedIcon />
</button>

<style>
  button {
    align-items: center;
    justify-content: center;
    z-index: 60;
  }
</style>
