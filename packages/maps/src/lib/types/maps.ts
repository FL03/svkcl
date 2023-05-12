export enum GoogleMapsLibraries {
  drawing = 'drawing',
  geometry = 'geometry',
  places = 'places',
  visualization = 'visualization'
}

export declare interface GoogleMapsLibraryProps {
  apiKey: string;
  callback?: string;
  libraries?: GoogleMapsLibraries[] | string[];
}

export declare interface GoogleMapsLibraryState {
  loaded: boolean;
}

/**
 * @description Map Type Control Options for the Google Maps Platform
 * @interface MapTypeControlOptions
 * @property {string[]} mapTypeIds
 * @property {number} position
 */
export interface MapTypeControlOptions {
  mapTypeIds?: string[];
  position?: number;
}
/**
 * @description Zoom Control Options for the Google Maps Platform
 * @interface ZoomControlOptions
 * @property {number} position
 */
export interface ZoomControlOptions {
  position?: number;
}

export declare interface MapStyle {
  elementType: string;
  featureType: string;
  stylers: {
    color: string;
  }[];
}

export declare interface MapConfig {
  mapTypeControl?: boolean;
  mapTypeControlOptions?: MapTypeControlOptions;
  mapTypeId?: string;
  streetViewControl?: boolean;
  styles?: MapStyle[] | google.maps.MapTypeStyle[];
  zoomControl?: boolean;
  zoomControlOptions?: ZoomControlOptions;
}

/**
 * @description Map Options for the Google Maps Platform
 * @interface MapOptions
 */
export declare interface MapOptions extends MapConfig {
  center: google.maps.LatLng | google.maps.LatLngLiteral;
  zoom: number;
}
