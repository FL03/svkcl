<script lang="ts">
  export let logo = 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600';
</script>

<a class="flex max-w-sm px-3 py-1 prose prose-invert" href="/">
  <button class="flex flex-auto nowrap hover:opacity-95 w-full">
    <img alt="#" class="mr-3 h-6 sm:h-9 rounded-full drop-shadow shadow-lg" src={logo} />
    <span class="self-center font-semibold whitespace-nowrap prose-xl hidden lg:flex">
      <slot />
    </span>
  </button>
</a>

<style>
</style>
