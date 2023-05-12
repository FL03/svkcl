import GoogleMaps from './GoogleMaps.svelte';
import Map from './Map.svelte';
import MapToggle from './MapToggle.svelte';
import * as styles from './styles.js';

export { styles };

/** @type {import("./types/maps.ts").MapOptions} */
export const defaultMapOptions = {
  center: { lat: 37.775, lng: -122.434 },
  mapTypeControl: true,
  mapTypeControlOptions: {
    mapTypeIds: ['hybrid', 'roadmap', 'terrain', 'satellite'],
    position: 3
  },
  mapTypeId: 'hybrid',
  streetViewControl: false,
  zoomControl: true,
  zoomControlOptions: {
    position: 7
  },
  zoom: 13
};


export { GoogleMaps, MapToggle };
export default Map;
