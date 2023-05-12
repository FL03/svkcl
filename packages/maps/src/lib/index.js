import GoogleMaps from './GoogleMaps.svelte';
import Map from './Map.svelte';
import MapToggle from './MapToggle.svelte';
import * as styles from './styles.js';

export const defaultMapOptions = {
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
};

export { styles };
export { GoogleMaps, Map, MapToggle };
