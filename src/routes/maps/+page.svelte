<script lang="ts">
  import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';
  import { onMount } from 'svelte';
  import Map, { MapToggle } from '$lib/misc/maps/index.js';
  import { getPoints, heatmapGradients } from '$lib/misc/maps/heatmap/heatmap.ts';

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
      radius: 3
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
