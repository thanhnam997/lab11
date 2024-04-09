import { defineStore } from 'pinia';

export const useBmiStore = defineStore('bmi', {
  state: () => ({
    weight: 0,
    height: 0,
    bmi: 0,
  }),
  actions: {
    calculateBmi() {
      this.bmi = (this.weight / (this.height * this.height)).toFixed(2);
    },
    setWeight(weight) {
      this.weight = weight;
    },
    setHeight(height) {
      this.height = height;
    },
  },
});
