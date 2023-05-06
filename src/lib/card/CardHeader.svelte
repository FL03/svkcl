<script lang="ts">
</script>

<div class="card-header">
  <slot name="header">Card</slot>
</div>

<style>
  .card-header {
    align-items: var(--align, center);
    display: flex;
    justify-content: var(--justify, center);
  }
</style>
