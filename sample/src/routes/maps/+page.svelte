<script lang="ts">
  import { env } from '$env/dynamic/public';
  import { onMount } from 'svelte';
  import Map, { MapToggle } from '@svkcl/google-maps';
  import { getPoints, heatmapGradients } from '$lib/heatmap.ts';

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

<section class="flex grow min-h-screen py-10 items-start justify-center">
  <div class="flex z-50 items-center justify-center absolute">
    <MapToggle toggle={toggleHeatmap} --bg="white" --color="black" --m="0 0.5rem">Heatmap</MapToggle
    >
    <MapToggle class="" toggle={changeGradient} --bg="white" --color="black" --m="0 0.5rem"
      >Gradient</MapToggle
    >
    <MapToggle class="" toggle={changeOpacity} --bg="white" --color="black" --m="0 0.5rem"
      >Opacity</MapToggle
    >
    <MapToggle class="" toggle={changeRadius} --bg="white" --color="black" --m="0 0.5rem"
      >Radius</MapToggle
    >
  </div>

  <Map apiKey={env.PUBLIC_GOOGLE_MAPS_API_KEY} bind:map --min-height="75vh" --min-width="75vw" />
</section>
