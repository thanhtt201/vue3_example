<template>
  <div>
    <router-link to="/vue3" class="nav">Vue 3 example</router-link>
    <router-link to="/vuex">VueX example</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  padding: 0 20px;
}
</style>
