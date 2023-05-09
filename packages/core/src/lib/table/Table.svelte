<script lang="ts">
  let props: string | undefined = '';

  export { props as class };
</script>

<table class={props}>
  <slot />
</table>

<style>
</style>
