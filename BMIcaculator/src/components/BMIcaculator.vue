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
import { useBMIStore } from '../store/bmiStore';
import { storeToRefs } from 'pinia';
import { watch } from 'vue'; // Import watch here

const bmiStore = useBMIStore();
const { weight, height } = storeToRefs(bmiStore);

watch([weight, height], () => {
  bmiStore.calculateBMI();
});
</script>
