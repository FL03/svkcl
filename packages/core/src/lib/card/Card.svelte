<script lang="ts">
  let cls: string = '';

  export { cls as class };
</script>

<div class="card {cls}">
  {#if $$slots.header}
    <section class="card-header">
      <slot name="header" />
    </section>
  {/if}
  <section class="card-body">
    <slot />
  </section>
  {#if $$slots.footer}
    <section class="card-footer">
      <slot name="footer" />
    </section>
  {/if}
</div>

<style>
  .card {
    align-items: var(--align, center);
    background-color: var(--bg, inherit);
    border: var(--border, thin solid black);
    border-radius: var(--rounded, 1.5rem);
    color: var(--color, black);
    display: flex;
    flex-direction: column;
    justify-content: var(--justify, space-between);
    margin: var(--m, 0 auto);
    min-height: var(--min-height, 100%);
    min-width: var(--min-width, 100%);
    padding: 0;
  }
  .card :global(section) {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    min-height: 100%;
    min-width: 100%;
    padding: var(--pd, 0.5rem);
    position: relative;
  }
  .card-header,
  .card-footer {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card .header {
  }
  .card-body {
    flex-direction: column;
    flex-grow: 1;
  }
</style>
