<template>
<ul class="nav nav-tabs disable-border-nav">
    <li class="nav-item">
        <nuxt-link class="nav-link txt-header poiter text-decoration-none visible-header-home" :class="linkClass" :to="localizedTo('/')">
            <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center hover-yellow font-size-reponsive-header">
                <p class="text-uppercase" :class="textClass">{{ navContent.home }}</p>
            </div>
        </nuxt-link>
    </li>
    <li class="nav-item">
        <nuxt-link class="nav-link txt-header poiter text-decoration-none" :class="linkClass" :to="localizedTo('/about/')">
            <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center hover-yellow font-size-reponsive-header">
                <p class="text-uppercase" :class="textClass">{{ navContent.about }}</p>
            </div>
        </nuxt-link>
    </li>
    <li class="nav-item">
        <nuxt-link class="nav-link nav-header-hover txt-header poiter text-decoration-none" :class="linkClass" :to="localizedTo('/hair-transplantation/')">
            <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center hover-yellow font-size-reponsive-header">
                <p class="text-uppercase" :class="textClass">{{ navContent.hairTransplantation }}</p><i class="fa fa-caret-down ms-2"></i>
            </div>
            <div class="lever-2 bg-transparent px-1 font-size-reponsive-header" style="opacity: 0;display: none;">
                <div class="row g-0">
                    <div class="col">
                        <div class="bg-white h-100 p-4 text-dark">
                            <h5 class="text-uppercase">{{ navContent.hairTransplantMethodHeading }}</h5>
                            <div class="ps-2">
                                <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/hair-transplantation/artas-ix-robotic-hair-restoration')">
                                    <div class="d-flex flex-row justify-content-start justify-content-xxl-start align-items-xxl-center px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                        <p>{{ navContent.methods.artas }}</p>
                                    </div>
                                </nuxt-link>
                                <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/hair-transplantation/fue-hair-transplant')">
                                    <div class="d-flex flex-row justify-content-start justify-content-xl-start align-items-xl-center px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                        <p>{{ navContent.methods.fue }}</p>
                                    </div>
                                </nuxt-link>
                                <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/hair-transplantation/fut-hair-transplant')">
                                    <div class="d-flex flex-row justify-content-start px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                        <p>{{ navContent.methods.fut }}</p>
                                    </div>
                                </nuxt-link>
                                <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/hair-transplantation/prp-hair-loss-treatment/')">
                                    <div class="d-flex flex-row justify-content-start px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                        <p>{{ navContent.methods.prp }}</p>
                                    </div>
                                </nuxt-link>
                                <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/hair-transplantation/dhi/')">
                                    <div class="d-flex flex-row justify-content-start px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                        <p>{{ navContent.methods.dhi }}</p>
                                    </div>
                                </nuxt-link>
                                <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/hair-transplantation/scalp-micropigmentation/')">
                                    <div class="d-flex flex-row justify-content-start px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                        <p>{{ navContent.methods.smp }}</p>
                                    </div>
                                </nuxt-link>
                                <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/hair-transplantation/hair-restoration-faq/')">
                                    <div class="d-flex flex-row justify-content-start px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                        <p>{{ navContent.methods.faq }}</p>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="bg-white h-100 p-4 text-dark">
                            <h5 class="text-uppercase">{{ navContent.hairTransplantHeading }}</h5>
                            <div class="ps-2">
                                <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/hair-transplantation/male-hair-transplants/')">
                                    <div class="d-flex flex-row justify-content-start px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                        <p>{{ navContent.transplantTypes.male }}</p>
                                    </div>
                                </nuxt-link>
                                <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/hair-transplantation/female-hair-transplants/')">
                                    <div class="d-flex flex-row justify-content-start px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                        <p>{{ navContent.transplantTypes.female }}</p>
                                    </div>
                                </nuxt-link>
                                <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/hair-transplantation/facial-hair-transplants/')">
                                    <div class="d-flex flex-row justify-content-start px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                        <p>{{ navContent.transplantTypes.facial }}</p>
                                    </div>
                                </nuxt-link>
                                <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/hair-transplantation/eyebrow-transplant/')">
                                    <div class="d-flex flex-row justify-content-start px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                        <p>{{ navContent.transplantTypes.eyebrow }}</p>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </li>
    <li class="nav-item">
        <nuxt-link class="nav-link nav-header-hover txt-header poiter text-decoration-none" :class="linkClass" :to="localizedTo('/patient-resources')">
            <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center hover-yellow font-size-reponsive-header">
                <p class="d-xl-flex justify-content-xl-start text-uppercase" :class="textClass">{{ navContent.patientResources }}</p><i class="fa fa-caret-down ms-2"></i>
            </div>
            <div class="lever-2 bg-transparent px-1" style="opacity: 0;display: none;">
                <div class="bg-white h-100 p-4 text-dark font-size-reponsive-header">
                    <h5 class="text-uppercase">{{ navContent.patientResourcesHeading }}</h5>
                    <div class="ps-2">
                        <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/patient-resources/hair-transplant-consultation/')">
                            <div class="d-flex flex-row justify-content-start justify-content-xxl-start align-items-xxl-center px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                <p>{{ navContent.resources.consultation }}</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/patient-resources/hair-transplant-cost/')">
                            <div class="d-flex flex-row justify-content-start justify-content-xl-start align-items-xl-center px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                <p>{{ navContent.resources.cost }}</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/patient-resources/stages-of-hair-loss/')">
                            <div class="d-flex flex-row justify-content-start px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                <p>{{ navContent.resources.stages }}</p>
                            </div>
                        </nuxt-link>
                        <nuxt-link class="btn-hover poiter text-decoration-none" :to="localizedTo('/patient-resources/financing')">
                            <div class="d-flex flex-row justify-content-start px-1 py-2 text-dark hover-yellow"><i class="fa fa-angle-right fs-4 me-2"></i>
                                <p>{{ navContent.resources.financing }}</p>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </li>
    <li class="nav-item">
        <nuxt-link class="nav-link txt-header poiter text-decoration-none" :class="linkClass" :to="localizedTo('/hair-loss-history/')">
            <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center hover-yellow font-size-reponsive-header">
                <p class="text-uppercase" :class="textClass">{{ navContent.hairLossHistory }}</p>
            </div>
        </nuxt-link>
    </li>
    <li class="nav-item">
        <nuxt-link class="nav-link txt-header poiter text-decoration-none" :class="linkClass" :to="localizedTo('/gallery')">
            <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center hover-yellow font-size-reponsive-header">
                <p class="text-uppercase" :class="textClass">{{ navContent.gallery }}</p>
            </div>
        </nuxt-link>
    </li>
    <li class="nav-item">
        <nuxt-link class="nav-link txt-header poiter text-decoration-none" :class="linkClass" :to="localizedTo('/blogs')">
            <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center hover-yellow font-size-reponsive-header">
                <p class="text-uppercase" :class="textClass">{{ navContent.blogs }}</p>
            </div>
        </nuxt-link>
    </li>
    <li class="nav-item">
        <nuxt-link class="nav-link nav-header-hover txt-header poiter text-decoration-none" :class="linkClass" :to="localizedTo('/contact')">
            <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center hover-yellow font-size-reponsive-header">
                <p class="text-uppercase" :class="textClass">{{ navContent.contact }}</p>
            </div>
        </nuxt-link>
    </li>
</ul>
</template>

<script setup>
const props = defineProps({
  bold: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
});

const { navContent, localizedTo } = useLangNav();

const textClass = computed(() => (props.bold ? 'fw-bold' : ''));
const linkClass = computed(() => (props.dark ? 'text-dark' : ''));
</script>
