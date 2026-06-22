<template>
<div>
    <section class="position-relative overflow-hidden">
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-start chirld-position">
                    <h1 class="fw-lighter text-white p-2 text-title-mobile">{{ fueContent.hero.title }}&nbsp;</h1>
                    <p class="d-none d-xl-block text-white pe-5 fw-lighter p-2">{{ fueContent.hero.subtitle }}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-none d-xl-block">
                <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start py-5 h-100 height-section-top" style="background: #000000;">
                    <h1 class="fw-lighter" style="color: rgb(0,0,0);">{{ fueContent.hero.sidebarHiddenTitle }}</h1>
                    <h4 class="fw-lighter" style="color: rgb(0,0,0);">{{ fueContent.hero.sidebarHiddenSubtitle }}</h4>
                </div>
            </div>
            <div class="col">
                <div class="height-section-top">
                    <img class="w-100 h-100 obj-cover" :src="fueContent.hero.heroImageSrc" :alt="fueContent.hero.heroImageAlt">
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center margin-section py-3 py-xl-0">
                <div class="col-xl-6">
                    <h2 class="text-center fw-lighter text-uppercase">{{ fueContent.overview.heading }}</h2>
                    <p class="mt-xl-3 justified-text">{{ fueContent.overview.paragraph }}</p>
                </div>
            </div>
        </div>
    </section>
    <section class="overflow-hidden">
        <div class="margin-section padding-section">
            <div class="row">
                <div class="col-12 col-xl-6">
                    <div class="scale-image">
                        <img class="w-100 h-100 obj-cover object-position-top" :src="fueContent.howItWorks.imageSrc" style="max-height: 80vh;" :alt="fueContent.howItWorks.imageAlt">
                    </div>
                </div>
                <div class="col-12 col-xl-6">
                    <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 bg-black px-2 py-4 px-xl-0 py-xl-0 p-xl-5">
                        <div class="px-xl-5">
                            <h2 class="fw-lighter text-white text-section-1 p-2 text-uppercase">{{ fueContent.howItWorks.heading }}</h2>
                            <p class="fw-lighter text-white text-section-1 p-2">{{ fueContent.howItWorks.paragraph }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-black padding-section">
        <div class="container">
            <div class="margin-section text-white">
                <h2 class="px-1 py-3 px-xl-2 py-xl-2 text-center text-uppercase">{{ fueContent.benefits.heading }}</h2>
                <div class="row">
                    <div
                        v-for="(column, columnIndex) in fueContent.benefits.columns"
                        :key="columnIndex"
                        :class="columnIndex === 0 ? 'col-12 col-xl-6' : 'col'"
                    >
                        <div
                            class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 py-3 py-xl-0 bg-black"
                            :class="columnIndex === 0 ? 'p-xl-5' : ''"
                        >
                            <template v-for="(benefit, benefitIndex) in column" :key="benefitIndex">
                                <p class="d-none d-xl-block text-white text-section-1 p-2 text-uppercase fw-bold">{{ benefit.label }}&nbsp;</p>
                                <ul>
                                    <li v-for="(point, pointIndex) in benefit.points" :key="pointIndex">{{ point }}</li>
                                </ul>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="padding-section">
                <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center mb-5 pb-5 shadow-custom padding-section px-2 px-xl-0">
                    <div class="col-xl-8">
                        <h2 class="fw-lighter pb-xl-2 text-uppercase">{{ fueContent.procedure.heading }}</h2>
                        <div v-for="(step, index) in fueContent.procedure.steps" :key="index">
                            <p class="fw-bold px-2">{{ step.title }}</p>
                            <ul>
                                <li v-for="(point, pointIndex) in step.points" :key="pointIndex" class="my-2">{{ point }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-12 col-xl-6">
                        <div class="p-3 p-xl-5 m-xl-5">
                            <h2 class="pb-2 pt-4 pt-xl-2 text-uppercase">{{ fueContent.postSurgery.heading }}</h2>
                            <p v-for="(paragraph, index) in fueContent.postSurgery.paragraphs" :key="index" class="py-2 justified-text">{{ paragraph }}</p>
                            <div class="d-flex justify-content-center mt-5 mb-5 mb-xl-0">
                                <nuxt-link class="text-decoration-none text-white" :to="localizedTo(fueContent.postSurgery.ctaLink)">
                                    <div class="btn-black text-uppercase btn-hover poiter">
                                        <p>{{ fueContent.postSurgery.ctaLabel }}</p>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-6 d-xl-flex order-first justify-content-xl-center order-xl-last shadow">
                        <div class="shadow-custom">
                            <img class="w-100 h-100" :src="fueContent.postSurgery.imageSrc" style="object-fit: cover" :alt="fueContent.postSurgery.imageAlt">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section
        class="d-flex d-xl-flex align-items-center align-items-xl-center margin-section"
        :style="{'background': 'url(&quot;' + fueContent.commitment.backgroundImage + '&quot;) center / cover no-repeat', 'min-height': '50vh'}"
    >
        <div class="container d-flex d-xl-flex justify-content-center justify-content-xl-center">
            <div class="col-12 col-xl-10 div-message-section">
                <div>
                    <h2 class="text-color-main text-uppercase">&nbsp;{{ fueContent.commitment.heading }}</h2>
                </div>
                <div>
                    <p v-for="(paragraph, index) in fueContent.commitment.paragraphs" :key="index" class="py-2">{{ paragraph }}</p>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script setup>
import { computed } from 'vue';
import { fueContent as fueContentEn } from '~/content/hair-transplantation/fue-hair-transplant';
import { fueContent as fueContentEs } from '~/content/hair-transplantation/fue-hair-transplant-es';

const route = useRoute();
const { localizedTo } = useLangNav();

const fueContent = computed(() => (route.query.lang === 'es' ? fueContentEs : fueContentEn));

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
    title: computed(() => fueContent.value.seo.title),
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: computed(() => [
        { name: 'theme-color', content: '#fff' },
        { name: 'title', content: fueContent.value.seo.title },
        { name: 'description', content: fueContent.value.seo.description },
        { name: 'keywords', content: fueContent.value.seo.keywords },
        { name: 'og:image', content: webConfig?.value.mediaSeo },
        { name: 'og:url', content: webConfig?.value.domain },
    ]),
    script: [],
    link: [],
});
</script>
