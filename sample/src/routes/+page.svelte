<script>
  import { Button, Card } from '@svkcl/core';

  let count = 0;
</script>

<div>
  <h1>Welcome to your library project</h1>
  <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>

<Card class="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" --rounded="1.5rem">
  <svelte:fragment slot="header">
    <h1>Card</h1>
  </svelte:fragment>
  <svelte:fragment slot="content">
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
