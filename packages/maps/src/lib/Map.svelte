<script lang="ts">
  import { onMount } from 'svelte';
  import type { GoogleMapsLibraryProps, MapOptions } from '$lib/types/maps.ts';
  import { defaultMapOptions, GoogleMaps } from '$lib/index.js';

  // Props
  let cls: string = '';
  export { cls as class };
  export let loadwith: GoogleMapsLibraryProps | null;
  export let options: MapOptions = defaultMapOptions;
  export let styles: google.maps.MapTypeStyle[] | undefined;
  // Bindings
  let map: google.maps.Map;
  let container: HTMLElement;

  function initMap(): void {
    map = new google.maps.Map(container, { ...options, styles });
  }
  // Exports
  export { map }; // read-only export of the map; enables external bindings to the map

  onMount(() => {
    initMap();
  });
</script>

{#if loadwith}
  <GoogleMaps apiKey={loadwith.apiKey} callback={'initMap'} libraries={loadwith.libraries} />
{/if}

<div class="map {cls}" id="map" bind:this={container}>
  <slot />
</div>

<style>
  .map {
    border: var(--bd, thin solid) var(--color, #000);
    border-radius: var(--rounded, 1.5rem);
  }
  #map {
    display: var(--display, inline-flex);
    margin: var(--m, 0 auto);
    max-height: var(--max-height, 100vh);
    max-width: var(--max-width, 100vw);
    min-height: var(--min-height, 25vh);
    min-width: var(--min-width, 25vw);
    padding: var(--pd, 0);
  }
</style>
