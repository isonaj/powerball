<template>
  <div id="app">
    <Powerball />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Powerball from "./components/Powerball.vue";

export default Vue.extend({
  name: "app",
  components: {
    Powerball
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
