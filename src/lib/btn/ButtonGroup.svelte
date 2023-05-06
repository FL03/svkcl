<script>
  import Button from './Button.svelte';

  export let btns;
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
