<script lang="ts">
  import "$lib/assets/css/app.css";
  import { Appbar, Footer, Navbar } from '$lib/cmp/index.js';
</script>

<svelte:head>
  <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
</svelte:head>

<div class="bg-white dark:bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 prose dark:prose-invert" id="app">
  <Navbar/>
  <main class="flex grow m-0 p-0 min-h-full min-w-full items-center justify-center">
    <div class="container mx-auto">
      <slot />
    </div>
  </main>

  <Footer/>
  <Appbar/>
</div>

<style>

  #app {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-wrap: wrap;
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    padding: 0;
  }
</style>
