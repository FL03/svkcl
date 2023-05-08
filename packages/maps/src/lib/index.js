import Loader from './Loader.svelte';
import Map from './Map.svelte';
import MapToggle from './MapToggle.svelte';

/** @type {import("./types/mapOptions.ts").MapOptions} */
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

export { Loader, MapToggle };
export default Map;
