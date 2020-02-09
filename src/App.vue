<template>
  <div id="app">
    <Powerball />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Powerball from "./components/Powerball.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faTrashAlt, faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes);
library.add(faTrashAlt);
library.add(faBolt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

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
