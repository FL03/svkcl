<script lang="ts">
  export let src =
    'https://images.unsplash.com/photo-1617420207078-f9cae65824d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
  export let subtitle =
    'A simple, lightweight, and fast framework for building web applications with Svelte.';
  export let title = 'Gambit';
</script>

<section class="flex grow prose dark:prose-invert" id="hero">
  <div class="flex flex-col px-3">
    <h1 class="font-bold text-4xl m-0 p-0">
      {title}
    </h1>
    <p class="mb-8 leading-relaxed text-lg">
      {subtitle}
    </p>
  </div>
  <picture class="flex lg:max-w-lg md:max-w-md">
    <img alt="Hero Background" class="object-cover object-center rounded" {src} />
  </picture>
</section>

<style>
  #hero {
    margin: 0;
  }
</style>
