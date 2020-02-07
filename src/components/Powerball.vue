<template>
  <div class="container">
    <div class="card">
      <div v-for="index in 7" :key="index"><span>{{index}}</span></div>
      <div class="powerball">PB</div>
      <div><i class="fas fa-bolt"></i></div>
      <div><i class="fas fa-trash-alt"></i></div>
    </div>
    <div class="picker">
      <div v-for="index in 35" :key="index+10"><span>{{index}} <i class="fas fa-times"></i></span></div>
    </div>
    <div style="color: white; background-color: #889bab; font-size:0.8em">SELECT YOUR POWERBALL</div>
    <div class="picker">
      <div v-for="index in 20" :key="index+50"><span>{{index}} <i class="fas fa-times"></i></span></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Powerball"
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 400px;
}
.card {
  display: flex;
  max-width: 400px;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
}
.card div {
  align-items: center;
  display: inline-block;
  box-sizing: border-box;
  color: white;
  background-color: #3450a7;
  border: 1px solid #3450a7;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 4px;
}
.card div.powerball {
  background-color: #889bab;
  border: 1px solid #889bab;
}
.card div span {
  align-items: center;
}

.picker {
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
}
.picker div {
  align-items: center;
  box-sizing: border-box;
  color: #6c4498;
  border: 1px solid #889bab;
  flex: 0 0 40px;
  height: 40px;
}
</style>
