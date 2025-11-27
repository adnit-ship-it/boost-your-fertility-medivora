import { useSiteTextStore } from "~/stores/siteText";

export default defineNuxtPlugin(async () => {
  const siteTextStore = useSiteTextStore();
  
  // Load site text data before components mount
  // This ensures data is available on initial render
  if (!siteTextStore.siteText) {
    try {
      const siteTextData = await import('~/data/websiteText.json');
      siteTextStore.setSiteText(siteTextData.default);
    } catch (error) {
      console.error('Failed to load static site text:', error);
    }
  }
});


