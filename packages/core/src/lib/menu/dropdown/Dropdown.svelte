<script lang="ts">
  let options = [
    { id: 1, text: `Where did you go to school?` },
    { id: 2, text: `What is your mother's name?` },
    { id: 3, text: `What is another personal fact that an attacker could easily find with Google?` }
  ];

  let selected: { id: number; text: string } = options[0];
</script>

<select bind:value={selected} on:change={() => (answer = '')}>
  {#each options as question}
    <option value={question}>
      {question.text}
    </option>
  {/each}
</select>

<style>
</style>
