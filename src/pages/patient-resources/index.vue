<template>
<div>
    <section class="position-relative overflow-hidden"><!-- Start: container position -->
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column align-items-start justify-content-xl-center align-items-xl-start chirld-position">
                    <h1 class="fw-lighter text-white p-2 text-title-mobile">PATIENT RESOURCES</h1><!-- Start: div heading 2 -->
                    <div class="d-flex d-xl-flex d-xxl-flex justify-content-xl-center justify-content-xxl-center align-items-xxl-center"><nuxt-link class="text-decoration-none" to="/">
                            <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">HOME</h5>
                        </nuxt-link>
                        <h4 class="fw-lighter text-white text-section-1 p-2">.</h4><nuxt-link class="text-decoration-none" to="/patient-resources">
                            <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">PATIENT RESOURCES</h5>
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
                <div class="height-section-top"><img class="w-100 h-100 obj-cover" src="/static/eyebrow1.png" alt="Hair Transplant"></div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="shadow margin-section rounded"><!-- Start: item -->
                <div class="p-xl-3">
                    <h3 class="fw-lighter text-center my-2">HAIR TRANSPLANT CONSULTATION</h3>
                    <p class="fw-lighter text-center my-2">Hair restoration is a complex topic with various options available. In a personalized consultation with Dr. Do, you'll discover the best hair restoration procedure for your specific situation.</p>
                    <div class="d-flex d-xl-flex justify-content-center justify-content-xl-center"><nuxt-link class="text-decoration-none text-white" to="/patient-resources/hair-transplant-consultation/" aria-label="Hair Transplant Patient Resources">
                            <div class="btn-black my-2 btn-hover">
                                <p class="fw-lighter">LEARN MORE</p>
                            </div>
                        </nuxt-link></div>
                    <hr>
                </div><!-- End: item --><!-- Start: item -->
                <div class="p-xl-3">
                    <h3 class="fw-lighter text-center my-2">HAIR TRANSPLANT COST</h3>
                    <p class="fw-lighter text-center my-2">What are the factors that affect the cost of hair restoration?<br>How does Dr. Do ensure a perfect, natural result without cutting corners?</p>
                    <div class="d-flex d-xl-flex justify-content-center justify-content-xl-center"><nuxt-link class="text-decoration-none text-white" to="/patient-resources/hair-transplant-cost/" aria-label="Hair Transplant Patient Resources">
                            <div class="btn-black my-2 btn-hover">
                                <p class="fw-lighter">LEARN MORE</p>
                            </div>
                        </nuxt-link></div>
                    <hr>
                </div><!-- End: item --><!-- Start: item -->
                <div class="p-xl-3">
                    <h3 class="fw-lighter text-center my-2">STAGES OF HAIR LOSS</h3>
                    <p class="fw-lighter text-center my-2">Various hair restoration techniques can treat many conditions.<br>Here are the different stages of hair loss and when a person might be considered for hair restoration.</p>
                    <div class="d-flex d-xl-flex justify-content-center justify-content-xl-center"><nuxt-link class="text-decoration-none text-white" to="/patient-resources/stages-of-hair-loss/" aria-label="Hair Transplant Patient Resources">
                            <div class="btn-black my-2 btn-hover">
                                <p class="fw-lighter">LEARN MORE</p>
                            </div>
                        </nuxt-link></div>
                    <hr>
                </div><!-- End: item -->
            </div>
        </div>
    </section>
</div>
</template><script setup>
    import { computed,watch } from 'vue';





    

            


    

    

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
if(resultwebConfig.data.value&&resultwebConfig.data.value.webConfig){
webConfig.value = {...resultwebConfig.data.value.webConfig}}








        //0 afterData
        


        


        



        
        const methods=()=>{
            
        }

        





  // watch



    











    //meta
        

        const meta = [  {name: "theme-color" ,content:"#fff"}];
        let title = '';

    title =''


         title= 'Hair Transplant Patient Resources';
            meta.push({ name: 'title', content:'Hair Transplant Patient Resources' });
            
            meta.push({ name: 'og:image', content:webConfig?.value.mediaSeo });
            
            meta.push({ name: 'description', content:'Access our Hair Transplant Patient Resources for essential information on procedures, recovery tips, and expert advice. Include hair transplant consultation, hair transplant cost, stages of hair loss,...' });
            
            meta.push({ name: 'keywords', content:'Hair Transplant, hair transplant consultaton, hair transplant cost' });
            
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
        name: "patient-resources-",

        

        data(){
            return {

                }
            },
                methods:{




    }

        }
</script>

//update in Mon Sep 16 2024 10:54:15 GMT+0700 (Indochina Time) by loidirieng
