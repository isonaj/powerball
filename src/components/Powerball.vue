<template>
  <div class="container">
    <div class="card">
      <div v-for="index in 7" :key="index">
        {{selection[index-1]}}
      </div>
      <div class="powerball">
        {{powerball ? powerball : 'PB'}}
      </div>
      <div @click="autofill()"><i class="fas fa-bolt"></i></div>
      <div @click="clear()"><i class="fas fa-trash-alt"></i></div>
    </div>
    <div class="picker">
      <div v-for="index in 35" :key="index+10" @click="select(index)">
        {{selection.indexOf(index) >= 0 ? 'X': ''}}
        {{index}}
      </div>
    </div>
    <div style="color: white; background-color: #889bab; font-size:0.8em">SELECT YOUR POWERBALL</div>
    <div class="picker">
      <div v-for="index in 20" :key="index+50" @click="powerball=index">
        {{powerball==index?'X':''}}
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
      selection: [ 27, 3, 32 ],
      powerball: 11
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
      this.selection = [1, 2, 3, 4, 5, 6, 7];
      this.powerball = 8;
      var body = {
        "CompanyId": "GoldenCasket",
        "MaxDrawCountPerProduct": 1,
        "OptionalProductFilter": ["Powerball"]
      };
      var result = axios.post('https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults', body)
        .then(response => { 
          this.selection = response.data.DrawResults[0].PrimaryNumbers;
          this.powerball = response.data.DrawResults[0].SecondaryNumbers[0];
          console.log(response); 
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
