<template>
    <UiSectionWrapper v-if="shouldShowPriority" class="pt-6 md:pt-2">
        <UiSectionContainer class="flex flex-col items-start">
            <h2 v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
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
            }" class="text-[20px] md:text-[28px] lg:text-[32px] w-full text-left  font-semibold">
                {{ priority?.title || 'Led by Leading Fertility Experts' }}
            </h2>
            <div class="mt-6 lg:mt-10 flex flex-col md:flex-row gap-4 md:justify-between w-full px-8 lg:px-0">
                <div v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
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
                }" class="flex flex-row gap-2 items-center">
                    <img :src="featureIcon?.src || '/assets/images/checkmark-star.svg'"
                        :alt="featureIcon?.alt || 'checkmark'"
                        class="w-[28px] h-[28px]" />
                    <p class="text-[16px] lg:text-[20px] font-medium text-black">{{ priority?.features?.noHiddenFees || 'Published Research' }}</p>
                </div>
                <div v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
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
                }" class="flex flex-row gap-2 items-center">
                    <img :src="featureIcon?.src || '/assets/images/checkmark-star.svg'"
                        :alt="featureIcon?.alt || 'checkmark'"
                        class="w-[28px] h-[28px]" />
                    <p class="text-[16px] lg:text-[20px] font-medium text-black">
                        {{ priority?.features?.expeditedDelivery || 'PhD Embryology' }}
                    </p>
                </div>
                <div v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 400,
                        type: 'ease-in',
                        stiffness: 250,
                        damping: 25,
                        mass: 1,
                        delay: 250,
                    },
                }" class="flex flex-row gap-2 items-center">
                    <img :src="featureIcon?.src || '/assets/images/checkmark-star.svg'"
                        :alt="featureIcon?.alt || 'checkmark'"
                        class="w-[28px] h-[28px]" />
                    <p class="text-[16px] lg:text-[20px] font-medium text-black">
                        {{ priority?.features?.doctorLedPlans || 'Author Led' }}
                    </p>
                </div>
                <div v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 400,
                        type: 'ease-in',
                        stiffness: 250,
                        damping: 25,
                        mass: 1,
                        delay: 300,
                    },
                }" class="flex flex-row gap-2 items-center">
                    <img :src="featureIcon?.src || '/assets/images/checkmark-star.svg'"
                        :alt="featureIcon?.alt || 'checkmark'"
                        class="w-[28px] h-[28px]" />
                    <p class="text-[16px] lg:text-[20px] font-medium">
                        {{ priority?.features?.moneyBackGuarantee || 'Proven Methods' }}
                    </p>
                </div>
            </div>
            <div
                class="pb-12 lg:pb-0 px-8 lg:px-0 mt-12 lg:mt-16 flex flex-col md:flex-row gap-8 justify-center md:justify-around w-full">
                <div v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 400,
                        type: 'ease-in',
                        stiffness: 250,
                        damping: 25,
                        mass: 1,
                        delay: 350,
                    },
                }" class="flex flex-col items-start lg:items-center w-full max-w-[400px]">
                    <h3
                        class="text-accentColor1 text-[20px] lg:text-[20px] font-semibold text-left lg:text-center w-full">
                        {{ priority?.support?.title || 'Dr. Marion Vollmer' }}
                    </h3>
                    <p class="text-accentColor1 text-[16px] lg:text-[16px] font-semibold text-left lg:text-center w-full mt-1">
                        {{ priority?.support?.subtitle || 'PhD in Embryology' }}
                    </p>
                    <div class="h-0.5 w-10 bg-accentColor1 mt-0"></div>
                    <p class="font-medium mt-4 tracking-tight w-full text-left lg:text-center">
                        {{ priority?.support?.description || 'A published world-leading Sperm Swimming Specialist. Dr. Vollmer ensures that every recommendation is backed by rigorous science and clinical expertise to maximize your chances.' }}
                    </p>
                </div>
                <div v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 400,
                        type: 'ease-in',
                        stiffness: 250,
                        damping: 25,
                        mass: 1,
                        delay: 350,
                    },
                }" class="flex flex-col items-start lg:items-center w-full max-w-[400px]">
                    <h3
                        class="text-accentColor1 text-[20px] lg:text-[24px] font-semibold text-left lg:text-center w-full">
                        {{ priority?.providers?.title || 'Daniel Wilson' }}
                    </h3>
                    <p class="text-accentColor1 text-[16px] lg:text-[18px] font-semibold text-left lg:text-center w-full mt-1">
                        {{ priority?.providers?.subtitle || 'Founder & Author' }}
                    </p>
                    <div class="h-0.5 w-10 bg-accentColor1 mt-0"></div>
                    <p class="font-medium mt-4 tracking-tight w-full text-left lg:text-center">
                        {{ priority?.providers?.description || 'Creator of the Boost Fertility method. Daniel brings deep industry knowledge and is the author of \'We Want a Baby Now\', the essential guide to overcoming infertility on a budget.' }}
                    </p>
                    <div class="flex flex-row gap-4 w-full justify-start lg:justify-center items-center mt-2">
                        <img :src="certificationIcon?.src || '/assets/images/checkmark-star.svg'"
                            :alt="certificationIcon?.alt || 'checkmark'"
                            class="w-[28px] h-[28px] object-cover" />
                        <p>{{ priority?.providers?.certification || 'Author of \'We Want a Baby Now\' (3rd Edition)' }}</p>
                    </div>
                </div>
            </div>
        </UiSectionContainer>
    </UiSectionWrapper>
</template>

<script setup>
import { computed } from 'vue';
import { useSiteTextStore } from "~/stores/siteText";

const siteTextStore = useSiteTextStore();

// Destructure site text sections
const priority = computed(() => siteTextStore.getAboutText()?.priority);
const shouldShowPriority = computed(() => (priority.value?.show ?? true));
const featureIcon = computed(() => priority.value?.media?.featureIcon);
const certificationIcon = computed(() => priority.value?.media?.certificationIcon);
</script>