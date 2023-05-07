<!-- <svelte:options tag="map"/> -->
<script lang="ts">
  import { onMount } from 'svelte';
  import type { MapOptions } from './types/mapOptions.ts';
  import { defaultMapOptions } from './types/mapOptions.ts';
  import ExternalLibrary from '$lib/misc/ExternalLibrary.svelte';

  let className: string = '';
  // Map options
  export let apiKey: string = '';
  export let options: MapOptions = defaultMapOptions;

  let map: google.maps.Map;
  let container: HTMLElement;

  function initMap(): void {
    map = new google.maps.Map(container, options);
  }
  export { map };
  export { className as class };
  onMount(() => {
    initMap();
  });
</script>

<ExternalLibrary
  url="https://maps.googleapis.com/maps/api/js?key={apiKey}&libraries=visualization&callback=initMap"
  on:loaded={initMap}
/>

<div class="{className}" id="map" bind:this={container} />

<style>
  #map {
    align-items: var(--align, center);
    border: var(--bd, thin solid) var(--color, #000);
    border-radius: var(--rounded, 1.5rem);
    color: var(--color, #000);
    display: var(--display, flex);
    justify-content: var(--justify, center);
    margin: var(--m, 0 auto);
    max-height: var(--max-height, 75vh);
    max-width: var(--max-width, 75vw);
    min-height: var(--min-height, 25vh);
    min-width: var(--min-width, 25vw);
    padding: var(--pd, 0);
  }
</style>
