<script lang="ts">
  export let toggle = () => {};

  export let props: string | undefined = '';
  export let tag: string | undefined = '';
</script>

<button class={props} id={tag} on:click={toggle}>
  <slot />
</button>

<style>
  button {
    align-items: var(--align, center);
    background-color: var(--bg, transparent);
    border: var(--bd, thin solid) var(--color);
    border-radius: var(--rounded, 0.75rem);
    color: var(--color, black);
    display: var(--display, inline-flex);
    justify-content: var(--justify, center);
    margin: var(--m, 0 auto);
    padding: var(--pd, 0.75rem 1.5rem);
  }
</style>
