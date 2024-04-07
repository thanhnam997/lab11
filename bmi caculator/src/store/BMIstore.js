import { defineStore } from "Pinia"; // Correct import statement for Pinia
import { ref } from 'vue';

export const useBMIStore = defineStore({
  id: 'bmi', // Unique identifier for the store
  state: () => ({
    height: ref(0), // Using ref for reactive height
    weight: ref(0), // Using ref for reactive weight
  }),
  getters: {
    // Define a computed property (getter) to calculate BMI
    bmi() {
      const heightInMeters = this.height.value / 100; // Convert height to meters
      const bmiValue = this.weight.value / (heightInMeters * heightInMeters);
      return isNaN(bmiValue) ? 0 : bmiValue; // Handle NaN case gracefully
    }
  },
  actions: {
    // Actions are methods to update the state
    updateHeight(newHeight) {
      this.height.value = newHeight; // Update height value
    },
    updateWeight(newWeight) {
      this.weight.value = newWeight; // Update weight value
    },
    // You can define other actions here if needed
  },
});
