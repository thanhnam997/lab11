import { defineStore } from "Pinia"; // Correct import statement for Pinia
import { ref } from 'vue';

export const useBMIStore = defineStore({
  id: 'bmi', // Unique identifier for the store
  state: () => ({
    height: ref(0), // Using ref for reactive height
    weight: ref(0), // Using ref for reactive weight
  }),
  getters: {
    // Optionally, you can define computed properties (getters) here
    // For example, you can calculate BMI as a getter
    bmi() {
      const heightInMeters = this.height / 100; // Convert height to meters
      return this.weight / (heightInMeters * heightInMeters);
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
