<script lang="ts">
  export let toggle = () => {};

  let props: string | undefined = '';
  let tag: string | undefined = '';

  export { props as class };
  export { tag as id };
</script>

<button class={props} id={tag} on:click={toggle}>
  <slot />
</button>

<style>
  button {
    align-items: var(--align, center);
    background-color: var(--bg, inherit);
    border: var(--bd, thin solid var(--color));
    border-radius: var(--rounded, 0.75rem);
    color: var(--color, inherit);
    display: var(--display, inline-flex);
    justify-content: var(--justify, center);
    margin: var(--m, 0 auto);
    padding: var(--pd, 0.75rem 1.5rem);
  }
</style>
