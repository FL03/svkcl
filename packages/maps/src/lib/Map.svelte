<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();
  // Map options
	export let apiKey: string;
  export let center: google.maps.LatLngLiteral = { lat: 2.8, lng: -187.3 };
  export let zoom: number = 2;

	let url: string = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + '&callback=initMap';
  let script: HTMLScriptElement;

  let map: google.maps.Map;
  let container: HTMLElement;

  function initMap(): void {
    map = new google.maps.Map(container, {
      center,
      zoom,
    });
  }
    
	onMount(async () => {
		script.addEventListener('load', () => {
      dispatch('loaded');
    })

    script.addEventListener('error', (event) => {
      console.error("something went wrong", event);
      dispatch('error');
    });
		initMap();
	});
</script>

<svelte:head>
  <script bind:this={script} src={url} />
</svelte:head>

<div class="map rounded-lg" bind:this={container}></div>

<style>
  .map {
    display: var(--display, flex);
    min-height: 25vh;
    min-width: 25vw;
    padding: 0;
  }
</style>