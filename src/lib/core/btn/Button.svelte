<script lang="ts">
  let props: string | undefined = '';
  export let toggle = () => {};
  export { props as class };
</script>

<button class={props} on:click={toggle}>
  <slot />
</button>

<style>
  button {
    align-items: var(--align, center);
    background-color: var(--bg, inherit);
    border: var(--bd, thin solid) var(--color);
    border-radius: var(--rounded, 0.75rem);
    box-shadow: var(--shadow, none);
    color: var(--color, black);
    display: var(--display, inline-flex);
    justify-content: var(--justify, center);
    margin: var(--m, 0 auto);
    padding: var(--pd, 0.75rem 1.5rem);
  }
</style>
