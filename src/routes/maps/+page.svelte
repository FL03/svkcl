<script>
  import { env } from '$env/dynamic/public';
  import { Map } from '$lib/index.js';
</script>

<Map apiKey={env.PUBLIC_GOOGLE_MAPS_API_KEY} --mh="50vh" --mw="50vw" />
