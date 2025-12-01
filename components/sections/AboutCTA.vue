<template>
  <UiSectionWrapper v-if="shouldShowCTA" class="py-20">
    <UiSectionContainer class="flex flex-col items-center text-center">
      <h2 
        v-motion 
        :initial="{ opacity: 0, y: 32 }" 
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 400,
            type: 'ease-in',
            stiffness: 250,
            damping: 25,
            mass: 1,
            delay: 100,
          },
        }" 
        class="text-[20px] md:text-[28px] lg:text-[32px] font-semibold text-black mb-4"
      >
        {{ cta?.title || 'Ready to Start Your Journey?' }}
      </h2>
      
      <p 
        v-motion 
        :initial="{ opacity: 0, y: 32 }" 
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 400,
            type: 'ease-in',
            stiffness: 250,
            damping: 25,
            mass: 1,
            delay: 150,
          },
        }" 
        class="text-[16px] md:text-[20px] lg:text-[24px] text-black mb-8"
      >
        {{ cta?.subtitle || 'Get a personalized budget and plan today.' }}
      </p>

      <div 
        v-motion 
        :initial="{ opacity: 0, y: 32 }" 
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 400,
            type: 'ease-in',
            stiffness: 250,
            damping: 25,
            mass: 1,
            delay: 200,
          },
        }"
      >
        <NuxtLink to="/get-started">
          <UiButton 
            :width="isMobile ? '200px' : '320px'" 
            :height="isMobile ? '40px' : '48px'" 
            :font-size="isMobile ? '16' : '20'"
            class="bg-accentColor1 text-white" 
            text-color="text-white"
          >
            {{ cta?.buttonText || 'Take the Assessment' }}
          </UiButton>
        </NuxtLink>
      </div>
    </UiSectionContainer>
  </UiSectionWrapper>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useSiteTextStore } from "~/stores/siteText";

const siteTextStore = useSiteTextStore();

// Get CTA data from about section
const cta = computed(() => siteTextStore.getAboutText()?.cta);
const shouldShowCTA = computed(() => (cta.value?.show ?? true));

// Mobile detection
const isMobile = ref(false);

const checkMobile = () => {
  if (!process.client) return;
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<style scoped>
/* Custom styles if needed */
</style>

