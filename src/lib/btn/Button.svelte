<script lang="ts">
  export let props: string | undefined;
  export let toggle = () => {};
</script>

<button class={props} on:click={toggle}><slot /></button>

<style>
  button {
    align-items: center;
    background-color: var(--bg, transparent);
    border: var(--bd, thin solid transparent);
    border-radius: var(--rounded, 0.25rem);
    color: var(--color, black);
    display: inline-flex;
    justify-content: center;
    margin: var(--m, 0);
    padding: var(--pd, 0.75rem 1.5rem);
  }
</style>
