<template>
<div>
    <section class="position-relative overflow-hidden">
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-start chirld-position">
                    <h1 class="fw-lighter text-white p-2 text-title-mobile">{{ prpContent.hero.title }}</h1>
                    <p class="d-none d-xl-block text-white pe-5 fw-lighter p-2">{{ prpContent.hero.subtitle }}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-none d-xl-block">
                <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start py-5 h-100 height-section-top" style="background: #000000;">
                    <h1 class="fw-lighter" style="color: rgb(0,0,0);">{{ prpContent.hero.sidebarHiddenTitle }}</h1>
                    <h4 class="fw-lighter" style="color: rgb(0,0,0);">{{ prpContent.hero.sidebarHiddenSubtitle }}</h4>
                </div>
            </div>
            <div class="col">
                <div class="shadow-custom height-section-top">
                    <img class="w-100 h-100 obj-cover" :src="prpContent.hero.heroImageSrc" :alt="prpContent.hero.heroImageAlt">
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center margin-section">
                <div class="col-xl-6">
                    <h2 class="text-center fw-lighter mb-xl-4 text-color-main fw-bold text-uppercase">{{ prpContent.benefits.heading }}</h2>
                    <p class="justified-text">{{ prpContent.benefits.paragraph }}</p>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-black padding-section">
        <div class="container">
            <div class="d-xl-flex justify-content-xl-center align-items-xl-center margin-section text-white">
                <div class="row">
                    <div class="col">
                        <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 py-2 p-xl-5 bg-black">
                            <div class="row">
                                <div class="col-12 col-xl-6">
                                    <h2 class="fw-lighter text-white text-section-1 p-2 text-uppercase">{{ prpContent.science.heading }}</h2>
                                    <p class="fw-lighter text-white text-section-1 p-2">{{ prpContent.science.intro }}</p>
                                    <div v-for="(item, index) in prpContent.science.leftItems" :key="index" class="my-3">
                                        <p class="fw-bold text-white text-section-1 p-2 mb-2">{{ item.title }}</p>
                                        <p class="fw-lighter text-white text-section-1 p-2">{{ item.description }}</p>
                                    </div>
                                </div>
                                <div class="col-12 col-xl-6">
                                    <div v-for="(item, index) in prpContent.science.rightItems" :key="index" class="my-3">
                                        <p class="fw-bold text-white text-section-1 p-2 mb-2">{{ item.title }}</p>
                                        <p class="fw-lighter text-white text-section-1 p-2">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="padding-section">
        <div class="container">
            <div class="padding-section">
                <h2 class="text-center fw-lighter text-uppercase py-3 text-color-main fw-bold mb-3">{{ prpContent.hairRestoration.heading }}</h2>
                <div class="row g-0">
                    <div class="col px-xl-5">
                        <p class="mt-3">{{ prpContent.hairRestoration.intro }}</p>
                        <ul>
                            <li v-for="(bullet, index) in prpContent.hairRestoration.bullets" :key="index" class="my-3">{{ bullet }}</li>
                        </ul>
                        <p class="mt-3">{{ prpContent.hairRestoration.closing }}</p>
                    </div>
                    <div class="col-12 col-xl-6 shadow">
                        <img class="w-100 h-100 obj-cover" :src="prpContent.hairRestoration.imageSrc" :alt="prpContent.hairRestoration.imageAlt">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="overflow-hidden">
        <div class="margin-section padding-section">
            <div class="row">
                <div class="col-12 col-xl-6">
                    <div class="scale-image">
                        <img class="w-100 h-100 obj-cover object-position-top" :src="prpContent.treatmentProcess.imageSrc" style="max-height: 80vh;" :alt="prpContent.treatmentProcess.imageAlt">
                    </div>
                </div>
                <div class="col-12 col-xl-6">
                    <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 bg-black py-4 p-xl-5">
                        <div class="p-2">
                            <h2 class="fw-lighter text-white text-section-1 p-2 text-uppercase">{{ prpContent.treatmentProcess.heading }}</h2>
                            <p
                                v-for="(step, index) in prpContent.treatmentProcess.steps"
                                :key="index"
                                class="fw-lighter text-white text-section-1 p-2"
                            >{{ romanNumerals[index] }}. {{ step.title }}: {{ step.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="margin-section padding-section">
        <div class="container">
            <div class="row d-xl-flex justify-content-xl-center">
                <div class="col-12 col-xl-8">
                    <div class="p-xl-5 shadow-custom">
                        <p class="py-2 justified-text">{{ prpContent.closing.paragraph }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script setup>
import { computed } from 'vue';
import { prpContent as prpContentEn } from '~/content/hair-transplantation/prp-hair-loss-treatment';
import { prpContent as prpContentEs } from '~/content/hair-transplantation/prp-hair-loss-treatment-es';

const route = useRoute();

const prpContent = computed(() => (route.query.lang === 'es' ? prpContentEs : prpContentEn));

const romanNumerals = ['I', 'II', 'III', 'IV'];

definePageMeta({
    layout: 'default',
});

let webConfig = ref({});

const resultwebConfig = await useAsyncQuery(gql` query {  webConfig {
                ceoTitle ceoDescription seoKeywords mediaSeo domain
        } }`, {});
if (resultwebConfig.data.value?.webConfig) {
    webConfig.value = { ...resultwebConfig.data.value.webConfig };
}

useHead({
    title: computed(() => prpContent.value.seo.title),
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: computed(() => [
        { name: 'theme-color', content: '#fff' },
        { name: 'title', content: prpContent.value.seo.title },
        { name: 'description', content: prpContent.value.seo.description },
        { name: 'keywords', content: prpContent.value.seo.keywords },
        { name: 'og:image', content: webConfig?.value.mediaSeo },
        { name: 'og:url', content: webConfig?.value.domain },
    ]),
    script: [],
    link: [],
});
</script>
