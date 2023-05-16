# @svkcl/google-maps

---

This is a Svelte library for Google Maps. It is based on the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview).

## Getting Started

Add the library to your project:

```bash
npm install --save-dev @svkcl/google-maps @types/google.maps
```

### Initialize the Google Maps library

Create a .env file with the following content:

```bash
PUBLIC_GOOGLE_MAPS_API_KEY=<your-api-key>
```

#### _**Using `loadwith` parameter**_

```svelte
<script lang="ts">
  import { env } from '$env/dynamic/public';
  import { Map } from '@svkcl/google-maps';

  let map: google.maps.Map;
</script>

<Map
  loadwith={{
    apiKey: env.PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['places', 'visualization']
  }}
  styles={styles.darkModeMapStyle}
  bind:map
  --min-height="75vh"
/>
```

or

#### _**Add the GoogleMaps Component to your +layout.svelte**_

```svelte
<script>
  import { env } from '$env/dynamic/public';
  import { GoogleMaps } from '@svkcl/google-maps';
</script>

<GoogleMaps apiKey={env.PUBLIC_GOOGLE_MAPS_API_KEY} libraries={['places', 'visualization']} />
```

then use the `Map` component in your pages:

```svelte
<script lang="ts">
  import { onMount } from 'svelte';
  import { Map } from '@svkcl/google-maps';

  // Values
  let query: string = '';
  // Bindings
  let map: google.maps.Map;
  let infowindow: google.maps.InfoWindow;
  let service: google.maps.places.PlacesService;

  onMount(() => {
    infowindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);
  });
</script>

<Map bind:map --min-height="75vh" />

<div class="flex relative bottom-0">
  <input
    class="border border-gray-300 rounded-md p-2"
    placeholder="Search for a place"
    bind:value={query}
    on:keydown={(e) => e.key === 'Enter' && searchMap(query)}
  />
  <button on:click={() => searchMap(query)}>Search</button>
</div>
```
