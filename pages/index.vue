<template>
<div>
    <section class="position-relative home-hero-inline">
        <div class="home-hero-inline__media" style="position:relative;display:block;">
            <img class="obj-cover w-100 object-position-top home-hero-inline__image" src="/static/header-landing.png" :alt="homeContent.hero.imageAlt" style="display:block;min-height:40vh;width:100%;object-fit:cover;object-position:center top;">
            <div aria-hidden="true" style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(15,15,15,0.88) 0%,rgba(20,20,20,0.78) 14%,rgba(30,30,30,0.52) 28%,rgba(37,37,37,0.18) 48%,rgba(37,37,37,0.45) 100%);pointer-events:none;z-index:1;"></div>
            <div class="home-hero-inline__wrap" style="position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:flex-start;padding:1.5rem;">
                <div class="px-3 px-xl-5" style="max-width:680px;width:100%;text-align:left;">
                    <h1 class="text-uppercase home-hero-inline__title" style="font-weight:700;line-height:1.1;letter-spacing:0.08em;font-size:clamp(1.65rem,4.5vw,3rem);margin-bottom:1.25rem;"><span style="color:#DEB22F;">{{ homeContent.hero.titleAccent }}</span><span style="color:#ffffff;">{{ homeContent.hero.titleRest }}</span></h1>
                    <p class="home-hero-inline__subheading" style="font-weight:400;line-height:1.75;color:rgba(255,255,255,0.92);font-size:clamp(0.9375rem,1.8vw,1.125rem);max-width:640px;margin-bottom:2rem;">{{ homeContent.hero.subheading }}</p>
                    <div class="home-hero-inline__actions" style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem;">
                        <nuxt-link class="text-decoration-none d-inline-block" :to="homeContent.hero.ctaLink">
                            <div class="btn-black btn-hover text-center home-hero-inline__cta" style="min-width:220px;padding:0.875rem 2rem !important;border-radius:0;">
                                <p class="text-uppercase mb-0 fw-bold">{{ homeContent.hero.ctaLabel }}</p>
                            </div>
                        </nuxt-link>
                        <a
                            class="home-hero-inline__phone btn-hover"
                            :href="'tel:' + webConfig.phoneNumber"
                        ><i class="fa fa-phone home-hero-inline__phone-icon" aria-hidden="true"></i><span class="home-hero-inline__phone-text">{{ webConfig.phoneNumber }}</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="padding-section d-none">
        <div class="container">
            <div>
                <p class="text-center fs-1"><span class="fw-bold">{{ homeContent.hiddenHero.doctorName }}</span>&nbsp;{{ homeContent.hiddenHero.suffix }}</p>
            </div>
        </div>
    </section>
    <section class="margin-top-section">
        <div class="container">
            <div class="row g-0">
                <div class="col-xl-7">
                    <div class="h-100 home-why-ahr">
                        <div class="my-3">
                            <div class="col-xl-10 d-xl-flex justify-content-xl-start">
                                <h2 class="home-why-ahr__heading">{{ homeContent.whyChooseAhr.heading }}</h2>
                            </div>
                        </div>
                        <div class="d-xl-flex justify-content-xl-start my-3">
                            <div class="col-xl-10">
                                <p class="home-why-ahr__subheading">{{ homeContent.whyChooseAhr.subheading }}</p>
                                <p v-for="(paragraph, index) in homeContent.whyChooseAhr.body" :key="index" class="home-why-ahr__body">{{ paragraph }}</p>
                                <div class="home-why-ahr__metrics">
                                    <div v-for="(metric, index) in homeContent.whyChooseAhr.metrics" :key="index" class="home-why-ahr__metric">
                                        <p class="home-why-ahr__metric-value">{{ metric.value }}</p>
                                        <p class="home-why-ahr__metric-label">{{ metric.label }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 m-bottom">
                    <div class="h-100 shadow-custom"><img class="w-100 h-100 obj-cover" src="/static/anh-you-choose.png" style="box-shadow: 0px 0px 12px rgba(175,185,195,0.25);" :alt="homeContent.whyChooseAhr.imageAlt"></div>
                </div>
            </div>
        </div>
    </section>
    <section class="d-flex d-xl-flex align-items-center align-items-xl-center margin-section" style="background: url(&quot;/static/image/1612300320-home-bg2.jpg&quot;) center / cover no-repeat;min-height: 40vh;">
        <div class="container">
            <div class="col-12 col-xl-6 div-message-section">
                <div>
                    <h3 class="fw-lighter">{{ homeContent.serviceIntro.heading }}</h3>
                </div>
            </div>
        </div>
    </section>
    <section class="margin-section padding-section home-services-grid">
        <div class="row g-0 home-services-grid__row d-xl-flex justify-content-xl-center align-items-stretch">
            <div v-for="card in homeContent.serviceCards" :key="card.link" class="col-6 col-lg-2"><!-- Start: item hover -->
                <div class="item-img-hover"><!-- Start: overlay hover -->
                    <div class="overlay-hover"><!-- Start: content -->
                        <div class="pd-2">
                            <div class="d-none d-xl-inline-block px-2 py-1 bg-white text-dark fs-6 py-2 mb-3">
                                <p class="text-uppercase">{{ card.title }}</p>
                            </div>
                            <div class="d-inline-block d-xl-none px-2 py-1 bg-white text-dark fs-6 py-2 mb-3 text-uppercase">
                                <p>{{ card.title }}</p>
                            </div>
                            <p class="py-2 has-hover">{{ card.description }}</p><nuxt-link class="text-decoration-none text-white" :to="card.link">
                                <div class="pt-3 pb-3">
                                    <p class="text-uppercase">{{ card.ctaLabel }}</p>
                                    <div class="mt-1 line-bottom-btn"></div>
                                </div>
                            </nuxt-link>
                        </div><!-- End: content -->
                    </div><!-- End: overlay hover --><img class="img-fluid" :src="card.imageSrc" :alt="card.imageAlt"><!-- Start: ovelay -->
                    <div class="overlay">
                        <p>{{ card.title }}</p>
                    </div><!-- End: ovelay -->
                </div><!-- End: item hover -->
            </div>
        </div>
    </section>
    <section class="d-flex d-xl-flex align-items-center align-items-xl-center reponsive-section home-artas-banner" style="background: url(&quot;/static/10.jpg&quot;) center / cover no-repeat;background-position: center top;">
        <div class="container">
            <div class="col-xl-4 div-message-section-2">
                <div>
                    <h2 class="text-white fw-lighter text-uppercase">{{ homeContent.artas.bannerHeading }}</h2>
                </div>
            </div>
        </div>
    </section>
    <section class="home-artas-content">
        <div class="container"><!-- Start: section child 1 -->
            <div class="row g-0">
                <div class="col-12 col-xl-6 bg-white home-artas-overlap">
                    <div class="shadow-custom pb-5"><!-- Start: text -->
                        <div class="d-xl-flex justify-content-xl-center py-3 px-3 px-xl-0 py-xl-5">
                            <div class="col-xl-8">
                                <p class="px-xl-0 fs-4 fw-bold py-xl-3 text-uppercase home-section-heading" style="color:#DEB22F;">{{ homeContent.artas.whyHeading }}<br></p>
                                <p v-for="(paragraph, index) in homeContent.artas.whyParagraphs" :key="index" :class="index === 0 ? 'justified-text py-2 home-body-text' : 'justified-text pt-2 home-body-text'">{{ paragraph }}</p>
                            </div>
                        </div><!-- End: text --><!-- Start: btn -->
                        <div class="mb-3 home-hero-inline__actions" style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem;justify-content:center;">
                            <LearnMoreButton :to="homeContent.artas.ctaLink" :label="homeContent.artas.ctaLabel" />
                        </div>    
                            <!-- End: btn -->
                    </div>
                </div>
                <div class="col">
                    <div class="bg-black text-white d-xl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center shadow-custom py-4 m-xl-5 py-xl-5">
                        <div class="col-xl-9">
                            <div>
                                <p class="px-xl-0 fs-4 fw-bold py-xl-3 text-uppercase home-section-heading">{{ homeContent.artas.benefitsHeading }}<br></p>
                                <ul class="home-check-list home-body-text-light">
                                    <li v-for="(benefit, index) in homeContent.artas.benefits" :key="index" class="home-check-list__item">
                                        <span class="home-check-list__icon" aria-hidden="true"><i class="fa fa-check"></i></span>
                                        <span>{{ benefit }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- End: section child 1 --><!-- Start: section child 3 -->
            <div class="padding-section">
                <div class="row g-0">
                    <div class="col-12 col-xl-6 shadow"><img class="w-100 h-100 obj-cover" src="/static/24.jpg" :alt="homeContent.hairTransplant.imageAlt"></div>
                    <div class="col">
                        <div class="p-xl-5 m-xl-5">
                            <h2 class="pt-4 pt-xl-2 pb-2 fw-bold text-uppercase home-section-heading home-why-ahr__heading" style="color:#DEB22F;">{{ homeContent.hairTransplant.heading }}</h2>
                            <p v-for="(paragraph, index) in homeContent.hairTransplant.paragraphs" :key="index" class="py-2 justified-text home-body-text">{{ paragraph }}</p>
                            <div class="mt-5 home-hero-inline__actions" style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem;justify-content:start;">
                                <LearnMoreButton :to="homeContent.hairTransplant.ctaLink" :label="homeContent.hairTransplant.ctaLabel" />
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- End: section child 3 -->
            <div class="home-video-banner margin-section"><!-- Start: section child 2 -->
                <div class="home-video-banner__frame">
                    <div class="home-video-banner__frame-inner">
                        <div class="home-video-banner__media">
                            <client-only>
                                <video
                                    class="home-video-banner__video"
                                    controls
                                    autoplay
                                    muted
                                    loop
                                    playsinline
                                    preload="metadata"
                                    :src="webConfig.srcVideo1"
                                ></video>
                            </client-only>
                            <div class="home-video-banner__content">
                                <p class="home-video-banner__eyebrow">{{ homeContent.artas.video.eyebrow }}</p>
                                <h2 class="home-video-banner__heading"><span class="home-video-banner__heading-accent">{{ homeContent.artas.video.headingAccent }}</span>{{ homeContent.artas.video.headingRest }}</h2>
                                <p class="home-video-banner__subheading">{{ homeContent.artas.video.subheading }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- End: section child 2 -->
        </div>
    </section>
    <section class="d-xl-flex align-items-xl-center padding-section reponsive-section home-gallery-banner" style="background: url(&quot;/static/15.jpg&quot;) top / cover no-repeat; position: relative;">
        <div class="position-section">
            <div class="bg-white shadow-custom home-gallery-panel pb-5">
                <div class="d-xl-flex justify-content-xl-center py-3 px-3 px-xl-0 py-xl-5">
                    <div class="col-xl-8 home-gallery-panel__content text-center">
                        <p class="px-xl-0 fs-4 fw-bold py-xl-3 text-uppercase home-section-heading home-gallery-panel__heading">{{ homeContent.gallery.heading }}<br></p>
                        <p class="py-2 home-body-text home-gallery-panel__description">{{ homeContent.gallery.description }}</p>
                    </div>
                </div>
                <div class="mb-3 home-hero-inline__actions" style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem;justify-content:center;">
                    <LearnMoreButton :to="homeContent.gallery.ctaLink" :label="homeContent.gallery.ctaLabel" />
                </div>
            </div>
        </div>
    </section>
    <section class="margin-section padding-section">
        <div class="container">
            <div class="shadow-custom p-xl-5 home-quote">
                <div class="row g-0">
                    <div class="col-12 message-section-9">
                        <div>
                            <p>{{ homeContent.quote.text }}</p>
                        </div>
                        <p class="fw-medium" style="font-style: italic;">{{ homeContent.quote.attribution }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="d-flex d-xl-flex align-items-end align-items-xl-end margin-section reponsive-section" style="background: url(&quot;/static/28.jpg&quot;) top / cover no-repeat; background-position: 100%  20%;;">
        <div class="container">
            <div class="d-xl-flex justify-content-xl-end mb-5"><!-- Start: d-none -->
                <div class="col-xl-6 px-2 px-xl-5 d-none">
                    <h2 class="text-white">{{ homeContent.drDo.heroHidden.heading }}</h2>
                    <div class="d-xl-flex justify-content-xl-end align-items-xl-center text-white mt-5">
                        <div class="p-3 p-xl-5 d-inline-block" style="border: 3px solid white"><i class="fa fa-play fs-1"></i></div>
                        <div class="px-xl-4">
                            <p>{{ homeContent.drDo.heroHidden.videoText }}</p>
                            <div class="mt-3" style="width: 60px;height: 3px;background: #ffffff;"></div>
                        </div>
                    </div>
                </div><!-- End: d-none -->
            </div>
        </div>
    </section>
    <section>
        <div class="container"><!-- Start: 1 -->
            <div class="row g-0">
                <div class="col-12 col-xl-6 m-top-section-11">
                    <div>
                        <h2 class="d-none d-xl-block p-5 text-end home-why-ahr__heading home-dr-do__sidebar-heading">{{ homeContent.drDo.sidebarHeading }}</h2><!-- Start: bg black -->
                        <div class="px-3 p-xl-5 text-white bg-black">
                            <p v-for="(paragraph, index) in homeContent.drDo.paragraphs" :key="index" class="justified-text py-3 home-body-text-light">{{ paragraph }}</p>
                            <div class="mt-5 home-hero-inline__actions" style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem;justify-content:center;">
                                <LearnMoreButton :to="homeContent.drDo.ctaLink" :label="homeContent.drDo.ctaLabel" />
                            </div>
                        </div><!-- End: bg black -->
                    </div>
                </div>
            </div><!-- End: 1 --><!-- Start: 2 -->
            <div class="d-xl-flex justify-content-xl-center margin-section padding-section shadow-custom">
                <div class="col-xl-8">
                    <div class="border-left-item">
                        <h3 class="fw-lighter">{{ homeContent.drDo.commitmentQuote }}</h3>
                    </div>
                    <h3 class="d-flex d-xl-flex justify-content-end justify-content-xl-end px-2">{{ homeContent.drDo.commitmentAttribution }}</h3>
                </div>
            </div><!-- End: 2 --><!-- Start: 3 -->
            <div>
                <div class="row g-0">
                    <div v-for="card in homeContent.drDo.featuredCards" :key="card.link" class="col-12 col-xl-6"><!-- Start: item hover -->
                        <div class="img-hover-2"><img class="img-fluid" :src="card.imageSrc" :alt="card.imageAlt"><!-- Start: overlay-btn -->
                            <div class="d-none d-xl-block px-5 py-3 bg-white text-dark overlay-btn">
                                <p class="text-uppercase">{{ card.title }}</p>
                            </div><!-- End: overlay-btn --><!-- Start: ovelay -->
                            <div class="overlay"><!-- Start: content -->
                                <div class="text-white">
                                    <div class="d-inline-block d-xl-none px-2 py-1 bg-white text-dark fs-6 py-2">
                                        <p>{{ card.title }}</p>
                                    </div>
                                    <p class="d-none d-xl-inline-block py-2">{{ card.description }}</p>
                                    <div class="py-3 py-2">
                                        <LearnMoreButton :to="card.link" :label="card.ctaLabel" />
                                    </div>
                                </div><!-- End: content -->
                            </div><!-- End: ovelay --><!-- Start: bg-overlay -->
                            <div class="bg-overlay"></div><!-- End: bg-overlay -->
                        </div><!-- End: item hover -->
                    </div>
                </div>
            </div><!-- End: 3 -->
        </div>
    </section>
    <section class="padding-section margin-section">
        <div class="container">
            <div class="row g-0 shadow-custom justify-content-center">
                <div class="col-12 col-xl-8 p-3 p-xl-5 text-center home-out-of-town-panel">
                    <p class="px-xl-0 fs-4 fw-bold py-xl-3 text-uppercase home-section-heading home-gallery-panel__heading">{{ homeContent.outOfTown.heading }}</p>
                    <p v-for="(paragraph, index) in homeContent.outOfTown.paragraphs" :key="index" class="py-2 home-body-text home-out-of-town-panel__paragraph">{{ paragraph }}</p>
                    <div class="d-flex justify-content-center mt-4">
                        <nuxt-link class="text-decoration-none" :to="homeContent.outOfTown.ctaLink">
                            <div class="btn-black btn-hover text-center" style="padding:0.875rem 2rem !important;border-radius:0;">
                                <p class="text-uppercase mb-0 fw-bold">{{ homeContent.outOfTown.ctaLabel }}</p>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="d-flex d-xl-flex justify-content-center justify-content-xl-center margin-section" style="/*background: url(&quot;https://asihairclinic.loidirieng.com/_nuxt/static/pexels-photo-245240.webp&quot;) center / cover no-repeat;*/min-height: 40vh;background: url(&quot;/images/1715092596161.webp&quot;) center;">
        <div class="container d-flex d-xl-flex flex-column justify-content-center align-items-center align-items-lg-center justify-content-xl-center align-items-xxl-center" style="/*background: url(&quot;/images/1715092596161.webp&quot;) center;*/">
            <div class="d-xl-flex flex-xl-column justify-content-xl-center align-items-xl-center py-2" style="background: rgba(14,12,12,0.51);border-radius: 12px;padding: 18px;">
                <h2 class="text-white fw-lighter py-2 text-center text-uppercase">{{ homeContent.hairLossHistory.heading }}</h2>
                <h5 class="text-white fw-lighter py-2 text-center">{{ homeContent.hairLossHistory.subheading }}</h5>
            </div>
            <div class="d-flex d-xl-flex justify-content-center justify-content-xl-center py-2" style="width: max-content;min-width: 300px;">
                <LearnMoreButton :to="homeContent.hairLossHistory.ctaLink" :label="homeContent.hairLossHistory.ctaLabel" />
            </div>
        </div>
    </section>
    <section class="margin-section">
        <div class="container"><!-- Start: div section 1 -->
            <div class="padding-section">
                <div class="row">
                    <div v-for="card in homeContent.patientResources" :key="card.link" class="col-12 col-xl-4"><!-- Start: item hover -->
                        <div class="item-img-hover"><!-- Start: overlay hover -->
                            <div class="overlay-hover"><!-- Start: content -->
                                <div class="px-5">
                                    <div class="d-inline-block d-xl-none px-2 py-1 bg-white text-dark fs-6 py-2">
                                        <p>{{ card.mobileBadge }}</p>
                                    </div>
                                    <div class="d-none d-xl-inline-block px-2 py-1 bg-white text-dark fs-6 py-2">
                                        <p class="text-uppercase">{{ card.desktopBadge }}</p>
                                    </div>
                                    <p class="py-2">{{ card.description }}</p>
                                    <div class="pt-3 pb-4">
                                        <LearnMoreButton :to="card.link" :label="card.ctaLabel" />
                                    </div>
                                </div><!-- End: content -->
                            </div><!-- End: overlay hover --><img class="img-fluid" :src="card.imageSrc" :alt="card.imageAlt"><!-- Start: ovelay -->
                            <div class="overlay">
                                <p>{{ card.overlayTitle }}</p>
                            </div><!-- End: ovelay -->
                        </div><!-- End: item hover -->
                    </div>
                </div>
            </div><!-- End: div section 1 --><!-- Start: section child 2 -->
            <div class="padding-section">
                <div class="row g-0">
                    <div class="col-12 col-xl-6 shadow"><img class="w-100 h-100 obj-cover" src="/static/anh-landing11.png" :alt="homeContent.consultation.imageAlt"></div>
                    <div class="col">
                        <div class="p-xl-5 m-xl-5 d-none">
                            <h2 class="pt-4 py-xl-2">{{ homeContent.consultation.hidden.heading }}</h2>
                            <p v-for="(paragraph, index) in homeContent.consultation.hidden.paragraphs" :key="index" class="py-2 justified-text">{{ paragraph }}</p>
                        </div>
                        <div class="p-xl-5 m-xl-5">
                            <p class="px-xl-0 fs-4 fw-bold py-xl-3 text-uppercase home-section-heading home-gallery-panel__heading">{{ homeContent.consultation.heading }}</p>
                            <p v-for="(paragraph, index) in homeContent.consultation.paragraphs" :key="index" class="py-2 justified-text home-body-text">{{ paragraph }}</p>
                        </div>
                    </div>
                </div>
            </div><!-- End: section child 2 --><!-- Start: homepage FAQ -->
            <div class="padding-section">
                <div class="container">
                    <h2 class="fw-lighter py-2 text-uppercase home-section-heading">{{ homeContent.faq.heading }}</h2>
                    <div><b-accordion class="accordion home-faq-accordion" role="tablist" id="homepage-faq"><b-accordion-item v-for="faq in homeContent.faq.items" :key="faq.question" class="accordion-item my-3" :title="faq.question">
                                <p class="mb-0 home-body-text">{{ faq.answer }}</p>
                            </b-accordion-item></b-accordion></div>
                </div>
            </div><!-- End: homepage FAQ --><!-- Start: section child 3 -->
            <div class="padding-section">
                <div class="row g-0">
                    <div class="col d-xxl-flex justify-content-xxl-center align-items-xxl-center">
                        <div class="p-2 p-xl-5 mx-xl-5">
                            <h2 class="pt-4 pb-2 pt-xl-0 pb-xl-0 text-uppercase">{{ homeContent.beforeAfter.heading }}</h2>
                            <p class="py-2 justified-text">{{ homeContent.beforeAfter.description }}<br></p>
                        </div>
                    </div>
                    <div class="col-12 col-xl-6 d-xl-flex d-xxl-flex order-first justify-content-xl-center align-items-xl-center order-xl-last justify-content-xxl-center">
                        <div class="d-xxl-flex align-items-xxl-center h-100 w-100 shadow-custom" style="max-height: 50vh;" v-for="(imageBeforeAfter,index) in imageBeforeAfters" v-bind:key="imageBeforeAfter._id">
                            <splitpanes class="splitpanes default-theme set-width" :vertical="false" :style="{'background-image':'url(&quot;'+imageBeforeAfter.imageAfter+'&quot;)'}">
                                <pane class="splitpanes__pane overflow-hidden bg-secondary"><b-img class="overflow-hidden h-100 obj-cover" style="width: auto" :src="imageBeforeAfter.imageBefore" :alt="imageBeforeAfter.imageBefore" lazy></b-img></pane>
                                <pane class="splitpanes__pane overflow-hidden" style="background: rgba(242,242,242,0);"></pane>
                            </splitpanes>
                        </div>
                    </div>
                </div>
            </div><!-- End: section child 3 -->
        </div>
    </section>
</div>
</template><script setup>
    import { computed,watch } from 'vue';
    import { homeContent as homeContentEn } from '~/content/home';
    import { homeContent as homeContentEs } from '~/content/home-es';




    

            


    

    

    //replaceMome
    

    


    const $device = useDevice();
    const { isMobile,isDesktop } = useDevice();
    const route = useRoute();

    const homeContent = computed(() => (route.query.lang === 'es' ? homeContentEs : homeContentEn));

    
    definePageMeta({
        layout: "layouthome",

    });
    
    


    let scrolled= ref(false);;









    //   variables
    if(process.env.NODE_ENV==='development'){

    }






    // computed
    

    //attributesCal 0

    


        // computed





        const clearTypeName = (api)=>{
            const funF = (obj)=>{
                if(obj){
                    console.log('obj')
                    Object.keys(obj).forEach((key)=>{
                        if(key==="__typename"){
                            delete obj.__typename;
                        } else if(Array.isArray(obj[key])){
                            obj[key].forEach((item)=>{
                                if(item)
                                    funF(item);
                            });
                        } else if(typeof (obj[key]) ==="object"&&(obj[key])){
                            if(obj[key])
                                funF(obj[key]);
                        }
                    });}
            };
            funF(api);
            return api;
        };



        //methods


    

// mutation

        

    


    





        //0 setup
        

        const slug=route.params['index'];

const resultimageBeforeAfters = await useAsyncQuery(gql` query    
 imageBeforeAfters($query: imageBeforeAfterFindInput,$limit:Float,$skip:Float,$sort:JSONObject){
     imageBeforeAfters:  imageBeforeAfters(query:$query,limit:$limit,skip:$skip,sort:$sort)
     {
                _id createdAt updatedAt imageBefore imageAfter 
        }

}`, { limit: 1 });
        let imageBeforeAfters = computed(() => resultimageBeforeAfters.data.value?.imageBeforeAfters ?? []);
        let webConfig = await useWebConfig();









        //0 afterData
        


        


        



        
        const methods=()=>{
            
        }

        




  // watch



    











    //meta

        const faqSchema = computed(() => ({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: homeContent.value.faq.items.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        }));

   const bodyAttrs ={};
    const  htmlAttrs={};

        useHead({
            title: computed(() => homeContent.value.seo.title),
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
            charset: 'utf-8',
            meta: computed(() => {
                const meta = [{ name: 'theme-color', content: '#fff' }];

                meta.push({ name: 'title', content: homeContent.value.seo.title });
                meta.push({ name: 'description', content: homeContent.value.seo.description });
                meta.push({ name: 'keywords', content: homeContent.value.seo.keywords });
                meta.push({ property: 'og:title', content: homeContent.value.seo.ogTitle });
                meta.push({ property: 'og:description', content: homeContent.value.seo.ogDescription });
                meta.push({ name: 'og:image', content: webConfig?.value.mediaSeo });
                meta.push({ name: 'og:url', content: webConfig?.value.domain });

                return meta;
            }),
            htmlAttrs:htmlAttrs,
            bodyAttrs:bodyAttrs,
            script: computed(() => [
                {
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify(faqSchema.value),
                },
            ]),
            link:[
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
               { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' },
            ]
        })
    


</script>


<!--false-->
<script>


    import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css';
              
    export default {
        name: "home",

        
        components: {
            Splitpanes, Pane,
},
        

        data(){
            return {

                }
            },
                methods:{




    }

        }
</script>

<style scoped>
.home-section-heading {
  color: #252525;
}

.bg-black .home-section-heading {
  color: #fff;
}

.home-body-text {
  color: #606060;
}

.home-body-text-light {
  color: rgba(255, 255, 255, 0.92);
}

.home-faq-accordion :deep(.accordion-button) {
  color: #252525;
  font-weight: 600;
}

.home-faq-accordion :deep(.accordion-button:not(.collapsed)) {
  color: #252525;
  background-color: rgba(222, 178, 47, 0.12);
  box-shadow: inset 0 -1px 0 rgba(37, 37, 37, 0.08);
}

.home-why-ahr__heading {
  margin: 0;
  font-weight: 700;
  font-size: clamp(1.35rem, 2.4vw, 1.875rem);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #252525;
  line-height: 1.2;
}

.home-dr-do__sidebar-heading {
  color: #fff;
}

.home-why-ahr__subheading {
  margin: 0 0 1.5rem;
  font-weight: 500;
  font-size: clamp(1rem, 1.6vw, 1.125rem);
  letter-spacing: 0.04em;
  color: #DEB22F;
  line-height: 1.4;
}

.home-why-ahr__body {
  margin: 0 0 1rem;
  max-width: 36rem;
  color: #606060;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
}

.home-why-ahr__body:last-of-type {
  margin-bottom: 0;
}

.home-why-ahr__metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(37, 37, 37, 0.1);
}

.home-why-ahr__metric {
  padding: 1.25rem 1rem;
  border: 1px solid rgba(37, 37, 37, 0.08);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.home-why-ahr__metric:hover {
  border-color: rgba(222, 178, 47, 0.35);
  box-shadow: 0 8px 24px rgba(37, 37, 37, 0.06);
}

.home-why-ahr__metric-value {
  margin: 0;
  font-weight: 600;
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: #DEB22F;
}

.home-why-ahr__metric-label {
  margin: 0.5rem 0 0;
  font-weight: 600;
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #606060;
  line-height: 1.4;
}

@media (max-width: 575px) {
  .home-why-ahr__metrics {
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }

  .home-why-ahr__metric {
    padding: 1rem 0.75rem;
  }
}

.home-hero-inline__cta p {
  font-weight: 700;
  font-size: 1rem;
}

.home-hero-inline__phone {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 220px;
  padding: 0.875rem 2rem;
  background-color: rgba(255, 255, 255, 0.14);
  border: none;
  color: #DEB22F;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.25s ease, color 0.25s ease;
  transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
}

.home-hero-inline__phone-icon {
  font-size: 1rem;
  text-decoration: none;
}

.home-hero-inline__phone-text {
  font-size: 1.125rem;
  text-decoration: underline;
  text-underline-offset: 0.2em;
  text-decoration-thickness: 1px;
}

.home-hero-inline__phone:hover .home-hero-inline__phone-text {
  text-decoration: underline;
}

@media (min-width: 1200px) {
  .home-hero-inline {
    margin-bottom: 150px;
  }

  .home-hero-inline__media {
    margin-top: -150px;
    z-index: 0;
  }

  .home-hero-inline__image {
    max-height: 110vh;
  }
}

@media (min-width: 992px) {
  .home-hero-inline__title {
    font-size: clamp(2rem, 3.2vw, 3.25rem);
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 575px) {
  .home-hero-inline__wrap {
    padding: 1rem;
  }

  .home-hero-inline__subheading {
    margin-bottom: 1.5rem;
  }

  .home-hero-inline__cta {
    width: 100%;
    min-width: 0;
  }

  .home-hero-inline__phone {
    width: 100%;
    min-width: 0;
    justify-content: center;
  }

  .home-hero-inline__actions {
    flex-direction: column;
    align-items: stretch;
  }
}

.home-quote {
  background-color: rgba(112, 112, 112, 0.92);
  color: #fff;
}

.home-quote :deep(.message-section-9 div) {
  border-left: 5px solid #fff;
}

.home-quote :deep(.message-section-9 > p) {
  color: #fff;
}

.home-gallery-banner {
  position: relative;
}

.home-gallery-banner .position-section {
  top: 42%;
  bottom: auto;
}

.home-gallery-panel {
  max-width: 32rem;
}

.home-gallery-panel__content {
  margin: 0 auto;
}

.home-gallery-panel__heading {
  color: #DEB22F;
  margin: 0;
}

.home-gallery-panel__description {
  max-width: 42rem;
  margin: 0 auto;
  line-height: 1.75;
}

.home-out-of-town-panel__paragraph {
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.75;
}

@media (max-width: 575px) {
  .home-gallery-banner .position-section {
    top: 38%;
  }

  .home-gallery-panel {
    max-width: calc(100vw - 2.5rem);
  }

  .home-gallery-panel__heading {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .home-gallery-panel__description {
    max-width: 100%;
    padding-top: 0.25rem;
    padding-bottom: 0.5rem;
  }
}
</style>

//update in Mon Sep 16 2024 10:46:13 GMT+0700 (Indochina Time) by loidirieng
