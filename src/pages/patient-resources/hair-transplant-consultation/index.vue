<template>
<div>
    <section class="position-relative overflow-hidden"><!-- Start: container position -->
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column align-items-start justify-content-xl-center align-items-xl-start chirld-position">
                    <h1 class="fw-lighter text-white p-2 text-title-mobile">HAIR TRANSPLANT CONSULTATION</h1>
                    <p class="d-none d-xl-block fw-lighter text-white text-section-1 p-2">If you're facing hair loss, a sparse beard, a significant forehead, or other hair-related concerns, your first step should be a private consultation with Dr. Do, a reputable hair loss specialist in Houston.</p>
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
                <div class="height-section-top"><img class="w-100 h-100 obj-cover" src="/static/image/img50.jpg" alt="Hair Transplant"></div>
            </div>
        </div>
    </section>
    <section class="padding-section">
        <div class="container"><!-- Start: 1 -->
            <div class="d-xl-flex justify-content-xl-center align-items-xl-center shadow-custom margin-section rounded p-3 py-xl-5">
                <div class="col-12 col-xl-6">
                    <p class="my-3 fs-5"><span class="fw-bold">Dr. Do&nbsp;</span>is dedicated to personalized care and believes that exceptional hair restoration outcomes begin with understanding your aspirations. He will take the time to assess your hair loss patterns, your desired results, and your medical history. By listening attentively,&nbsp;<span class="fw-bold">Dr. Do</span><span>&nbsp;aims to align his approach with your specific needs and goals.</span></p>
                </div>
            </div><!-- End: 1 -->
        </div>
    </section>
    <section class="d-flex d-xl-flex align-items-center align-items-xl-center" style="background: url(&quot;https://loidirieng.com/landing/asihairclinic.com/static/1612300320-home-bg2.jpg&quot;) center / cover no-repeat;min-height: 50vh;">
        <div class="container d-flex d-xl-flex justify-content-center justify-content-xl-center">
            <div class="col-12 col-xl-10 div-message-section">
                <div></div>
                <div>
                    <p class="py-2 fs-5">Whether you're interested in achieving dense, natural-looking results from traditional hair transplants or exploring advanced techniques like Platelet-Rich Plasma (PRP) Hair Restoration,&nbsp;<span class="fw-bold">Dr. Do</span><span>&nbsp;offers a comprehensive range of options tailored to your unique situation.</span></p>
                </div>
            </div>
        </div>
    </section>
    <section class="margin-section">
        <div class="container"><!-- Start: 3 -->
            <div class="margin-section padding-section overflow-hidden"><!-- Start: 1 -->
                <div class="row">
                    <div class="col-12 col-xl-6">
                        <div class="scale-image"><!-- Start:  id:1Z4VQ3dqcsCq9mvxDkHN3H-debug-component-ldr --><img class="1Z4VQ3dqcsCq9mvxDkHN3H-preview-css-ldr w-100 h-100" src="/static/eyebrow-transplant.png" alt="Hair Transplant"><!-- End:  id:1Z4VQ3dqcsCq9mvxDkHN3H-debug-component-ldr --></div>
                    </div>
                    <div class="col-12 col-xl-6">
                        <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start h-100 p-2 p-xl-5 bg-black my-5 my-xl-0">
                            <p class="fw-lighter text-white text-section-1 p-2">It's not uncommon for patients to come to a consultation with a preconceived notion of the procedure they believe they need. While research is encouraged, there are often nuances and complexities beyond what you can learn online. Dr. Do will carefully evaluate your anatomy, hair type, and scalp health to determine the most appropriate procedure to achieve your desired outcome.</p>
                            <p class="fw-lighter text-white text-section-1 p-2">Dr. Do emphasizes education and collaboration throughout the consultation process. He aims to dispel any misconceptions or unrealistic expectations by providing transparent information and answering any questions you may have. His goal is to ensure that you make an informed decision, fully understanding the potential benefits and limitations of each procedure.</p>
                            <p class="fw-lighter text-white text-section-1 p-2">By working closely with his patients, Dr.Do aims to align expectations, address concerns, and build a shared understanding of the best approach for achieving the desired hair restoration results. Only when he is confident that you are comfortable and well-informed will he proceed with the recommended procedure, providing ongoing support throughout the entire journey.</p>
                        </div>
                    </div>
                </div><!-- End: 1 -->
            </div><!-- End: 3 -->
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


         title= webConfig.value.ceoTitle;
            meta.push({ name: 'title', content:webConfig.value.ceoTitle });
            
            meta.push({ name: 'og:image', content:webConfig.value.mediaSeo });
            
            meta.push({ name: 'description', content:webConfig.value.ceoDescription });
            
            meta.push({ name: 'keywords', content:webConfig.value.seoKeywords });
            
            meta.push({ name: 'og:url', content:webConfig.value.domain });
            


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
        name: "patient-resources-hair-transplant-consultation-",

        

        data(){
            return {

                }
            },
                methods:{

                runAnimation(name,delay=0,loop=false,reverse=false){

                    
                }



            }

        }
</script>

//update in Thu Jun 27 2024 09:23:58 GMT+0700 (Indochina Time) by loidirieng
