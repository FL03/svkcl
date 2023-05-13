<script>
  import { Button, Card } from 'flowbite-svelte';

  let count = 0;
</script>

<div>
  <h1>Welcome to your library project</h1>
  <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>


<Card class="prose dark:prose-invert bg-transparent">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
  <Button class="w-fit" on:click={() => count += 1}>
    {count === 0 ? 'Click me' : `You clicked me ${count} times`}
  </Button>
</Card>

