<template>
  <div>
    <div>
      <label for="weight">Weight (kg):</label>
      <input type="number" id="weight" v-model="weight" required>
    </div>
    <div>
      <label for="height">Height (cm):</label>
      <input type="number" id="height" v-model="height" required>
    </div>
  </div>
</template>


<script setup>
import { useBMIStore } from '../store/bmiStore'; // Import the useBMIStore function from the Pinia store
import { storeToRefs } from 'pinia';   // Import the storeToRefs function from Pinia
import { watch } from 'vue'; // Import the watch function from Vue
const bmiStore = useBMIStore(); // Get the Pinia store instance
const { weight, height } = storeToRefs(bmiStore); // Extract the weight and height reactive references from the store

// Watch for changes to weight and height, and call the calculateBMI function from the store
watch([weight, height], () => {
  bmiStore.calculateBMI();
});
</script>
