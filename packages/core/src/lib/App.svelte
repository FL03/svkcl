<script lang="ts">
  let props: string | undefined = '';
  export { props as class };
</script>

<div class={props} id="app">
  <slot />
</div>

<style>
  #app {
    align-items: var(--align, center);
    background-color: var(--bg, white);
    box-sizing: border-box;
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
