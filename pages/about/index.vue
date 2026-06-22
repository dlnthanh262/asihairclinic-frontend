<template>
<div>
    <section class="position-relative overflow-hidden">
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column align-items-start justify-content-xl-center align-items-xl-start chirld-position">
                    <h1 class="p-2 text-color-main">{{ aboutContent.hero.titleAccent }}</h1>
                    <div class="d-flex d-xl-flex d-xxl-flex justify-content-xl-center justify-content-xxl-center align-items-xxl-center">
                        <h1 class="fw-lighter text-white text-title-mobile p-2">{{ aboutContent.hero.title }}</h1>
                    </div>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid mx-2" :src="aboutContent.hero.badgeImageSrc" style="max-height: 80px; border-radius: 4px;" :alt="aboutContent.hero.badgeImageAlt">
                        <p class="fw-lighter text-white text-section-1 p-2 ms-2">{{ aboutContent.hero.intro }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-none d-xl-block">
                <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start py-5 h-100 height-section-top" style="background: #000000;">
                    <h1 class="fw-lighter" style="color: rgb(0,0,0);">{{ aboutContent.hero.sidebarHiddenTitle }}</h1>
                    <h4 class="fw-lighter" style="color: rgb(0,0,0);">{{ aboutContent.hero.sidebarHiddenSubtitle }}</h4>
                </div>
            </div>
            <div class="col">
                <div class="height-section-top">
                    <img class="w-100 h-100 obj-cover reponsive-section-3" :src="aboutContent.hero.heroImageSrc" :alt="aboutContent.hero.heroImageAlt">
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center margin-section py-4 px-2 px-xl-0 py-xl-5 shadow-custom">
                <div class="col-xl-6">
                    <h1 class="text-center fw-lighter pb-xl-3 text-color-main">
                        <span class="fw-normal">{{ aboutContent.education.headingNormal }}</span>&nbsp;{{ aboutContent.education.headingLight }}
                    </h1>
                    <p v-for="(paragraph, index) in aboutContent.education.paragraphs" :key="index" class="text-center my-2 mx-1 my-xl-3">{{ paragraph }}</p>
                </div>
            </div>
        </div>
    </section>
    <section class="margin-section padding-section">
        <div class="container">
            <div v-for="(section, sectionIndex) in aboutContent.sections" :key="sectionIndex" class="my-2">
                <div class="row g-0">
                    <div class="col-12 col-xl-4">
                        <h4>{{ section.title }}</h4>
                    </div>
                    <div class="col-12 col-xl-8">
                        <ul v-if="section.type === 'list'">
                            <li v-for="(item, itemIndex) in section.items" :key="itemIndex" class="my-2">{{ item }}</li>
                        </ul>
                        <ul v-else-if="section.type === 'lectures'">
                            <li v-for="(lecture, lectureIndex) in section.lectures" :key="lectureIndex" class="my-2">
                                <span class="quote-text">“{{ lecture.title }}”</span>
                                <ul>
                                    <li v-for="(venue, venueIndex) in lecture.venues" :key="venueIndex">{{ venue }}</li>
                                </ul>
                            </li>
                        </ul>
                        <ul v-else-if="section.type === 'workshops'">
                            <li v-for="(workshop, workshopIndex) in section.workshops" :key="workshopIndex" class="my-2">
                                <strong>{{ workshop.name }}</strong><span>&nbsp;{{ workshop.location }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr class="text-color-main height-hr">
            </div>
            <div>
                <div class="row g-0">
                    <div
                        v-for="(highlight, highlightIndex) in aboutContent.highlights"
                        :key="highlightIndex"
                        class="col-12 col-lg-6 col-xl-3 d-flex flex-column justify-content-xl-center align-items-xl-center"
                    >
                        <div class="py-4 py-xl-0">
                            <h5 class="text-color-main text-center">{{ highlight.title }}</h5>
                            <p class="text-center">{{ highlight.subtitle }}</p>
                        </div>
                    </div>
                    <div
                        v-for="(logo, logoIndex) in aboutContent.logos"
                        :key="logoIndex"
                        class="d-flex flex-column justify-content-center align-items-center"
                        :class="logoIndex < 2 ? 'col-6 col-xl-3' : logoIndex < 4 ? 'col-6 col-xl-4' : 'col-12 col-xl-4'"
                    >
                        <div class="h-75"><img class="obj-contain w-100 h-100" :src="logo.src" :alt="logo.alt"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script setup>
import { computed } from 'vue';
import { aboutContent as aboutContentEn } from '~/content/about';
import { aboutContent as aboutContentEs } from '~/content/about-es';

const route = useRoute();

const aboutContent = computed(() => (route.query.lang === 'es' ? aboutContentEs : aboutContentEn));

definePageMeta({
    layout: 'default',
});

let webConfig = ref({});

const resultwebConfig = await useAsyncQuery(gql` query {  webConfig {
                seoKeywords mediaSeo domain ceoTitle ceoDescription
        } }`, {});
if (resultwebConfig.data.value?.webConfig) {
    webConfig.value = { ...resultwebConfig.data.value.webConfig };
}

useHead({
    title: computed(() => aboutContent.value.seo.title),
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: computed(() => [
        { name: 'theme-color', content: '#fff' },
        { name: 'title', content: aboutContent.value.seo.title },
        { name: 'description', content: aboutContent.value.seo.description },
        { name: 'keywords', content: aboutContent.value.seo.keywords },
        { name: 'og:image', content: webConfig?.value.mediaSeo },
        { name: 'og:url', content: webConfig?.value.domain },
    ]),
    script: [],
    link: [],
});
</script>
