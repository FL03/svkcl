<script lang="ts">
  export let props: string | undefined = '';
</script>

<div class={props} id="banner">
  <slot />
</div>

<style>
</style>
