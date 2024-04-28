// bmiStore.js
import { defineStore } from 'pinia';

export const useBmiStore = defineStore('bmiStore', {
  state: () => ({
    weight: 0,
    height: 0,
    bmi: null,
  }),
  actions: {
    updateWeight(newValue) {
      this.weight = newValue;
      // You might also want to trigger BMI recalculation here
      this.calculateBmi();
    },
    updateHeight(newValue) {
      this.height = newValue;
      // You might also want to trigger BMI recalculation here
      this.calculateBmi();
    },
    calculateBmi() {
      // Implement BMI calculation logic here
      this.bmi = this.weight / (this.height / 100) ** 2;
    },
  },
});
