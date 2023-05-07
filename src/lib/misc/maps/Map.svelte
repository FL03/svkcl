<script lang=ts>
  import { onMount } from 'svelte';
  // Map options
  export let apiKey: string;
  export let center: google.maps.LatLngLiteral = { lat: 37.774546, lng: -122.433523 }; // San Francisco
  export let zoom: number = 13;

  let map: google.maps.Map;
  let container: HTMLElement;

  function initMap(): void {
    map = new google.maps.Map(container, {
      center,
      zoom
    });
  }

  onMount(() => {
    initMap();
  });
</script>

<svelte:head>
	<script defer async src="https://maps.googleapis.com/maps/api/js?key={apiKey}&libraries=visualization&callback=initMap"></script>
</svelte:head>


<div class="map" bind:this={container} />

<style>
  .map {
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
