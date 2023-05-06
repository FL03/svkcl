<script lang="ts">
  import { page } from '$app/stores';

  export let available = false;
  export let href: string;
</script>

<a
  aria-current={$page.url.pathname === href ? 'page' : undefined}
  class="font-semibold px-3 py-2 hover:opacity-75 hover:italic"
  class:available
  {href}
>
  <slot />
</a>

<style>
  .available {
    display: block;
  }
</style>
