<script lang="ts">
  import '$lib/assets/css/tailwind.css';
  import { redirect } from '@sveltejs/kit';
  import App, { Footer, Navbar } from '$lib/index.js';
  import type { Link } from '$lib/types.ts';

  let links: Link[] = [
    { label: 'About', href: '/about' },
    { label: 'Maps', href: '/maps' }
  ];

  let handleLogin = async () => {
    redirect(303, '/login');
  };
</script>

<svelte:head>
  <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
</svelte:head>

<App class="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 prose dark:prose-invert">
  <Navbar name={'svkcl'} {links}>
    <a href="/login">
      <button
        class="bg-transparent border border-white hover:bg-white hover:text-black px-3 py-2 rounded text-white"
      >
        Login
      </button>
    </a>
  </Navbar>
  <main class="flex grow m-0 p-0 min-h-full min-w-full items-center justify-center">
    <div class="container mx-auto">
      <slot />
    </div>
  </main>
  <Footer --color="white">
    <svelte:fragment slot="lhs">
      <a href="/">Home</a>
    </svelte:fragment>
    <svelte:fragment slot="content">
      <span>SVKCL 2023 &copy</span>
    </svelte:fragment>
    <svelte:fragment slot="rhs">
      <a href="/">Connect</a>
    </svelte:fragment>
  </Footer>
</App>

<style>
</style>
