<template>
<div>
    <section class="position-relative overflow-hidden">
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-start chirld-position">
                    <h1 class="fw-lighter text-white p-2 text-title-mobile">{{ smpContent.hero.title }}</h1>
                    <p class="d-none d-xl-block text-white pe-5 fw-lighter p-2">{{ smpContent.hero.subtitle }}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-none d-xl-block">
                <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start py-5 h-100 height-section-top" style="background: #000000;">
                    <h1 class="fw-lighter" style="color: rgb(0,0,0);">{{ smpContent.hero.sidebarHiddenTitle }}</h1>
                    <h4 class="fw-lighter" style="color: rgb(0,0,0);">{{ smpContent.hero.sidebarHiddenSubtitle }}</h4>
                </div>
            </div>
            <div class="col">
                <div class="height-section-top">
                    <img class="w-100 h-100 obj-cover" :src="smpContent.hero.heroImageSrc" :alt="smpContent.hero.heroImageAlt">
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center margin-section py-3 px-3 py-xl-5 shadow-custom">
                <div class="col-xl-6">
                    <h2 class="text-center fw-lighter pb-3 fw-bold text-uppercase">{{ smpContent.overview.heading }}</h2>
                    <p>{{ smpContent.overview.paragraph }}</p>
                </div>
            </div>
        </div>
    </section>
    <section class="overflow-hidden">
        <div class="margin-section padding-section">
            <div class="row">
                <div class="col-12 col-xl-6">
                    <div class="scale-image">
                        <img class="w-100 h-100 obj-cover object-position-top" :src="smpContent.candidates.imageSrc" style="max-height: 80vh;" :alt="smpContent.candidates.imageAlt">
                    </div>
                </div>
                <div class="col-12 col-xl-6">
                    <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 bg-black px-2 py-4 px-xl-0 py-xl-0 p-xl-5">
                        <div class="px-xl-5">
                            <h2 class="fw-lighter text-white text-section-1 p-2 text-uppercase">{{ smpContent.candidates.heading }}</h2>
                            <p class="my-3 text-white">{{ smpContent.candidates.intro }}</p>
                            <ul class="text-white">
                                <li v-for="(bullet, index) in smpContent.candidates.bullets" :key="index" class="my-3">{{ bullet }}</li>
                            </ul>
                            <p class="my-3 text-white">{{ smpContent.candidates.closing }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-black padding-section margin-section">
        <div class="container">
            <div class="d-xl-flex justify-content-xl-center align-items-xl-center margin-section text-white">
                <div class="row">
                    <div class="col-12 col-xl-6">
                        <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 py-3 py-xl-0 p-xl-5">
                            <p class="text-white px-1 py-2 px-xl-2 py-xl-2">{{ smpContent.advantages.intro }}</p>
                        </div>
                    </div>
                    <div class="col-12 col-xl-6">
                        <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 py-3 py-xl-0 p-xl-5">
                            <ul>
                                <li v-for="(bullet, index) in smpContent.advantages.bullets" :key="index" class="my-3">{{ bullet }}</li>
                            </ul>
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
import { smpContent as smpContentEn } from '~/content/hair-transplantation/scalp-micropigmentation';
import { smpContent as smpContentEs } from '~/content/hair-transplantation/scalp-micropigmentation-es';

const route = useRoute();

const smpContent = computed(() => (route.query.lang === 'es' ? smpContentEs : smpContentEn));

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
    title: computed(() => smpContent.value.seo.title),
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: computed(() => [
        { name: 'theme-color', content: '#fff' },
        { name: 'title', content: smpContent.value.seo.title },
        { name: 'description', content: smpContent.value.seo.description },
        { name: 'keywords', content: smpContent.value.seo.keywords },
        { name: 'og:image', content: webConfig?.value.mediaSeo },
        { name: 'og:url', content: webConfig?.value.domain },
    ]),
    script: [],
    link: [],
});
</script>
