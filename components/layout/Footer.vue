<template>
  <footer class="bg-accentColor1 flex justify-center pb-4" :style="footerHeightStyle">
    <div class="max-w-[1328px] w-full flex items-end justify-between md:justify-center px-4 md:px-8 md:gap-8">
      <div class="flex items-center">
        <NuxtLink to="/">
          <div class="pb-1" :style="logoHeightStyle">
            <img 
              :src="footerLogoSrc" 
              :alt="footerLogoAlt" 
              class="h-full w-full" 
            />
          </div>
        </NuxtLink>
      </div>
      <div class="md:block h-[1px] mb-1.5 w-full mx-2 md:mx-5 flex-1 bg-white"></div>

      <!-- Navigation buttons on the right -->
      <div class="flex items-center gap-x-2 md:gap-x-6">
        <NuxtLink to="/about"
          class="text-white text-[14px] md:text-[18px] lg:text-[20px] hover:text-gray-200 transition-colors duration-200">
          {{ navigation?.about || 'About' }}
        </NuxtLink>
        <NuxtLink to="/contact"
          class="text-white text-[14px] md:text-[18px] lg:text-[20px] hover:text-gray-200 transition-colors duration-200">
          {{ navigation?.contactUs || 'Contact Us' }}
        </NuxtLink>
        <!-- Products page commented out -->
        <!-- <NuxtLink to="/products"
          class="text-white text-[14px] md:text-[18px] lg:text-[20px] font-medium hover:text-gray-200 transition-colors duration-200">
          {{ navigation?.products || 'Products' }}
        </NuxtLink> -->
      </div>
    </div>
    <!-- Logo on the left -->
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useSiteTextStore } from "~/stores/siteText";

const route = useRoute(); // Auto-imported in Nuxt 3
const siteTextStore = useSiteTextStore();

// Destructure site text sections
const common = computed(() => siteTextStore.getCommonText());
const navigation = computed(() => common.value?.navigation);

// Get current page name from route
const getCurrentPageName = () => {
  const path = route.path;
  if (path === '/') return 'home';
  if (path.startsWith('/about')) return 'about';
  if (path.startsWith('/products')) return 'products';
  if (path.startsWith('/contact')) return 'contact';
  return null; // Return null for other pages to use home.layout fallback
};

// Get page-specific layout or fall back to home.layout
const getPageLayout = computed(() => {
  const pageName = getCurrentPageName();
  const pageData = pageName ? siteTextStore.siteText?.[pageName] : null;
  return pageData?.layout || siteTextStore.siteText?.home?.layout || null;
});

const footerLogo = computed(() => getPageLayout.value?.footer?.logo);
const footerLogoSrc = computed(() => footerLogo.value?.src || "/assets/images/brand/primary-logo-1764263764776.png");
const footerLogoAlt = computed(() => footerLogo.value?.alt || common.value?.accessibility?.brandLogo || "Brand logo");

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

// Dynamic heights
const footerHeightStyle = computed(() => {
  const heights = getPageLayout.value?.footer?.height;
  if (!heights) {
    return { height: isMobile.value ? '64px' : '72px' };
  }
  return {
    height: isMobile.value ? heights.mobile : heights.desktop
  };
});

const logoHeightStyle = computed(() => {
  const heights = footerLogo.value?.height;
  if (!heights) {
    return { height: isMobile.value ? '30px' : '32px' };
  }
  return {
    height: isMobile.value ? heights.mobile : heights.desktop
  };
});
</script>

<style scoped>
/* Custom styles if needed */
</style>
