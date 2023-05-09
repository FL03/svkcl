<script>
</script>

<svelte:head>
  <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
</svelte:head>

<div
  class="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 prose dark:prose-invert"
  id="app"
>
  <main class="container mx-auto"><slot /></main>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  #app {
    box-sizing: border-box;
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
