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
import BodyMassIndexForm from './components/BMIcaculator.vue';// Import the BodyMassIndexForm component
import { useBMIStore } from './store/bmiStore'; // Import the useBMIStore function from the Pinia store
import { storeToRefs } from 'pinia';// Import the storeToRefs function from Pinia

const bmiStore = useBMIStore();// Get the Pinia store instance
const { bmi, bmiCategory } = storeToRefs(bmiStore);    // Extract the bmi and bmiCategory reactive references from the store  

</script>
