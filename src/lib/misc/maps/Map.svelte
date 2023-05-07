<script lang="ts">
  import { onMount } from 'svelte';
  import ExternalLibrary from '$lib/misc/ExternalLibrary.svelte';

  // Map options
  export let apiKey: string;
  export let center: google.maps.LatLngLiteral = { lat: 2.8, lng: -187.3 };
  export let zoom: number = 2;

  let url: string = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=initMap';

  let map: google.maps.Map;
  let container: HTMLElement;

  function initMap(): void {
    map = new google.maps.Map(container, {
      center,
      zoom
    });
  }

  onMount(async () => {
    initMap();
  });
</script>

<ExternalLibrary on:loaded={initMap} {url} />

<div class="map" bind:this={container} />

<style>
  .map {
    border: var(--bd, thin solid) var(--color, #000);
    border-radius: var(--rounded, 0.75rem);
    color: var(--color, #000);
    display: var(--display, flex);
    margin: var(--m, 0);
    min-height: var(--mh, 25vh);
    min-width: var(--mw, 25vw);
    padding: var(--pd, 0);
  }
</style>
