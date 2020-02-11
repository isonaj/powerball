<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="2">
        <strong>1</strong>
      </v-col>
      <v-col cols="8">
        <div class="card">
          <div
            class="btn"
            v-for="index in 7"
            :key="index"
            :class="{
              selecting: index - 1 == primaryNumbers.length,
              selected: index - 1 < primaryNumbers.length
            }"
          >
            {{ primaryNumbers[index - 1] }}
          </div>
          <div class="btn powerball" :class="{ selected: secondaryNumbers[0] }">
            {{ secondaryNumbers[0] ? secondaryNumbers[0] : 'PB' }}
          </div>
        </div>
        <div class="picker">
          <div
            v-for="index in 35"
            :key="index + 10"
            @click="selectPrimary(index)"
            :class="{ selected: primaryNumbers.indexOf(index) >= 0 }"
          >
            <font-awesome-icon
              v-if="primaryNumbers.indexOf(index) >= 0"
              icon="times"
              style="color: #d6cde4"
            />
            {{ index }}
          </div>
        </div>
        <div class="selectPowerball">
          SELECT YOUR POWERBALL
        </div>
        <div class="picker">
          <div
            v-for="index in 20"
            :key="index + 50"
            @click="selectSecondary(index)"
            :class="{ selected: secondaryNumbers.indexOf(index) >= 0 }"
          >
            <font-awesome-icon
              v-if="secondaryNumbers.indexOf(index) >= 0"
              icon="times"
              style="color: #d6cde4"
            />
            {{ index }} <i class="fas fa-times"></i>
          </div>
        </div>
      </v-col>
      <v-col cols="2" style="display: flex; flex-wrap: wrap;">
        <div class="btn autoFill" @click="autofill()">
          <font-awesome-icon icon="bolt" />
        </div>
        <div class="btn clearSelection" @click="clearSelection()">
          <font-awesome-icon icon="trash-alt" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'Powerball',
  computed: mapState(['primaryNumbers', 'secondaryNumbers']),
  methods: {
    selectPrimary(value: number) {
      this.$store.dispatch('selectPrimary', value);
    },
    selectSecondary(value: number) {
      this.$store.dispatch('selectSecondary', value);
    },
    clearSelection() {
      this.$store.dispatch('clearSelection');
    },
    autofill() {
      this.$store.dispatch('autoFill');
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  max-width: 400px;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
}
.btn {
  display: inline-block;
  box-sizing: border-box;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 4px;
  border: 1px solid #d3d3d3;
  font-weight: bolder;
  color: white;
}
.card div {
  align-items: center;
  background-color: white;
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
  color: #494949;
}
.card div.powerball.selected {
  color: white;
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
.autoFill {
  background-color: #6c4498;
}
.clearSelection {
  background-color: #767676;
}
.selectPowerball {
  color: white;
  background-color: #889bab;
  font-size: 0.8em;
  max-width: 400px;
}
</style>
