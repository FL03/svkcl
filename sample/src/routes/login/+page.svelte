<script lang="ts">
  let email: string = '';
  let password: string = '';
</script>

<div
  class="flex flex-col items-center justify-center min-w-full max-w-md p-4 m-4 bg-white rounded-lg shadow-lg"
>
  <h1 class="text-3xl font-bold text-center">Login</h1>
  <form class="flex flex-col justify-center min-w-full mt-4">
    <label class="text-sm font-bold text-gray-700 tracking-wide">
      <input
        class="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
        type="text"
        placeholder="Email"
        bind:value={email}
      />
      Email
    </label>
    <label class="mt-4 text-sm font-bold text-gray-700 tracking-wide">
      <input
        class="text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
        type="password"
        placeholder="Password"
        bind:value={password}
      />
      Password
    </label>
    <button
      class="w-full py-2 mt-8 bg-indigo-500 rounded-md shadow-md text-white font-bold text-center hover:bg-indigo-700"
      on:click={() => alert('Login button clicked')}>Login</button
    >
  </form>
</div>
