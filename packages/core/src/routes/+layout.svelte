<script lang="ts">
  import '$lib/assets/css/tailwind.css';
  
  let bg = 'bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900';
</script>

<div
  class="flex flex-col grow nowrap m-0 p-0 min-h-screen min-w-full max-w-screen prose dark:prose-invert {bg}"
  id="app"
>

</div>

<style>
  .bg-gradient-to-br {
    background-image: linear-gradient(to bottom right, var(--from), var(--via), var(--to));
  }
  #app {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    padding: 0;
  }
</style>
