<script setup>
// default fetch only works in client-side
// const charizard = await fetch('https://pokeapi.co/api/v2/pokemon/charizard').then(res => res.json());

// useAsyncData composable is responsible for wrapping async logic and returning the result once it is resolved.
// const { data: charizard } = await useAsyncData('charizard', () => {
//   // Vue $fetch works in server-side and client-side
//   return $fetch('https://pokeapi.co/api/v2/pokemon/charizard')
// })

// Nuxt compact pattern for fetch API in client
// const charizard = await useFetch('https://pokeapi.co/api/v2/pokemon/charizard');

const { data: charizard, error } = await useFetch('/api/newmew');
</script>

<template>
  <h1>Home Page for Nuxt 3 Server Course</h1>
  <ul v-if="charizard">
    <li>
      <img :src="charizard.sprite">
    </li>
    <li>
      {{ charizard.id }}: {{ charizard.name }}
    </li>
  </ul>

  <div v-else>
    <p>{{ error }}</p>
  </div>
</template>

<style scoped>

</style>