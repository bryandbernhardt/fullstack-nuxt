<script setup lang="ts">
// for more safety and security, consider using localStorage
const auth = useCookie('pokemon-auth');

function authenticate() {
  auth.value = '3gfs29ga6d';
}

function logout() {
  auth.value = '';
}
</script>

<template>
  <h1>Login</h1>
  <button @click="authenticate">Login</button>
  <button @click="logout">Logout</button>
</template>

<style scoped>

</style>