<template>
    <div id="app">
      <h1>BMI Calculator</h1>
      <BodyMassIndexForm />
      <p v-if="bmi > 0">Your BMI is: {{ bmi }}</p>
    </div>
  </template>
  
  <script setup>
  import BodyMassIndexForm from './components/BodyMassindexform.vue';
  import { useBMIStore } from '../BMIstore.js';
  import { computed, watchEffect } from 'vue'; // Import computed and watchEffect from Vue
  
  const bmiStore = useBMIStore();
  
  // Watch for changes in height and weight and recalculate BMI
  watchEffect(() => {
    bmiStore.calculateBMI();
  });
  
  // Use computed to get reactive bmi value
  const bmi = computed(() => bmiStore.bmi);
  </script>
  