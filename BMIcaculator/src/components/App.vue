<template>
  <div id="app">
    <BmiCalculator @update-weight="handleWeightUpdate" @update-height="handleHeightUpdate" />
    <div v-if="bmi">
      <p>Your BMI: {{ bmi }}</p>
    </div>
  </div>
</template>

<script>
import BmiCalculator from '../components/BMIcaculator.vue';
import { useBmiStore } from '../bmiStore';
import { computed } from 'vue'
export default {
  components: {
    BmiCalculator,
  },
  setup() {
    const bmiStore = useBmiStore();// Access the BMI store instance
    const bmi = computed(() => bmiStore.bmi);// Computed property for BMI from the store

    const handleWeightUpdate = (newValue) => {
      // Function to handle weight updates from the BMI Calculator component
      bmiStore.updateWeight(newValue); // Update weight in the store
    };

    const handleHeightUpdate = (newValue) => {
      // Function to handle height updates from the BMI Calculator component
      bmiStore.updateHeight(newValue);// Update height in the store
    };

    return {
      bmi,
      handleWeightUpdate,
      handleHeightUpdate,
    };
  },
};
</script>
<style scoped>
/* Add global styles for the app (optional) */
</style>