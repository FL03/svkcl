<script lang="ts">
  import { onMount } from 'svelte';
  import { defaultMapOptions, GoogleMaps } from '$lib/index.js';

  // Props
  let cls: string = '';
  export let center: google.maps.LatLng | google.maps.LatLngLiteral = { lat: 37.775, lng: -122.434 };
  export let loadwith: { apiKey: string, libraries: string[] | undefined } | undefined;
  export let options: { [key: string]: string } = defaultMapOptions;
  export let styles: google.maps.MapTypeStyle[] | undefined;
  export let zoom: number = 13;
  // Bindings
  let map: google.maps.Map;
  let container: HTMLElement;

  function initMap(): void {
    map = new google.maps.Map(container, { ...options, center, styles, zoom });
  }
  // Exports
  export { map }; // read-only export of the map; enables external bindings to the map
  export { cls as class };
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
