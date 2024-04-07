<template>
    <div id="app">
      <h1>BMI Calculator</h1>
      <BodyMassIndexForm />
      <p v-if="bmi > 0">Your BMI is: {{ bmi }}</p>
    </div>
  </template>
  
  <script setup>
  import BodyMassIndexForm from './components/BodyMassindexForm.vue';
import { useBMIStore } from './store';
  
  const bmiStore = useBMIStore();
  
  // Watch for changes in height and weight and recalculate BMI
  watchEffect(() => {
    bmiStore.calculateBMI();
  });
  
  const bmi = computed(() => bmiStore.bmi);
  </script>
  