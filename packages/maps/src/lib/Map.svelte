<script lang="ts">
  import { onMount } from 'svelte';
  import GoogleMaps from '$lib/GoogleMaps.svelte';
  import { defaultMapOptions } from '$lib/options.js';
  // Props
  let cls: string = '';
  export let center: google.maps.LatLng | google.maps.LatLngLiteral = {
    lat: 37.775,
    lng: -122.434
  };
  export let loadwith: { apiKey: string; libraries: string[] | undefined } | null = null;
  export let mapId: string | null = null;
  export let options: google.maps.MapOptions | null = defaultMapOptions;
  export let styles: google.maps.MapTypeStyle[] | null = null;
  export let zoom: number = 13;
  // Bindings
  let map: google.maps.Map;
  let container: HTMLElement;

  function initMap(): void {
    map = new google.maps.Map(container, { ...options, center, mapId, styles, zoom });
  }
  // Exports
  export { map }; // read-only export of the map; enables external bindings to the map
  export { cls as class };
  onMount(() => {
    initMap();
  });
</script>

{#if loadwith}
  <GoogleMaps
    apiKey={loadwith.apiKey}
    callback={'initMap'}
    libraries={loadwith.libraries}
    on:loaded={initMap}
  />
{/if}

<div class="map {cls}" id="map" bind:this={container} />

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
    min-width: var(--min-width, 100%);
    padding: var(--pd, 0);
  }
</style>
