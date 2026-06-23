<template>
<div>
    <section class="position-relative overflow-hidden">
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-start chirld-position">
                    <h1 class="fw-lighter text-white p-2 text-title-mobile">{{ dhiContent.hero.title }}</h1>
                    <p class="d-none d-xl-block text-white pe-5 fw-lighter p-2">{{ dhiContent.hero.subtitle }}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-none d-xl-block">
                <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start py-5 h-100 height-section-top" style="background: #000000;">
                    <h1 class="fw-lighter" style="color: rgb(0,0,0);">{{ dhiContent.hero.sidebarHiddenTitle }}</h1>
                    <h4 class="fw-lighter" style="color: rgb(0,0,0);">{{ dhiContent.hero.sidebarHiddenSubtitle }}</h4>
                </div>
            </div>
            <div class="col">
                <div class="height-section-top">
                    <img class="w-100 h-100 obj-cover" :src="dhiContent.hero.heroImageSrc" :alt="dhiContent.hero.heroImageAlt">
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center margin-section padding-section">
                <div class="col-xl-8">
                    <div class="shadow-custom p-3 p-xl-5">
                        <h2 class="text-center py-2 text-uppercase">{{ dhiContent.overview.heading }}</h2>
                        <p class="mt-3">{{ dhiContent.overview.paragraph }}</p>
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
                        <img class="w-100 h-100 obj-cover object-position-top reponsive-section-3" :src="dhiContent.whatSetsApart.imageSrc" :alt="dhiContent.whatSetsApart.imageAlt">
                    </div>
                </div>
                <div class="col-12 col-xl-6">
                    <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 bg-black py-4 p-xl-5">
                        <div class="p-2">
                            <h2 class="fw-lighter text-white text-section-1 p-2 text-uppercase">{{ dhiContent.whatSetsApart.heading }}</h2>
                            <ul class="text-white">
                                <li v-for="(item, index) in dhiContent.whatSetsApart.items" :key="index" class="my-3">
                                    <span class="fw-bold">{{ item.title }}:</span> {{ item.description }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-black">
        <div class="container">
            <div class="d-xl-flex justify-content-xl-center align-items-xl-center margin-section text-white padding-section">
                <div class="row">
                    <div class="col">
                        <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 py-2 p-xl-5 bg-black">
                            <div class="row">
                                <div class="col-12 col-xl-6 px-xl-5">
                                    <div v-for="(step, index) in dhiContent.procedure.steps" :key="index">
                                        <p class="px-2 fw-bold">{{ step.title }}</p>
                                        <ul>
                                            <li>{{ step.description }}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-12 col-xl-6 d-xl-flex justify-content-xl-center align-items-xl-center">
                                    <img class="w-100 h-100 obj-cover" :src="dhiContent.procedure.imageSrc" :alt="dhiContent.procedure.imageAlt">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="padding-section">
                <div class="row g-0">
                    <div class="col">
                        <div class="d-xl-flex align-items-xl-center p-2 p-xl-5 h-100 mx-xl-5">
                            <p class="py-2 justified-text">{{ dhiContent.closing.paragraph }}</p>
                        </div>
                    </div>
                    <div class="col-12 col-xl-6 order-first order-xl-last shadow">
                        <div class="height-section-top">
                            <img class="w-100 h-100 obj-cover" :src="dhiContent.closing.imageSrc" :alt="dhiContent.closing.imageAlt">
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
import { dhiContent as dhiContentEn } from '~/content/hair-transplantation/dhi';
import { dhiContent as dhiContentEs } from '~/content/hair-transplantation/dhi-es';

const route = useRoute();

const dhiContent = computed(() => (route.query.lang === 'es' ? dhiContentEs : dhiContentEn));

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
    title: computed(() => dhiContent.value.seo.title),
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: computed(() => [
        { name: 'theme-color', content: '#fff' },
        { name: 'title', content: dhiContent.value.seo.title },
        { name: 'description', content: dhiContent.value.seo.description },
        { name: 'keywords', content: dhiContent.value.seo.keywords },
        { name: 'og:image', content: webConfig?.value.mediaSeo },
        { name: 'og:url', content: webConfig?.value.domain },
    ]),
    script: [],
    link: [],
});
</script>
