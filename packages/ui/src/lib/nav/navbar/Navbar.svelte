<script lang="ts">
  import favicon from '$lib/assets/icons/svelte-logo.svg';
  import type { Link } from '$lib/types/links.ts';
  import Navdrop, { DropToggle } from './navdrop/index.js';
  import NavItem from './NavItem.svelte';
  import NavLogo from './NavLogo.svelte';

  let innerWidth = 0;
  let lg = false;
  let open = false;

  // Allows the navbar to respond to external auth state
  export let auth = false;
  // Provides the links for the navbar
  export let links: Link[] = [{ href: '/', label: 'Home' }];
  // Provides the title for the navbar
  export let name = 'SvelteKit';
  // Provides the favicon for the navbar
  export let src: string = favicon;
  $: if (innerWidth > 1024) {
    lg = true;
  } else {
    lg = false;
  }
</script>

<!-- <svelte:component this={lg ? options[0].component : options[1].component} /> -->
<svelte:window bind:innerWidth />

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
    {#if innerWidth < 1024}
      <DropToggle bind:open />
      <Navdrop bind:open {auth} {links}>
        <slot />
      </Navdrop>
    {:else}
      <slot />
    {/if}
  </div>
</nav>

<style>
  nav {
    align-items: var(--align, center);
    background-color: var(--bg, transparent);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: var(--justify, center);
    max-height: 10vh;
    max-width: 100vw;
    min-width: 100%;
    z-index: 50;
  }
</style>
