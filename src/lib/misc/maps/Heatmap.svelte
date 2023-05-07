<script lang=ts>
  import { env } from '$env/dynamic/public';
  import Map from './Map.svelte';
  import MapToggle from './MapToggle.svelte';
  import { getPoints, heatmapGradients } from '$lib/misc/maps/heatmap.ts';

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
    map = new google.maps.Map(Map, {
      center,
      zoom
    });
  }
</script>


<section class="flex min-h-full min-w-full grow">
  <div class="flex items-center justify-center">
    <MapToggle props="" toggle={toggleHeatmap}>Heatmap</MapToggle>
    <MapToggle props="" toggle={changeGradient}>Gradient</MapToggle>
    <MapToggle props="" toggle={changeOpacity}>Opacity</MapToggle>
    <MapToggle props="" toggle={changeRadius}>Radius</MapToggle>
  </div>
  <Map apiKey={env.PUBLIC_GOOGLE_MAPS_API_KEY} --min-height="50vh" --min-width="50vw" bind:map={map}/>
</section>

