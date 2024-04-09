<template>
  <div>
    <input type="number" v-model.number="weight" placeholder="Weight (kg)">
    <input type="number" v-model.number="height" placeholder="Height (m)">
    <button @click="calculateBmi">Calculate BMI</button>
    <div v-if="bmi">
      Your BMI is: {{ bmi }}
    </div>
  </div>
</template>

<script>
import { useBmiStore } from './bmiStore'

export default {
  name: 'BmiCalculator',
  setup() {
    const bmiStore = useBmiStore();

    return {
      weight: bmiStore.weight,
      height: bmiStore.height,
      bmi: bmiStore.bmi,
      calculateBmi: bmiStore.calculateBmi,
    };
  },
};
</script>
<style>
/* CSS styles specific to BmiCalculator.vue component */
.result {
  margin-top: 10px;
  font-weight: bold;
  color: green;
}
</style>