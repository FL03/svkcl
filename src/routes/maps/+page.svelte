<script lang=ts>
  import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';
  import Map from '$lib/misc/maps/index.js';

</script>


<section class="flex min-h-full min-w-full grow">

  <Map 
    apiKey={PUBLIC_GOOGLE_MAPS_API_KEY}
    --min-height="50vh" 
    --min-width="50vw"
  />
</section>

