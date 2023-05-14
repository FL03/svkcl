<script lang="ts">
  import { env } from '$env/dynamic/public';
  import { onMount } from 'svelte';

  import { Map, styles } from '@svkcl/google-maps';
  import { Button, ButtonGroup } from 'flowbite-svelte';
  import { getPoints, heatmapGradients } from '$lib/heatmap.ts';

  // Values
  let query: string = 'San Francisco';
  // Bindings
  let map: google.maps.Map;
  let infowindow: google.maps.InfoWindow;
  let heatmap: google.maps.visualization.HeatmapLayer;
  let service: google.maps.places.PlacesService;

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

  function createMarker(place: google.maps.places.PlaceResult) {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', () => {
      infowindow.setContent(place.name || '');
      infowindow.open(map);
    });
  }

  function searchMap(req: string) {
    var request = { query: req, fields: ['name', 'geometry'] };
    service.findPlaceFromQuery(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
        if (results[0].geometry?.location) map.setCenter(results[0].geometry.location);
      }
    });
  }

  onMount(() => {
    infowindow = new google.maps.InfoWindow();
    heatmap = new google.maps.visualization.HeatmapLayer({
      data: getPoints(),
      map,
      radius: 3
    });
    service = new google.maps.places.PlacesService(map);
  });
</script>

<section class="flex flex-col grow min-h-screen py-10">
  <ButtonGroup class="space-x-px">
    <Button gradient shadow="green" color="green" on:click={toggleHeatmap}>Heatmap</Button>
    <Button gradient shadow="green" color="green" on:click={changeGradient}>Gradient</Button>
    <Button gradient shadow="green" color="green" on:click={changeRadius}>Radius</Button>
    <Button gradient shadow="green" color="green" on:click={changeOpacity}>Opacity</Button>
  </ButtonGroup>

  <Map
    loadwith={{apiKey: env.PUBLIC_GOOGLE_MAPS_API_KEY, libraries: ['places', 'visualization']}}
    options={{mapId: env.PUBLIC_GOOGLE_MAPS_ID}}
    styles={styles.darkModeMapStyle}
    bind:map
    --min-height="75vh"
    --min-width="75vw"
  />

  <div>
    <div class="flex relative bottom-0">
      <input
        class="border border-gray-300 rounded-md p-2"
        bind:value={query}
        placeholder="Search for a place"
        on:keydown={(e) => e.key === 'Enter' && searchMap(query)}
      />
      <Button shadow="blue" gradient color="cyanToBlue" on:click={() => searchMap(query)}>Search</Button>
    </div>
  </div>
</section>

<style>

</style>
