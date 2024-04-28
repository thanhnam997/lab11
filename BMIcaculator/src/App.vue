<template>
  <div>
    <h1>Body Mass Index Calculator</h1>
    <BodyMassIndexForm />
    <div v-if="bmi">
      <p>Your BMI: {{ bmi }}</p>
      <p>BMI Category: {{ bmiCategory }}</p>
    </div>
  </div>
</template>

<script setup>
import BodyMassIndexForm from './components/BMIcaculator.vue';
import { useBMIStore } from './store/bmiStore';
import { storeToRefs } from 'pinia';

const bmiStore = useBMIStore();
const { bmi, bmiCategory } = storeToRefs(bmiStore);
</script>

