<template>
    <div>
      <label>Enter height in cm</label>
      <input type="number" v-model="height" @input="updateHeight" />
      <label>Enter weight in kg</label>
      <input type="number" v-model="weight" @input="updateWeight" />
    </div>
  </template>
  
  <script setup>
  import { useBMIStore } from './BMIStore.js';

  import { computed } from 'vue';
  
  const bmiStore= useBMIStore();
  
  // Use computed to get reactive height and weight values
  const height = computed(() => bmiStore.height);
  const weight = computed(() => bmiStore.weight);
  
  function updateHeight(event) {
    bmiStore.updateHeight(parseFloat(event.target.value));
  }
  
  function updateWeight(event) {
    bmiStore.updateWeight(parseFloat(event.target.value));
  }
  </script>
  