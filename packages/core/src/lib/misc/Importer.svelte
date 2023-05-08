<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  export let url: string;
  let script: HTMLScriptElement;

  onMount(async () => {
    script.addEventListener('load', () => {
      dispatch('loaded');
    });

    script.addEventListener('error', (event) => {
      console.error('something went wrong', event);
      dispatch('error');
    });
  });
</script>

<svelte:head>
  <script defer bind:this={script} src={url}></script>
</svelte:head>

<style>
</style>
