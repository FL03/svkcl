<script lang="ts">
  import { BottomNav, BottomNavItem, Tooltip } from 'flowbite-svelte';
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte'
  import AppBar from '$lib/AppBar.svelte';
  import Navbar from '$lib/Navbar.svelte';
</script>

<svelte:head>
  <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
</svelte:head>

<div class="bg-white dark:bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 prose dark:prose-invert" id="app">
  <Navbar/>
  <main class="flex grow m-0 p-0 min-h-full min-w-full items-center justify-center">
    <div class="container mx-auto">
      <slot />
    </div>
  </main>

  <Footer customClass="bg-transparent">
    <FooterCopyright href="/" by="Flowbite™" year={2022} />
    <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm prose dark:prose-invertsm:mt-0">
      <FooterLink href="/">About</FooterLink>
      <FooterLink href="/">Privacy Policy</FooterLink>
      <FooterLink href="/">Licensing</FooterLink>
      <FooterLink href="/">Contact</FooterLink>
    </FooterLinkGroup>
  </Footer>
  <AppBar/>
</div>
<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :global(body) {
    box-sizing: border-box;
    margin: 0;
    min-height: 100vh;
    padding: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-wrap: wrap;
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    padding: 0;
  }
</style>
