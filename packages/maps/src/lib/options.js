
/** @type {google.maps.MapOptions} */
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