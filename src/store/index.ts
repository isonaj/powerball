import Vue from 'vue';
import Vuex from 'vuex';
import LottService from '@/services/LottService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    primaryNumbers: <number[]>[],
    secondaryNumbers: <number[]>[]
  },
  mutations: {
    SELECT_PRIMARY(state, value: number) {
      state.primaryNumbers.push(value);
    },
    SELECT_SECONDARY(state, value: number) {
      state.secondaryNumbers.push(value);
    },
    CLEAR_SELECTION(state) {
      state.primaryNumbers = [];
      state.secondaryNumbers = [];
    },
    SET_SELECTION(state, { primaryNumbers, secondaryNumbers }) {
      state.primaryNumbers = primaryNumbers;
      state.secondaryNumbers = secondaryNumbers;
    }
  },
  actions: {
    clearSelection({ state, commit }) {
      commit('SET_SELECTION', { primaryNumbers: [], secondaryNumbers: [] });
    },
    selectPrimary({ state, commit }, value: number) {
      if (
        this.state.primaryNumbers.length < 7 &&
        this.state.primaryNumbers.indexOf(value) == -1 &&
        this.state.secondaryNumbers.indexOf(value) == -1
      ) {
        commit('SELECT_PRIMARY', value);
      }
    },
    selectSecondary({ state, commit }, value: number) {
      if (
        this.state.secondaryNumbers.length < 1 &&
        this.state.secondaryNumbers.indexOf(value) == -1 &&
        this.state.primaryNumbers.indexOf(value) == -1
      ) {
        commit('SELECT_SECONDARY', value);
      }
    },
    autoFill({ commit }) {
      LottService.getLatestResults()
        .then(response => {
          commit('SET_SELECTION', {
            primaryNumbers: response.data.DrawResults[0].PrimaryNumbers,
            secondaryNumbers: response.data.DrawResults[0].SecondaryNumbers
          });
        })
        .catch(error => {
          console.log('ERROR!');
        });
    }
  },
  modules: {}
});
