<script lang="ts">
  export let props: string | undefined = '';
</script>

<table class={props}>
  <slot />
</table>

<style>
</style>
