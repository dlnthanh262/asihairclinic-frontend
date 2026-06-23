<template>
<div>
    <section class="position-relative overflow-hidden">
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-start chirld-position">
                    <h1 class="fw-lighter text-white p-2 text-title-mobile">{{ futContent.hero.title }}</h1>
                    <p class="d-none d-xl-block text-white pe-5 fw-lighter p-2">{{ futContent.hero.subtitle }}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-none d-xl-block">
                <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start py-5 h-100 height-section-top" style="background: #000000;">
                    <h1 class="fw-lighter" style="color: rgb(0,0,0);">{{ futContent.hero.sidebarHiddenTitle }}</h1>
                    <h4 class="fw-lighter" style="color: rgb(0,0,0);">{{ futContent.hero.sidebarHiddenSubtitle }}</h4>
                </div>
            </div>
            <div class="col">
                <div class="height-section-top">
                    <img class="w-100 h-100 obj-cover" :src="futContent.hero.heroImageSrc" :alt="futContent.hero.heroImageAlt">
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center margin-section">
                <div class="col-xl-6">
                    <h2 class="text-center fw-lighter mb-xl-4 text-color-main fw-bold text-uppercase">{{ futContent.benefits.heading }}</h2>
                    <div v-for="(item, index) in futContent.benefits.items" :key="index" class="my-3">
                        <p class="fw-bold mb-2 text-uppercase">{{ item.title }}</p>
                        <p class="justified-text">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-black">
        <div class="container">
            <div class="d-xl-flex justify-content-xl-center align-items-xl-center margin-section text-white">
                <div class="row">
                    <div class="col-12 col-xl-6">
                        <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 py-2 p-xl-5 bg-black">
                            <h2 class="fw-lighter text-white text-section-1 p-2 text-uppercase">{{ futContent.postProcedure.heading }}</h2>
                            <p class="fw-lighter text-white text-section-1 p-2">{{ futContent.postProcedure.intro }}</p>
                        </div>
                    </div>
                    <div class="col-12 col-xl-6">
                        <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 py-2 p-xl-5 bg-black">
                            <p
                                v-for="(step, index) in futContent.postProcedure.steps"
                                :key="index"
                                class="fw-lighter text-white text-section-1 p-2"
                            >{{ romanNumerals[index] }}. {{ step }}</p>
                        </div>
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
                        <img class="w-100 h-100 obj-cover object-position-top" :src="futContent.clinic.imageSrc" style="max-height: 80vh;" :alt="futContent.clinic.imageAlt">
                    </div>
                </div>
                <div class="col-12 col-xl-6">
                    <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 bg-black py-4 p-xl-5">
                        <div class="p-2">
                            <h2 class="fw-lighter mb-xl-3 text-uppercase text-color-main fw-bold text-section-1 p-2">{{ futContent.clinic.heading }}</h2>
                            <p class="fw-lighter text-white text-section-1 p-2">{{ futContent.clinic.intro }}</p>
                            <div v-for="(item, index) in futContent.clinic.items" :key="index" class="my-3">
                                <p class="fw-bold text-white text-section-1 p-2 mb-2">{{ item.title }}</p>
                                <p class="fw-lighter text-white text-section-1 p-2">{{ item.description }}</p>
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
import { futContent as futContentEn } from '~/content/hair-transplantation/fut-hair-transplant';
import { futContent as futContentEs } from '~/content/hair-transplantation/fut-hair-transplant-es';

const route = useRoute();

const futContent = computed(() => (route.query.lang === 'es' ? futContentEs : futContentEn));

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
    title: computed(() => futContent.value.seo.title),
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: computed(() => [
        { name: 'theme-color', content: '#fff' },
        { name: 'title', content: futContent.value.seo.title },
        { name: 'description', content: futContent.value.seo.description },
        { name: 'keywords', content: futContent.value.seo.keywords },
        { name: 'og:image', content: webConfig?.value.mediaSeo },
        { name: 'og:url', content: webConfig?.value.domain },
    ]),
    script: [],
    link: [],
});
</script>
