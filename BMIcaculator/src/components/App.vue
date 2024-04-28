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
    const bmiStore = useBmiStore();
    const bmi = computed(() => bmiStore.bmi);

    const handleWeightUpdate = (newValue) => {
      bmiStore.updateWeight(newValue);
    };

    const handleHeightUpdate = (newValue) => {
      bmiStore.updateHeight(newValue);
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