<script lang="ts">
  import { onMount } from 'svelte';
  import type { MapOptions } from '$lib/types/mapOptions.ts';
  import { Loader, defaultMapOptions } from '$lib/index.js';

  // Component options
  let props: string = '';
  // Map options
  export let apiKey: string = '';
  export let libraries: string[] = ['visualization'];
  export let options: MapOptions = defaultMapOptions;

  let map: google.maps.Map;
  let container: HTMLElement;

  function initMap(): void {
    map = new google.maps.Map(container, options);
  }
  // read-only export of the map; enables external bindings to the map
  export { map };
  //
  export { props as class };
  onMount(() => {
    initMap();
    console.log(libraries.join(','));
  });
</script>

<Loader
  url="https://maps.googleapis.com/maps/api/js?key={apiKey}&libraries={libraries.join(
    ','
  )}&callback=initMap"
  on:loaded={initMap}
/>

<div class={props} id="map" bind:this={container}>
  <slot />
</div>

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
