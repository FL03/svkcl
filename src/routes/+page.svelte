<script>
  import { Card } from '$lib/index.js';
</script>

<div>
  <h1>Welcome to your library project</h1>
  <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>

<Card>
  <svelte:fragment slot="header">
    <h1>Card</h1>
  </svelte:fragment>
  <svelte:fragment slot="content">
    <p>Card content</p>
  </svelte:fragment>
  <svelte:fragment slot="footer">
    <p>Card footer</p>
  </svelte:fragment>
</Card>
