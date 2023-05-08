<script lang="ts">
  export let props: string | undefined = undefined;

  export let direction = 'right';
</script>

<span aria-hidden="true" class:props>
  {#if direction === 'left'}
    &larr;
  {:else if direction === 'up'}
    &uarr;
  {:else if direction === 'down'}
    &darr;
  {:else}
    &rarr;
  {/if}
</span>

<style>
</style>
