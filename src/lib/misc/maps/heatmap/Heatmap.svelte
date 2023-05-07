<script lang=ts>
  import { onMount } from 'svelte';
  import MapToggle from '$lib/misc/maps/MapToggle.svelte';
  import { getPoints, heatmapGradients } from './heatmap.ts';

  // Map options
  export let apiKey: string = '';
  export let center: google.maps.LatLngLiteral = { lat: 37.774546, lng: -122.433523 }; // San Francisco
  export let zoom: number = 13;

  let container: HTMLElement;
  let map: google.maps.Map;
  let heatmap: google.maps.visualization.HeatmapLayer;

  function toggleHeatmap(): void {
    heatmap.setMap(heatmap.getMap() ? null : map);
  }

  function changeGradient(): void {
    heatmap.set("gradient", heatmap.get("gradient") ? null : heatmapGradients);
  }

  function changeRadius(): void {
    heatmap.set("radius", heatmap.get("radius") ? null : 20);
  }

  function changeOpacity(): void {
    heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
  }
  

  function initMap(): void {
    map = new google.maps.Map(container, {
      center,
      zoom
    });
    heatmap = new google.maps.visualization.HeatmapLayer({
      data: getPoints(),
      map,
      radius: 20
    });
  }

  onMount(() => {
    initMap();
  });
</script>

<svelte:head>
	<script defer async src="https://maps.googleapis.com/maps/api/js?key={apiKey}&libraries=visualization&callback=initMap"></script>
</svelte:head>

<section class="flex min-h-full min-w-full grow">
  <div class="flex items-center justify-center">
    <MapToggle props="" toggle={toggleHeatmap}>Heatmap</MapToggle>
    <MapToggle props="" toggle={changeGradient}>Gradient</MapToggle>
    <MapToggle props="" toggle={changeOpacity}>Opacity</MapToggle>
    <MapToggle props="" toggle={changeRadius}>Radius</MapToggle>
  </div>
  <div class="map" bind:this={container} />
</section>

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