<!-- Products page commented out - redirecting to home -->
<template>
  <div class="flex items-center justify-center min-h-screen">
    <p>Redirecting...</p>
  </div>
</template>

<script setup>
// Products page commented out - redirecting to home
import { onMounted } from "vue";

// Redirect to home page
onMounted(() => {
  navigateTo('/');
});
</script>

<style scoped>
/* Products page styles */
</style>
