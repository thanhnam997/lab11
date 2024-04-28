import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useBMIStore = defineStore('bmi', () => {
   // Reactive references for weight, height, bmi, and bmiCategory
  const weight = ref(null);
  const height = ref(null);
  const bmi = ref(null);
  const bmiCategory = ref(null);

 
 // Function to calculate BMI based on weight and height
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
// Function to determine the BMI category based on the calculated BMI value
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
 // Return the reactive references and functions from the store
  return {
    weight,
    height,
    bmi,
    bmiCategory,
    calculateBMI,
  };
});