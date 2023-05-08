import type { MapOptions } from './mapOptions.ts';

export default class GoogleWrapper {
  google;

  constructor(google) {
    this.google = google;
  }

  createMap(container: HTMLElement, options: MapOptions): google.maps.Map {
    return new this.google.maps.Map(container, options);
  }

  latLng(latitude: number, longitude: number) {
    return new this.google.maps.latLng(latitude, longitude);
  }
}
