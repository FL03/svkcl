<script lang="ts">
  import { env } from '$env/dynamic/public';
  import { onMount } from 'svelte';

  import Map, { MapToggle } from '$lib/index.js';
  import { getPoints, heatmapGradients } from '$lib/assets/data/heatmap.ts';

  import { defaultMapOptions } from '$lib/index.js';
  import { darkModeMapStyle } from '$lib/styles.ts';
  let query: string = 'Museum of Contemporary Art Australia';
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
      position: place.geometry.location,
    });

    google.maps.event.addListener(marker, "click", () => {
      infowindow.setContent(place.name || "");
      infowindow.open(map);
    });
  }
  function searchMap(req: string) {
    var request = {query: req, fields: ['name', 'geometry'],};
    service.findPlaceFromQuery(request, function(results, status) {
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

<section class="flex grow min-h-screen py-10 items-start justify-center">
  <div>
    <input
      class="border border-gray-300 rounded-md p-2"
      bind:value={query}
      placeholder="Search for a place"
    />
    <button on:click={() => searchMap(query)}>Search</button>
  </div>
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

  <Map 
    apiKey={env.PUBLIC_GOOGLE_MAPS_API_KEY}
    libraries={['places', 'visualization']}
    options={{ styles: darkModeMapStyle, ...defaultMapOptions }}
    bind:map 
    --min-height="75vh" 
    --min-width="75vw" 
  />
</section>
