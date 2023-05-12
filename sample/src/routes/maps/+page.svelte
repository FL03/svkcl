<script lang="ts">
  import { env } from '$env/dynamic/public';
  import { onMount } from 'svelte';

  import { Map, styles } from '@svkcl/google-maps';
  import { getPoints, heatmapGradients } from './heatmap.ts';

  // Values
  let a: { [key: string]: string } = { a: 'a'}
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
  <div class="flex max-w-screen px-3 z-50 items-center justify-center absolute">
    <button class="inline-flex rounded mx-3 px-3 py-1" on:click={toggleHeatmap}>Heatmap</button>
    <button class="bg-white inline-flex rounded mx-3 px-3 py-1" on:click={changeGradient}>Gradient</button>
    <button class="bg-white inline-flex rounded mx-3 px-3 py-1" on:click={changeOpacity}>Opacity</button>
    <button class="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 inline-flex rounded mx-3 px-3 py-1" on:click={changeRadius}>Radius</button>
  </div>

  <Map
    loadwith={{
      apiKey: env.PUBLIC_GOOGLE_MAPS_API_KEY,
      libraries: ['places', 'visualization']
    }}
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
      <button on:click={() => searchMap(query)}>Search</button>
    </div>
  </div>
</section>

<style>
  .toggle {
    background-color: bisque;
  }
</style>
