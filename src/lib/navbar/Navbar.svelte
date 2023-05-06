<script lang="ts">
  import favicon from '$lib/assets/media/svelte-logo.svg';
  import type { Link } from '$lib/types.ts';
  import Navdrop, { DropToggle } from '$lib/navbar/navdrop/index.js';
  import NavItem from './NavItem.svelte';
  import NavLogo from './NavLogo.svelte';

  let open = false;
  // Allows the navbar to respond to external auth state
  export let auth = false;
  // Provides the links for the navbar
  export let links: Link[] = [{ href: '/', label: 'Home' }];
  // Provides the title for the navbar
  export let name = 'SvelteKit';
  // Provides the favicon for the navbar
  export let src: string = favicon;
</script>

<nav
  class="bg-transparent prose prose-invert min-w-full max-w-screen my-0 p-3 sticky top-0"
  id="navbar"
>
  <NavLogo logo={src}>
    {name}
  </NavLogo>
  <div class="flex grow items-center justify-start p-3" id="main-menu">
    <div class="hidden lg:flex lg:gap-x-12">
      {#each links as link}
        {#if auth && link.protected}
          <NavItem href={link.href}>{link.label}</NavItem>
        {:else if !auth && !link.protected}
          <NavItem href={link.href}>{link.label}</NavItem>
        {/if}
      {/each}
    </div>
  </div>
  <div class="justify-end">
    <DropToggle bind:open />
    <div class="lg:inline-flex hidden">
      <slot name="gutter">
        <button
          class="bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-900 prose dark:prose-invert rounded drop-shadow shadow-lg lg:inline-flex hidden"
        >
          Login
        </button>
      </slot>
    </div>
  </div>
</nav>
<Navdrop bind:open {auth} {links} />

<style>
  nav {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    max-height: 10vh;
    max-width: 100vw;
    min-width: 100%;
    z-index: 50;
  }
  button {
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.75rem 1.5rem;
    width: max-content;
  }
</style>
