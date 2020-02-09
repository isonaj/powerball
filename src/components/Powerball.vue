<template>
  <div class="container">
    <div class="card">
      <div v-for="index in 7" :key="index" :class="{selecting: index-1==selection.length, selected: index-1<selection.length}">
        {{selection[index-1]}}
      </div>
      <div class="powerball">
        {{powerball ? powerball : 'PB'}}
      </div>
      <div @click="autofill()" style="background-color: #6c4498">
        <font-awesome-icon icon="bolt" />
        <i class="fas fa-bolt"></i>
      </div>
      <div @click="clear()" style="background-color: #767676">
        <font-awesome-icon icon="trash-alt" />
      </div>
    </div>
    <div class="picker">
      <div v-for="index in 35" :key="index+10" @click="select(index)" :class="{selected: selection.indexOf(index) >= 0}">
        <font-awesome-icon v-if="selection.indexOf(index) >= 0" icon="times" />
        {{index}}
      </div>
    </div>
    <div style="color: white; background-color: #889bab; font-size:0.8em">SELECT YOUR POWERBALL</div>
    <div class="picker">
      <div v-for="index in 20" :key="index+50" @click="powerball=index" :class="{selected: index == powerball}">
        <font-awesome-icon v-if="powerball == index" icon="times" />
        {{index}} <i class="fas fa-times"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "Powerball",
  data: function() {
    return { 
      selection: [],
      powerball: 0
    }
  },
  methods: {
    select(number: number) {
      if (this.selection.length < 7 && this.selection.indexOf(number) == -1)
        this.selection.push(number);
    },
    clear() {
      this.selection = [];
      this.powerball = 0;
    },
    autofill() {
      var body = {
        "CompanyId": "GoldenCasket",
        "MaxDrawCountPerProduct": 1,
        "OptionalProductFilter": ["Powerball"]
      };
      var result = axios
        .post('https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults', body)
        .then(response => { 
          this.selection = response.data.DrawResults[0].PrimaryNumbers;
          this.powerball = response.data.DrawResults[0].SecondaryNumbers[0];
        })
        .catch(error => {});
    }
  }
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
  background-color: white;
  border: 1px solid grey;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 4px;
  /*box-shadow: 5px 5px 5px grey;*/
  /*filter: drop-shadow(3px 3px 4px #444444);*/
}
.card div.selecting {
  border: 1px solid #3450a7;
}
.card div.selected {
  background-color: #3450a7;
  border: 1px solid #3450a7;
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
.picker div.selected {
  background-color: #e9e4f1;
}
</style>
