<script lang="ts">
</script>

<div class="card">
  <div class="card-header">
    <slot name="header">Card</slot>
  </div>
  <div class="card-body">
    <slot name="content" />
  </div>
  <div class="card-footer">
    <slot name="footer" />
  </div>
</div>

<style>
  .card {
    background-color: var(--bg, grey);
    border-radius: 0.5rem;
    color: var(--color, black);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0.5rem;
    padding: 0.5rem;
  }
  .card-header {
    align-items: var(--align, center);
    display: flex;
    justify-content: var(--justify, center);
  }
</style>
