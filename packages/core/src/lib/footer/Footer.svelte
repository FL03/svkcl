<script lang="ts">
</script>

<footer class="bottom-0 relative prose dark:prose-invert m-0 p-3">
  <div class="flex flex-col ml-3 items-center justify-center">
    <slot name="lhs" />
  </div>
  <div class="flex flex-col grow px-3 items-center space-between">
    <slot name="content" />
  </div>
  <div class="flex flex-col items-center mr-3">
    <slot name="rhs" />
  </div>
</footer>

<style>
  footer {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    max-height: 10vh;
    max-width: 100vw;
    min-width: 100%;
  }
</style>
