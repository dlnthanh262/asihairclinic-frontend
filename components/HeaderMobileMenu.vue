<template>
<div class="py-5 w-100">
    <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/')">
        <div class="px-3 py-3 border rounded">
            <p>{{ navContent.mobile.home }}</p>
        </div>
    </nuxt-link>
    <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/about')">
        <div class="px-3 py-3 border rounded my-2">
            <p>{{ navContent.mobile.about }}</p>
        </div>
    </nuxt-link>
    <b-accordion class="accordion my-2" role="tablist" id="accordion-6">
        <b-accordion-item class="accordion-item" :title="navContent.hairTransplantation">
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/hair-transplantation/')">
                <div class="py-3">
                    <p>{{ navContent.overview }}</p>
                </div>
            </nuxt-link>
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/hair-transplantation/artas-ix-robotic-hair-restoration')">
                <div class="py-3">
                    <p>{{ navContent.methods.artas }}</p>
                </div>
            </nuxt-link>
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/hair-transplantation/fue-hair-transplant')">
                <div class="py-3">
                    <p>{{ navContent.methods.fue }}</p>
                </div>
            </nuxt-link>
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/hair-transplantation/fut-hair-transplant')">
                <div class="py-3">
                    <p>{{ navContent.methods.futShort }}</p>
                </div>
            </nuxt-link>
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/hair-transplantation/male-hair-transplants/')">
                <div class="py-3">
                    <p>{{ navContent.transplantTypes.male }}</p>
                </div>
            </nuxt-link>
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/hair-transplantation/female-hair-transplants/')">
                <div class="py-3">
                    <p>{{ navContent.transplantTypes.female }}</p>
                </div>
            </nuxt-link>
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/hair-transplantation/facial-hair-transplants/')">
                <div class="py-3">
                    <p>{{ navContent.transplantTypes.facial }}</p>
                </div>
            </nuxt-link>
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/hair-transplantation/eyebrow-transplant/')">
                <div class="py-3">
                    <p>{{ navContent.transplantTypes.eyebrow }}</p>
                </div>
            </nuxt-link>
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/hair-transplantation/prp-hair-loss-treatment/')">
                <div class="py-3">
                    <p>{{ navContent.methods.prp }}</p>
                </div>
            </nuxt-link>
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/hair-transplantation/dhi')">
                <div class="py-3">
                    <p>{{ navContent.methods.dhiShort }}</p>
                </div>
            </nuxt-link>
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/hair-transplantation/hair-restoration-faq/')">
                <div class="py-3">
                    <p>{{ navContent.methods.faq }}</p>
                </div>
            </nuxt-link>
        </b-accordion-item>
    </b-accordion>
    <b-accordion class="accordion my-2" role="tablist" id="accordion-7">
        <b-accordion-item class="accordion-item" :title="navContent.patientResources">
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/patient-resources')">
                <div class="py-3">
                    <p>{{ navContent.overview }}</p>
                </div>
            </nuxt-link>
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/patient-resources/hair-transplant-consultation/')">
                <div class="py-3">
                    <p>{{ navContent.resources.consultation }}</p>
                </div>
            </nuxt-link>
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/patient-resources/hair-transplant-cost/')">
                <div class="py-3">
                    <p>{{ navContent.resources.cost }}</p>
                </div>
            </nuxt-link>
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/patient-resources/stages-of-hair-loss/')">
                <div class="py-3">
                    <p>{{ navContent.resources.stages }}</p>
                </div>
            </nuxt-link>
            <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/patient-resources/financing')">
                <div class="py-3">
                    <p>{{ navContent.resources.financing }}</p>
                </div>
            </nuxt-link>
        </b-accordion-item>
    </b-accordion>
    <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/hair-loss-history/')">
        <div class="px-3 py-3 border rounded my-2">
            <p>{{ navContent.hairLossHistory }}</p>
        </div>
    </nuxt-link>
    <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/gallery')">
        <div class="px-3 py-3 border rounded my-2">
            <p>{{ navContent.gallery }}</p>
        </div>
    </nuxt-link>
    <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/videos')">
        <div class="px-3 py-3 border rounded my-2">
            <p>{{ navContent.mobile.videos }}</p>
        </div>
    </nuxt-link>
    <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/blogs')">
        <div class="px-3 py-3 border rounded my-2">
            <p>{{ navContent.mobile.blogs }}</p>
        </div>
    </nuxt-link>
    <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/contact')">
        <div class="px-3 py-3 border rounded my-2">
            <p>{{ navContent.mobile.contact }}</p>
        </div>
    </nuxt-link>
    <nuxt-link class="poiter text-decoration-none text-dark" :to="localizedTo('/contact/virtual-consultation/')">
        <div class="px-3 py-3 border rounded my-2">
            <p>{{ navContent.virtualConsultation }}</p>
        </div>
    </nuxt-link>
</div>
</template>

<script setup>
const { navContent, localizedTo } = useLangNav();
</script>
