<script lang="ts">
  import '$lib/assets/css/tailwind.css';
  import { Footer, Navbar } from '$lib/index.js';
  import type { Link } from '$lib/types.ts';

  let links: Link[] = [
    { label: 'About', href: '/about' },
    { label: 'Maps', href: '/maps' }
  ];
  let bg = 'bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900';
</script>

<div
  class="flex flex-col grow nowrap m-0 p-0 min-h-screen min-w-full max-w-screen prose dark:prose-invert {bg}"
  id="app"
>
  <Navbar name={'svkcl'} {links}>
    <button 
      class="bg-transparent border border-white hover:bg-white hover:text-black px-3 py-2 rounded text-white" 
      on:click={() => alert('Login button clicked')}
    >
      Login
    </button>
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
</div>

<style>
</style>
