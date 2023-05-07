<script lang="ts">
  import { onMount } from 'svelte';
  import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';
  import Map, { MapToggle } from '$lib/misc/maps/index.js';
  import { getPoints, heatmapGradients } from './heatmap.ts';

  let map: google.maps.Map;
  let heatmap: google.maps.visualization.HeatmapLayer;

  function toggleHeatmap(): void {
    heatmap.setMap(heatmap.getMap() ? null : map);
  }

  function changeGradient(): void {
    heatmap.set('gradient', heatmap.get('gradient') ? null : heatmapGradients);
  }

  function changeRadius(): void {
    heatmap.set('radius', heatmap.get('radius') ? null : 20);
  }

  function changeOpacity(): void {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
  }

  onMount(() => {
    heatmap = new google.maps.visualization.HeatmapLayer({
      data: getPoints(),
      map,
      radius: 20
    });
  });
</script>

<section class="flex min-h-full min-w-full grow">
  <div class="flex items-center justify-center">
    <MapToggle props="" toggle={toggleHeatmap}>Heatmap</MapToggle>
    <MapToggle props="" toggle={changeGradient}>Gradient</MapToggle>
    <MapToggle props="" toggle={changeOpacity}>Opacity</MapToggle>
    <MapToggle props="" toggle={changeRadius}>Radius</MapToggle>
  </div>
  <Map apiKey={PUBLIC_GOOGLE_MAPS_API_KEY} bind:map --min-height="50vh" --min-width="50vw" />
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
