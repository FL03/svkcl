<script lang="ts">
</script>

<div class="card">
  <section class="card-header">
    <slot name="header"/>
  </section>
  <section class="card-body">
    <slot name="content" />
  </section>
  <section class="card-footer">
    <slot name="footer" />
  </section>
</div>

<style>
  .card {
    align-items: var(--align, center);
    background-color: var(--bg, grey);
    border-radius: var(--rounded, 1.5rem);
    color: var(--color, black);
    display: flex;
    flex-direction: column;
    justify-content: var(--justify, space-between);
    margin: var(--m, 0 auto);
    padding: var(--pd, 0.5rem);
  }
  .card section {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    min-height: var(--min-height, 100%);
    min-width: var(--min-width, 100%);
    padding: 0;
    position: relative;
  }
  .card-header {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card-body {
    flex-direction: column;
    flex-grow: 1;
  }
  .card-footer {
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
