<template>
<div>
    <section class="position-relative overflow-hidden">
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-start chirld-position">
                    <h1 class="fw-lighter text-white p-2 text-title-mobile text-uppercase">{{ artasContent.hero.title }}</h1>
                    <p class="d-none d-xl-block text-white pe-5 fw-lighter p-2">{{ artasContent.hero.subtitle }}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-none d-xl-block">
                <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start py-5 h-100 height-section-top" style="background: #000000;">
                    <h1 class="fw-lighter" style="color: rgb(0,0,0);">{{ artasContent.hero.sidebarHiddenTitle }}</h1>
                    <h4 class="fw-lighter" style="color: rgb(0,0,0);">{{ artasContent.hero.sidebarHiddenSubtitle }}</h4>
                </div>
            </div>
            <div class="col">
                <div class="height-section-top">
                    <img class="w-100 h-100 obj-cover" :src="artasContent.hero.heroImageSrc" :alt="artasContent.hero.heroImageAlt">
                </div>
            </div>
        </div>
    </section>
    <section class="margin-section">
        <div class="container">
            <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center padding-section">
                <div class="row">
                    <div class="col-12 col-xl-6">
                        <div class="shadow-custom p-3 p-xl-5">
                            <p v-for="(paragraph, index) in artasContent.intro.paragraphs" :key="index" class="mt-3 justified-text">{{ paragraph }}</p>
                        </div>
                    </div>
                    <div class="col-12 col-xl-6 order-first order-xl-last">
                        <video class="w-100 h-100" controls="" style="min-height: 30vh;" :src="webConfig.srcVideo2"></video>
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
                        <img class="w-100 h-100 obj-cover object-position-top" :src="artasContent.howItWorks.imageSrc" style="max-height: 80vh;" :alt="artasContent.howItWorks.imageAlt">
                    </div>
                </div>
                <div class="col-12 col-xl-6">
                    <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 bg-black py-4 p-xl-5">
                        <div class="p-2 text-white">
                            <h2 class="fw-lighter text-white text-section-1 p-2">{{ artasContent.howItWorks.heading }}</h2>
                            <p class="fw-lighter text-white text-section-1 p-2">{{ artasContent.howItWorks.intro }}</p>
                            <ul>
                                <li v-for="(bullet, index) in artasContent.howItWorks.bullets" :key="index" :style="index === 0 ? 'margin-bottom:15px;' : undefined">&nbsp;{{ bullet }}&nbsp;</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="margin-section padding-section">
        <div class="container">
            <div class="shadow-custom p-3 p-xl-5">
                <div class="padding-section">
                    <div class="row g-0">
                        <div class="col-12 col-xl-6 shadow">
                            <img class="w-100 h-100 obj-cover" :src="artasContent.results.imageSrc" :alt="artasContent.results.imageAlt">
                        </div>
                        <div class="col-12 col-xl-6 py-3">
                            <h2 class="fw-lighter py-2 pb-xl-4 text-center">{{ artasContent.results.heading }}</h2>
                            <div v-for="(item, index) in artasContent.results.items" :key="index" class="mx-xl-5 px-xl-5">
                                <h5 class="fw-lighter text-uppercase">{{ item.title }}</h5>
                                <ul>
                                    <li v-for="(point, pointIndex) in item.points" :key="pointIndex">{{ point }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script setup>
import { computed } from 'vue';
import { artasContent as artasContentEn } from '~/content/hair-transplantation/artas-ix-robotic-hair-restoration';
import { artasContent as artasContentEs } from '~/content/hair-transplantation/artas-ix-robotic-hair-restoration-es';

const route = useRoute();

const artasContent = computed(() => (route.query.lang === 'es' ? artasContentEs : artasContentEn));

definePageMeta({
    layout: 'default',
});

let webConfig = ref({});

const resultwebConfig = await useAsyncQuery(gql` query {  webConfig {
                srcVideo2 ceoTitle ceoDescription seoKeywords mediaSeo domain
        } }`, {});
if (resultwebConfig.data.value?.webConfig) {
    webConfig.value = { ...resultwebConfig.data.value.webConfig };
}

useHead({
    title: computed(() => artasContent.value.seo.title),
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: computed(() => [
        { name: 'theme-color', content: '#fff' },
        { name: 'title', content: artasContent.value.seo.title },
        { name: 'description', content: artasContent.value.seo.description },
        { name: 'keywords', content: artasContent.value.seo.keywords },
        { name: 'og:image', content: webConfig?.value.mediaSeo },
        { name: 'og:url', content: webConfig?.value.domain },
    ]),
    script: [],
    link: [],
});
</script>
