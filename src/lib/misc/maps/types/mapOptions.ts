
export interface MapTypeControlOptions {
    mapTypeIds?: string[],
    position?: number
}

export interface ZoomControlOptions {
    position?: number
}

export interface MapOptions {
    center: google.maps.LatLng | google.maps.LatLngLiteral,
    mapTypeControl?: boolean,
    mapTypeControlOptions?: MapTypeControlOptions,
    mapTypeId?: string,
    streetViewControl?: boolean,
    zoomControl?: boolean,
    zoomControlOptions?: ZoomControlOptions,
    zoom: number
}

export const defaultMapOptions: MapOptions = {
    center: {lat: 37.774546, lng: -122.433523},
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
    zoom: 7
}
