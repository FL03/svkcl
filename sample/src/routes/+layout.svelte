<script lang="ts">
  import '$lib/assets/css/app.css';
  import { env } from '$env/dynamic/public';
  import { Appbar, NavBar } from '$lib/cmp/index.js';
  import { GoogleMaps } from '@svkcl/google-maps';
</script>

<svelte:head>
  <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
</svelte:head>

<GoogleMaps
  apiKey={env.PUBLIC_GOOGLE_MAPS_API_KEY}
  libraries={['places', 'visualization']}
/>

<div
  class="flex flex-col min-h-screen min-w-full max-w-screen m-0 p-0 bg-white dark:bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 prose dark:prose-invert"
>
  <NavBar />
  <main class="container mx-auto items-center m-0">
    <slot />
  </main>
</div>

<Appbar />

<style>
</style>
