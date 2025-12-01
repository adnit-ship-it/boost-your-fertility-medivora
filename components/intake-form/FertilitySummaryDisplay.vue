<template>
  <div class="mb-8">
    <div class="flex flex-col gap-4 text-black">
      <div v-if="age" class="text-black">
        <b>Age:</b> {{ age }}
      </div>
      <div v-if="gender" class="text-black">
        <b>Gender:</b> {{ gender }}
      </div>
      <div v-if="tryingDuration" class="text-black">
        <b>Trying to Conceive:</b> {{ tryingDuration }} months
      </div>
      <div v-if="bmi" class="text-black">
        <b>BMI:</b> {{ bmi }}
      </div>
      <div v-if="fertilityTesting" class="text-black">
        <b>Fertility Testing:</b> {{ fertilityTesting }}
      </div>
      <hr />
      <p class="text-black">
        Thank you for completing your fertility intake form. Our medical team will review your information and contact you soon to discuss your fertility journey.
      </p>
      <hr />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { FormAnswers } from "~/types/intake-form/form";

// --- PROPS ---
const props = defineProps<{
  formAnswers: FormAnswers;
}>();

// --- COMPUTED PROPERTIES ---
const age = computed(() => {
  // Check for men's or women's age
  return props.formAnswers.ageMen || props.formAnswers.ageWomen || null;
});

const gender = computed(() => {
  return props.formAnswers.genderSelection || null;
});

const tryingDuration = computed(() => {
  // Check for men's or women's trying duration
  return props.formAnswers.tryingDurationMen || props.formAnswers.tryingDurationWomen || null;
});

const bmi = computed(() => {
  // Check for men's or women's height/weight
  const feet = props.formAnswers.feetMen || props.formAnswers.feetWomen;
  const inches = props.formAnswers.inchesMen || props.formAnswers.inchesWomen;
  const weight = props.formAnswers.weightMen || props.formAnswers.weightWomen;

  if (!feet || !inches || !weight) return null;

  // Convert height from feet/inches to inches
  const heightInInches = feet * 12 + inches;
  const heightInMeters = heightInInches * 0.0254;
  const weightInKg = weight * 0.453592; // Convert lbs to kg

  // Calculate BMI: weight (kg) / height (m)²
  const bmiValue = weightInKg / (heightInMeters * heightInMeters);

  return bmiValue.toFixed(1);
});

const fertilityTesting = computed(() => {
  // Check for fertility testing answers
  const menTesting = props.formAnswers.spermHealthTest;
  const womenTesting = props.formAnswers.fertilityTestingWomen;
  const partnerTesting = props.formAnswers.partnerFertilityTesting;
  
  if (menTesting === "Yes") return "Sperm Health Test Completed";
  if (womenTesting && Array.isArray(womenTesting) && womenTesting.length > 0) {
    const tests = womenTesting.filter(t => t !== "None of the above");
    if (tests.length > 0) return tests.join(", ");
  }
  if (partnerTesting && Array.isArray(partnerTesting) && partnerTesting.length > 0) {
    const tests = partnerTesting.filter(t => t !== "None of the above");
    if (tests.length > 0) return "Partner: " + tests.join(", ");
  }
  
  return null;
});
</script>

