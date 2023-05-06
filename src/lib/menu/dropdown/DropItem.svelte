<script lang="ts">
  export let href: string;
</script>

<a
  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
  {href}
>
  <slot />
</a>

<style>
</style>
