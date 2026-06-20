<template>
<div>
    <section class="position-relative overflow-hidden"><!-- Start: container position -->
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-start chirld-position">
                    <h1 class="fw-lighter text-white p-2 text-title-mobile">SCALP MICROPIGMENTATION</h1><!-- Start: div heading 2 -->
                    <div class="d-flex d-xl-flex d-xxl-flex justify-content-start align-items-center flex-wrap"><nuxt-link class="text-decoration-none" to="/">
                            <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">HOME</h5>
                        </nuxt-link>
                        <h4 class="fw-lighter text-white text-section-1 p-2">.</h4><nuxt-link class="text-decoration-none" to="/hair-transplantation/">
                            <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">HAIR TRANSPLANTATION</h5>
                        </nuxt-link>
                        <h4 class="fw-lighter text-white text-section-1 p-2">.</h4><nuxt-link class="text-decoration-none" to="/hair-transplantation/fue-hair-transplant">
                            <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">SCALP MICROPIGMENTATION</h5>
                        </nuxt-link>
                    </div><!-- End: div heading 2 -->
                </div>
            </div>
        </div><!-- End: container position -->
        <div class="row">
            <div class="col d-none d-xl-block">
                <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start py-5 h-100 height-section-top" style="background: #000000;">
                    <h1 class="fw-lighter" style="color: rgb(0,0,0);">VIRTUAL CONSULTATION</h1>
                    <h4 class="fw-lighter" style="color: rgb(0,0,0);">HOME . CONTACT . VIRTUAL CONSULTATION</h4>
                </div>
            </div>
            <div class="col">
                <div class="height-section-top"><img class="w-100 h-100 obj-cover" src="/static/image/img51.jpg" alt="Hair Transplant"></div>
            </div>
        </div>
    </section>
    <section>
        <div class="container"><!-- Start: 1 -->
            <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center margin-section py-3 px-3 py-xl-5 shadow-custom">
                <div class="col-xl-6">
                    <h2 class="text-center fw-lighter pb-3">WHAT IS SCALP MICROPIGMENTATION?</h2>
                    <p>Scalp micropigmentation (SMP) is a cutting-edge cosmetic procedure aimed at addressing thinning hair or hair loss by creating the illusion of fuller hair. Often referred to as a hair tattoo, SMP involves the meticulous deposition of medical-grade pigment onto the scalp using fine needles. These pigment dots mimic the appearance of natural hair follicles, resulting in the visual enhancement of hair density.</p>
                </div>
            </div><!-- End: 1 -->
        </div>
    </section>
    <section class="overflow-hidden"><!-- Start: 3 -->
        <div class="margin-section padding-section"><!-- Start: 1 -->
            <div class="row">
                <div class="col-12 col-xl-6">
                    <div class="scale-image"><img class="w-100 h-100 obj-cover object-position-top" src="/static/download.jpg" style="max-height: 80vh;" alt="Hair Transplant"></div>
                </div>
                <div class="col-12 col-xl-6">
                    <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 bg-black px-2 py-4 px-xl-0 py-xl-0 p-xl-5">
                        <div class="px-xl-5">
                            <h2 class="fw-lighter text-white text-section-1 p-2 text-uppercase">Who Can Benefit from Scalp Micropigmentation?</h2>
                            <ul class="text-white">
                                <li class="my-3">Scalp micropigmentation is particularly beneficial for individuals experiencing various forms of hair loss, including:</li>
                                <li class="my-3">Alopecia areata</li>
                                <li class="my-3">Chemotherapy-related hair loss</li>
                                <li class="my-3">Hormonal conditions causing hair loss like polycystic ovary syndrome (PCOS)</li>
                                <li class="my-3">Male pattern baldness, receding hairline, or baldness at the crown</li>
                                <li class="my-3">Thin hair or scalp show-through</li>
                                <li class="my-3">Scars or birthmarks on the scalp</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div><!-- End: 1 -->
        </div><!-- End: 3 -->
    </section>
    <section class="bg-black padding-section margin-section">
        <div class="container"><!-- Start: 4 -->
            <div class="d-xl-flex justify-content-xl-center align-items-xl-center margin-section text-white">
                <div class="row">
                    <div class="col-12 col-xl-6">
                        <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 py-3 py-xl-0 p-xl-5">
                            <p class="text-white px-1 py-2 px-xl-2 py-xl-2">Unlike hair transplantation surgery, scalp micropigmentation is noninvasive, requiring no surgery or anesthesia. This makes it an attractive option for individuals seeking a less invasive and more affordable alternative. Additionally, SMP offers the following advantages compared to surgical procedures:</p>
                        </div>
                    </div>
                    <div class="col-12 col-xl-6">
                        <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 py-3 py-xl-0 p-xl-5">
                            <ul>
                                <li class="my-3">Less invasive, with no surgery or incisions involved</li>
                                <li class="my-3">Reduced pain during the procedure</li>
                                <li class="my-3">Lower overall cost</li>
                                <li class="my-3">Minimal to no downtime post-treatment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div><!-- End: 4 -->
        </div>
    </section>
</div>
</template><script setup>
    import { computed,watch } from 'vue';
    const config = useRuntimeConfig()






    

            


    

    

    //replaceMome
    

    


    const $device = useDevice();
    const { isMobile,isDesktop } = useDevice();
    const route = useRoute();

    
    definePageMeta({
        layout: "default",

    });
    
    


    









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
        

        let webConfig= ref({});

        
let variablewebConfig={};

const resultwebConfig = await useAsyncQuery(gql` query {  webConfig {
                ceoTitle ceoDescription seoKeywords mediaSeo domain 
        } }`,variablewebConfig);
if(resultwebConfig.data.value&&resultwebConfig.data.value?.webConfig){
webConfig.value = {...resultwebConfig.data.value?.webConfig}}








        //0 afterData
        


        


        



        
        const methods=()=>{
            
        }

        





  // watch



    











    //meta
        

        const meta = [  {name: "theme-color" ,content:"#fff"}];
        let title = '';

    title =''


         title= 'Scalp micropigmentation (SMP)';
            meta.push({ name: 'title', content:'Scalp micropigmentation (SMP)' });
            
            meta.push({ name: 'og:image', content:webConfig?.value.mediaSeo });
            
            meta.push({ name: 'description', content:'Scalp micropigmentation (SMP) is a cutting-edge cosmetic procedure aimed at addressing thinning hair or hair loss by creating the illusion of fuller hair. Often referred to as a hair tattoo, SMP involves the meticulous deposition of medical-grade pigment onto the scalp using fine needles....' });
            
            meta.push({ name: 'keywords', content: 'Scalp micropigmentation'});
            
            meta.push({ name: 'og:url', content:webConfig?.value.domain });
            


   const bodyAttrs ={};
    const  htmlAttrs={};
    



        useHead({
            title: title,
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
            charset: 'utf-8',
            meta: meta,
            htmlAttrs:htmlAttrs,
            bodyAttrs:bodyAttrs,
            script: [
                    
            ],
            
            link:[

                
                
                
                
               
                    { rel: 'stylesheet', href: '' },
            ]
            
        })
    


</script>


<!--false-->
<script>


    
    export default {
        name: "hair-transplantation-scalp-micropigmentation-",

        

        data(){
            return {

                }
            },
                methods:{




    }

        }
</script>

//update in Thu Nov 28 2024 02:15:40 GMT+0000 (Coordinated Universal Time) by loidirieng
