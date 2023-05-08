<script lang="ts">
  export let props: string | undefined = '';
</script>

<ul class={props}>
  <slot />
</ul>

<style>
  ul {
    align-items: var(--align, center);
    background-color: var(--bg, transparent);
    border-radius: var(--rounded, 0.5rem);
    color: var(--color, black);
    display: flex;
    flex-direction: var(--dir, column);
    justify-content: var(--justify, space-between);
    list-style: var(--list-style, none);
    margin: var(--m, 0 auto);
    padding: var(--pd, 0.5rem);
  }
</style>
