<script lang="ts">
  import favicon from '$lib/assets/icons/svelte-logo.svg';
  import type { Link } from '$lib/types/links.ts';
  import Navdrop, { DropToggle } from './navdrop/index.js';
  import NavItem from './NavItem.svelte';
  import NavLogo from './NavLogo.svelte';

  let innerWidth = 0;
  let lg = false;
  let open = false;

  let props: string | undefined;

  // Allows the navbar to respond to external auth state
  export let auth = false;
  // Provides the links for the navbar
  export let links: Link[] = [{ href: '/', label: 'Home' }];
  // Provides the title for the navbar
  export let name = 'SvelteKit';
  // Provides the favicon for the navbar
  export let src: string = favicon;

  export { props as class };
  $: if (innerWidth > 1024) {
    lg = true;
  } else {
    lg = false;
  }
</script>

<svelte:window bind:innerWidth />

<nav class="bg-transparent prose prose-invert top-0 {props}" id="navbar">
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
    border: var(--border, none);
    box-shadow: var(--shadow, none);
    color: var(--color, black);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: var(--justify, center);
    margin: var(--m, 0);
    max-height: var(--max-height, 10vh);
    max-width: var(--max-width, 100vw);
    min-width: var(--min-width, 100%);
    padding: var(--pd, 3rem);
    position: var(--pos, sticky);
    z-index: var(--z, 50);
  }
</style>
