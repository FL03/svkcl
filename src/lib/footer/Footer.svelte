<script lang="ts">
</script>

<footer class="prose dark:prose-invert">
  <div class="gutter gutter-left">
    <slot name="lhs" />
  </div>
  <div class="content">
    <slot name="content" />
  </div>
  <div class="gutter gutter-right">
    <slot name="rhs" />
  </div>
</footer>

<style>
  footer {
    align-items: var(--align, center);
    background-color: var(--bg, transparent);
    bottom: 0;
    color: var(--color, black);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: var(--justify, space-between);
    margin: var(--m, 0);
    max-height: var(--max-height, 10vh);
    max-width: 100vw;
    min-width: 100%;
    padding: var(--pd, 0);
    position: relative;
  }
  .content {
    align-items: var(--align, center);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-wrap: nowrap;
    justify-content: var(--justify, space-between);
    padding: var(--pd, 0.75rem 1.5rem);
  }
  .gutter {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.75rem 1.5rem;
    width: max-content;
  }
  .gutter .gutter-left {
    margin: 0 0 0 auto;
  }
  .gutter .gutter-right {
    margin-left: auto;
  }
</style>
