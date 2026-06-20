<template>
<div>
    <section class="position-relative overflow-hidden"><!-- Start: container position -->
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column align-items-start justify-content-xl-center align-items-xl-start chirld-position">
                    <h1 class="fw-lighter text-white p-2 text-title-mobile">FINANCING</h1><!-- Start: div heading 2 -->
                    <div class="d-flex d-xl-flex d-xxl-flex justify-content-xl-center justify-content-xxl-center align-items-xxl-center"><nuxt-link class="text-decoration-none" to="/">
                            <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">HOME</h5>
                        </nuxt-link>
                        <h4 class="fw-lighter text-white text-section-1 p-2">.</h4><nuxt-link class="text-decoration-none" to="/patient-resources/financing">
                            <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">FINANCING</h5>
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
                <div class="height-section-top"><img class="w-100 h-100 obj-cover" src="/static/hairi01.png" alt="Hair Transplant"></div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="d-flex justify-content-center shadow margin-section rounded">
                <h1 class="p-2">FINANCING COMPANY</h1>
            </div>
            <div>
                <div class="row">
                    <div class="col-12 col-lg-4 col-xl-3 d-flex flex-column justify-content-center">
                        <div class="d-flex flex-column justify-content-center border p-2 rounded"><a class="d-flex flex-column justify-content-center text-decoration-none text-dark" href="https://app.patientfi.com/v2/aesthetichouston/apply">
                                <h3 class="text-center">Patient Fi</h3><img src="/static/qr/1.png">
                            </a></div>
                    </div>
                    <div class="col-12 col-lg-4 col-xl-3 d-flex flex-column justify-content-center">
                        <div class="d-flex flex-column justify-content-center border p-2 rounded"><a class="d-flex flex-column justify-content-center text-decoration-none text-dark" href="https://www.carecredit.com/go/758JSF/">
                                <h3 class="text-center">Care Credit</h3><img src="/static/qr/qr-code.png">
                            </a></div>
                    </div>
                    <div class="col-12 col-lg-4 col-xl-3 d-flex flex-column justify-content-center">
                        <div class="d-flex flex-column justify-content-center border p-2 rounded"><a class="d-flex flex-column justify-content-center text-decoration-none text-dark" href="https://go.alphaeoncredit.com/credit-portal/store/9711">
                                <h3 class="text-center">Alphaeon&nbsp;</h3><img src="/static/qr/alphaeon QR.png">
                            </a></div>
                    </div>
                    <div class="col-12 col-lg-4 col-xl-3 d-flex flex-column justify-content-center">
                        <div class="d-flex flex-column justify-content-center border p-2 rounded"><a class="d-flex flex-column justify-content-center text-decoration-none text-dark" href="https://www.unitedcredit.com/start-an-application/?pid=001E000000TZ4aS">
                                <h3 class="text-center">United Credit</h3><img src="/static/qr/001E000000TZ4aS.png">
                            </a></div>
                    </div>
                </div>
            </div>
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


         title= 'Financing - Payment Method ';
            meta.push({ name: 'title', content:'Financing - Payment Method ' });
            
            meta.push({ name: 'og:image', content:webConfig?.value.mediaSeo });
            
            meta.push({ name: 'description', content:'Explore flexible financing options for your hair transplant procedure. We offer a variety of payment plans to make hair restoration affordable and accessible. Start your journey to fuller hair today with easy and convenient financing solutions…' });
            
            meta.push({ name: 'keywords', content:'Financing' });
            
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
        name: "patient-resources-financing-",

        

        data(){
            return {

                }
            },
                methods:{




    }

        }
</script>

//update in Thu Nov 28 2024 02:54:57 GMT+0000 (Coordinated Universal Time) by loidirieng
