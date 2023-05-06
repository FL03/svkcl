<script lang="ts">
  import type { Link } from '$lib/types.ts';
  import NavItem from './NavItem.svelte';

  // Allows the
  export let auth = false;
  export let links: Link[] = [{ href: '/', label: 'Home' }];
</script>

<div class="hidden lg:flex lg:gap-x-12">
  {#each links as link}
    {#if auth && link.protected}
      <NavItem href={link.href}>{link.label}</NavItem>
    {:else if !auth && !link.protected}
      <NavItem href={link.href}>{link.label}</NavItem>
    {/if}
  {/each}
</div>

<style>
</style>
