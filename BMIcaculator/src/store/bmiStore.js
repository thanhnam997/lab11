import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useBMIStore = defineStore('bmi', () => {
  const weight = ref(null);
  const height = ref(null);
  const bmi = ref(null);
  const bmiCategory = ref(null);

  const calculateBMI = () => {
    if (weight.value && height.value) {
      const heightInMeters = height.value / 100;
      bmi.value = (weight.value / (heightInMeters * heightInMeters)).toFixed(2);
      determineBMICategory(bmi.value);
    } else {
      bmi.value = null;
      bmiCategory.value = null;
    }
  };

  const determineBMICategory = (bmi) => {
    if (bmi < 18.5) {
      bmiCategory.value = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      bmiCategory.value = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      bmiCategory.value = 'Overweight';
    } else {
      bmiCategory.value = 'Obese';
    }
  };

  return {
    weight,
    height,
    bmi,
    bmiCategory,
    calculateBMI,
  };
});