<script>
  import { Button, Card, Dropdown } from '$lib/index.js';

  let count = 0;
</script>

<div>
  <Dropdown />
  <h1>Welcome to your library project</h1>
  <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>

<Card
  class="bg-gradient-to-br from-zinc-700 via-zinc-600 to-zinc-700 min-h-full min-w-full "
  --color="white"
  --rounded="1.5rem"
>
  <svelte:fragment slot="header">
    <h1>Card</h1>
  </svelte:fragment>
  <svelte:fragment slot="default">
    <p>Card content</p>
    <Button
      class="bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-900"
      toggle={() => {
        count++;
      }}>{count}</Button
    >
  </svelte:fragment>
  <svelte:fragment slot="footer">
    <p>Card footer</p>
  </svelte:fragment>
</Card>
