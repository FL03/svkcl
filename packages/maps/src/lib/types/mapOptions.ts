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

/**
 * @description Map Options for the Google Maps Platform
 * @interface MapOptions
 * @property {google.maps.LatLng | google.maps.LatLngLiteral} center
 * @property {boolean} mapTypeControl
 * @property {MapTypeControlOptions} mapTypeControlOptions
 * @property {string} mapTypeId
 * @property {boolean} streetViewControl
 * @property {boolean} zoomControl
 * @property {ZoomControlOptions} zoomControlOptions
 * @property {number} zoom
 */
export interface MapOptions {
  center: google.maps.LatLng | google.maps.LatLngLiteral;
  mapTypeControl?: boolean;
  mapTypeControlOptions?: MapTypeControlOptions;
  mapTypeId?: string;
  streetViewControl?: boolean;
  styles?: MapStyle[] | google.maps.MapTypeStyle[];
  zoomControl?: boolean;
  zoomControlOptions?: ZoomControlOptions;
  zoom: number;
  
}
