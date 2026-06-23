<template>
<div>
    <section class="position-relative overflow-hidden">
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-start chirld-position">
                    <h1 class="fw-lighter text-white p-2 text-title-mobile">{{ faqContent.hero.title }}</h1>
                    <p class="d-none d-xl-block text-white pe-5 fw-lighter p-2">{{ faqContent.hero.subtitle }}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-none d-xl-block">
                <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start py-5 h-100 height-section-top" style="background: #000000;">
                    <h1 class="fw-lighter" style="color: rgb(0,0,0);">{{ faqContent.hero.sidebarHiddenTitle }}</h1>
                    <h4 class="fw-lighter" style="color: rgb(0,0,0);">{{ faqContent.hero.sidebarHiddenSubtitle }}</h4>
                </div>
            </div>
            <div class="col">
                <div class="height-section-top">
                    <img class="w-100 h-100 obj-cover" :src="faqContent.hero.heroImageSrc" :alt="faqContent.hero.heroImageAlt">
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="margin-section padding-section">
                <h2 class="fw-bold text-color-main py-2">{{ faqContent.faq.heading }}</h2>
                <div>
                    <b-accordion class="accordion" role="tablist" id="hair-restoration-faq">
                        <b-accordion-item
                            v-for="item in faqContent.faq.items"
                            :key="item.question"
                            class="accordion-item my-3"
                            :title="item.question"
                        >
                            <p class="mb-0">{{ item.answer }}</p>
                        </b-accordion-item>
                    </b-accordion>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-black">
        <div class="container">
            <div class="d-xl-flex justify-content-xl-center align-items-xl-center margin-section text-white">
                <div class="row">
                    <div class="col">
                        <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 py-2 p-xl-5 bg-black">
                            <div class="row">
                                <div class="col">
                                    <h2 class="fw-lighter text-white text-section-1 p-2 text-center">{{ faqContent.science.heading }}</h2>
                                    <p class="fw-lighter text-white text-section-1 p-2">{{ faqContent.science.paragraph }}</p>
                                    <div class="d-xl-flex justify-content-xl-center py-4">
                                        <nuxt-link class="text-decoration-none text-white" :to="localizedTo(faqContent.science.ctaLink)">
                                            <div class="btn-hover btn-black text-uppercase">
                                                <p>{{ faqContent.science.ctaLabel }}</p>
                                            </div>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
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
                        <img class="w-100 h-100 obj-cover object-position-top" :src="faqContent.consultation.imageSrc" style="max-height: 80vh;" :alt="faqContent.consultation.imageAlt">
                    </div>
                </div>
                <div class="col-12 col-xl-6">
                    <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 bg-black py-4 p-xl-5">
                        <div class="p-2">
                            <h2 class="fw-lighter text-white text-section-1 p-2">{{ faqContent.consultation.heading }}</h2>
                            <p
                                v-for="(paragraph, index) in faqContent.consultation.paragraphs"
                                :key="index"
                                class="fw-lighter text-white text-section-1 p-2"
                            >{{ paragraph }}</p>
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
import { hairRestorationFaqContent as faqContentEn } from '~/content/hair-transplantation/hair-restoration-faq';
import { hairRestorationFaqContent as faqContentEs } from '~/content/hair-transplantation/hair-restoration-faq-es';

const route = useRoute();
const { localizedTo } = useLangNav();

const faqContent = computed(() => (route.query.lang === 'es' ? faqContentEs : faqContentEn));

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
    title: computed(() => faqContent.value.seo.title),
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: computed(() => [
        { name: 'theme-color', content: '#fff' },
        { name: 'title', content: faqContent.value.seo.title },
        { name: 'description', content: faqContent.value.seo.description },
        { name: 'keywords', content: faqContent.value.seo.keywords },
        { name: 'og:image', content: webConfig?.value.mediaSeo },
        { name: 'og:url', content: webConfig?.value.domain },
    ]),
    script: [],
    link: [],
});
</script>
