<script lang="ts">
  import NavLogo from '$lib/navbar/NavLogo.svelte';
  import DropItem from './DropItem.svelte';
  import { clickOutside } from '$lib/utils/index.js';
  import type { Link } from '$lib/types.ts';

  export let auth = false;
  export let links: Link[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' }
  ];
  export let open = false;
  export let title = 'SvelteKit';
</script>

<aside
  class="dropdown absolute flex max-w-md w-full items-center justify-between opacity-95 py-24 shadow-lg drop-shadow"
  class:open
  on:keydown={(e) => {
    if (e.key === 'Escape') open = false;
    if (e.key === 'Tab') open = false;
  }}
  use:clickOutside
  on:click_outside={() => {
    open = false;
  }}
  style="display: {open ? 'flex' : 'none'}"
>
  <!-- Background backdrop, show/hide based on slide-over state. -->
  <div class="fixed inset-0 z-50" />
  <div
    class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
  >
    <NavLogo>{title}</NavLogo>
    <div class="mt-6 flow-root">
      <div class="-my-6 divide-y divide-gray-500/10">
        <div class="space-y-2 py-6">
          {#each links as link}
            {#if auth && link.protected}
              <DropItem href={link.href}>{link.label}</DropItem>
            {:else if !auth && !link.protected}
              <DropItem href={link.href}>{link.label}</DropItem>
            {/if}
          {/each}
        </div>
        <div class="py-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</aside>

<style>
  .dropdown {
    background-color: var(--bg, grey);
    color: var(--color, black);
    min-height: var(--min-height, 100vh);
    position: absolute;
    right: -100%;
    top: 0;
    transition: left 0.3s ease-in-out;
    z-index: var(--z, 50);
  }
  .open {
    right: 0;
  }
</style>
