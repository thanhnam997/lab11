<template>
  <div class="bmi-calculator">
    <h2>BMI Calculator</h2>
    <div>
      <label for="weight">Weight (kg):</label>
      <input type="number" id="weight" v-model="weight"  @change="$emit('update-weight', $event.target.value)" />
    </div>
    <div>
      <label for="height">Height (cm):</label>
      <input type="number" id="height" v-model="height" @change="$emit('update-height', $event.target.value)" />
    </div>
    <div v-if="bmi">
      
    </div>
  </div>
</template>


<script>
import { useBmiStore } from '../bmiStore';
import { computed } from 'vue';
import { watch } from 'vue'; // Import watch here

export default {
  setup() {
    const bmiStore = useBmiStore();

    const weight = computed(() => bmiStore.weight);
    const height = computed(() => bmiStore.height);
    const bmi = computed(() => bmiStore.bmi);

    watch([weight, height], () => {
      bmiStore.calculateBmi(); // Trigger calculation on weight/height change
    });

    return {
      weight,
      height,
      bmi,
    };
  },
};
</script>

<style scoped>
/* Add styles for the calculator layout here */
</style>