<script lang="ts">
  export let tailwind: boolean = false;

  let props: string | undefined = '';
  export { props as class };
</script>

<div class={props} id="app">
  <slot />
  {#if tailwind}
    <style>
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
    </style>
  {/if}
</div>

<style>
  :global(body) {
    box-sizing: border-box;
    margin: 0;
    min-height: 100vh;
    padding: 0;
  }
  #app {
    align-items: var(--align, center);
    background-color: var(--bg, white);
    color: var(--color, black);
    display: flex;
    flex-direction: column;
    justify-content: var(--justify, center);
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    padding: 0;
  }
</style>
