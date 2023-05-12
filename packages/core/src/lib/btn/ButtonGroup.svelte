<script lang="ts">
  import Button from './Button.svelte';

  export let btns: Button[];
</script>

<ul>
  {#each btns as btn}
    <li>
      <Button {...btn} />
    </li>
  {/each}
</ul>

<style>
</style>
