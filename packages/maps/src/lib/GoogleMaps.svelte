<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  // Props
  export let apiKey: string = '';
  export let callback: string = 'initMap';
  export let libraries: string[] | undefined = ['visualization'];

  // Bindings
  let script: HTMLScriptElement;
  let url: string = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libraries?.join(
    ','
  )}&callback=${callback}`;

  // Events
  const dispatch = createEventDispatcher();
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
  <script async defer bind:this={script} src={url}></script>
</svelte:head>
