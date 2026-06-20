<template>
    <section class="position-bg-section" :style="{'background-image':'url(&quot;'+webConfig.backroundFooter+'&quot;)'}">
        <div class="container">
            <div>
                <div class="row">
                    <div class="col-12 col-xl-6 d-xl-flex justify-content-xl-center align-items-xl-center">
                        <div class="margin-section">
                            <div class="py-3">
                                <div class="row">
                                    <div class="col-12 col-xl-6 my-2 my-xl-0"><input type="text" class="custom-input shadow-custom" placeholder="First Name*" v-model="tuVan.firstName"></div>
                                    <div class="col-12 col-xl-6 mt-2 mt-xl-0"><input type="text" class="custom-input shadow-custom" placeholder="Last Name*" v-model="tuVan.lastName"></div>
                                </div>
                            </div>
                            <div>
                                <div class="row">
                                    <div class="col-12 col-xl-6 mb-2 mb-xl-0"><input type="tel" class="custom-input shadow-custom" placeholder="Phone*" v-model="tuVan.phone"></div>
                                    <div class="col my-2 my-xl-0"><input type="email" class="custom-input shadow-custom" placeholder="Email*" v-model="tuVan.email"></div>
                                </div>
                            </div>
                            <div class="py-3">
                                <div class="row">
                                    <div class="col"><textarea class="custom-input shadow-custom" placeholder="Message" rows="5" v-model="tuVan.message"></textarea></div>
                                </div>
                            </div>
                            <div class="d-flex d-xl-flex justify-content-center justify-content-xl-center mb-4 mb-xl-0"><!-- Start: btn -->
                                <div class="text-white text-center d-inline-block py-3 px-4 poiter bg-black btn-hover shadow-custom" @click="()=>{let stepBreak=0;;if( (!stepBreak||stepBreak===1) ){tuVan.directConsultation=true};if( tuVan.firstName==='' || tuVan.lastName==='' || tuVan.phone==='' || tuVan.email===''&amp;&amp;(!stepBreak||stepBreak===2) ){toast?.show({props:{title:'An error occurred',body:'Please fill in all required fields before proceeding.',variant:'danger'}})};if( tuVan.firstName==='' || tuVan.lastName==='' || tuVan.phone==='' || tuVan.email==='' ){
 stepBreak=999};if( (!stepBreak||stepBreak===4) ){createTuvan()}}">
                                    <p>SEND</p>
                                </div><!-- End: btn -->
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-xl-6 order-first order-xl-last mt-4 mt-xl-0">
                        <div class="col-left">
                            <div class="py-2">
                                <h1 class="fw-lighter text-uppercase">Contact</h1><nuxt-link class="text-decoration-none text-white" to="/">
                                    <p class="fw-lighter">HOME&nbsp;</p>
                                </nuxt-link>
                            </div><!-- Start: phone -->
                            <div class="py-2">
                                <p class="fw-lighter">Phone:</p><nuxt-link class="text-decoration-none text-white" :to="'tel:'+webConfig.phoneNumber">
                                    <h4 class="fw-lighter">{{webConfig.phoneNumber}}</h4>
                                </nuxt-link>
                            </div><!-- End: phone --><!-- Start: email -->
                            <div class="py-2">
                                <p class="fw-lighter">Email:</p><nuxt-link class="text-decoration-none text-white" :to="'mailto:'+webConfig.email">
                                    <h4 class="fw-lighter">{{webConfig.email}}</h4>
                                </nuxt-link>
                            </div><!-- End: email -->
                            <div class="py-2">
                                <p class="fw-lighter">Address:</p><nuxt-link class="text-decoration-none text-white" :to="webConfig.linkGoogleMap">
                                    <h4 class="fw-lighter">{{webConfig.address}}</h4>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template><script setup>
    import { computed,watch } from 'vue';





    

            


    

    

    //replaceMome
    

    


    const $device = useDevice();
    const { isMobile,isDesktop } = useDevice();
    const route = useRoute();

    
    definePageMeta({
        layout: "default",

    });
    
    
    const toast = useToast();
    


    
let tuVan= ref({firstName: "",
    lastName: "",
    phone: "",
    email: "",
    procedureOfInterest: "",
    howDidYouHearAboutUs: "",
    message: "",
    directConsultation: false});










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

        const createTuvan = async( )=>{
            try {
                
                   let ValtuVan = JSON.parse(JSON.stringify(tuVan.value)) 
                
                
                
                
                  ValtuVan = clearTypeName(ValtuVan);
                const {data} =  await useFetch('https://asihairclinic.com/graphql',{

                    method: 'post',
                    body:{
                        query: `mutation 
 createConsultation($consultation: consultationCreateInput!){
        createConsultation(consultation:$consultation)
                {firstName lastName phone email procedureOfInterest howDidYouHearAboutUs message directConsultation _id }
        

}`,
                        variables: {consultation:ValtuVan }}
                });
                
                if(data.value.data.createConsultation){
                    toast?.show({props:{title:'Information sent successfully',body:'',variant:'success'}});tuVan.value.firstName='';tuVan.value.lastName='';tuVan.value.phone='';tuVan.value.email='';tuVan.value.message=''
                }
                        
                else{
                    toast?.show({props:{title:'Error sending information',body:'',variant:'danger'}})
                }
                


                {

                }
                if(data.value.data.createConsultation){
                    data.value.data.createConsultation.value = JSON.parse(JSON.stringify(tuVan.value))
                }

            } catch (e) {
                console.error(e)
            }

        }
        

    


    





        //0 setup
        

        let webConfig= ref({});

        
let variablewebConfig={};

const resultwebConfig = await useAsyncQuery(gql` query {  webConfig {
                address phoneNumber email linkGoogleMap backroundFooter ceoTitle ceoDescription seoKeywords mediaSeo domain 
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


         title= 'Contact Us - Aesthetic Hair Restoration';
            meta.push({ name: 'title', content:'Contact Us - Aesthetic Hair Restoration' });
            
            meta.push({ name: 'og:image', content:webConfig?.value.mediaSeo });
            
            meta.push({ name: 'description', content:'Get in touch with Aesthetic Hair Restoration for expert consultations and personalized hair transplant solutions. For any questions about our hair restoration treatments, please give us a call on 713 892 5477 or gmail expert@asihairclinic.com' });
            
            meta.push({ name: 'keywords', content:'Aesthetic Hair Restoration' });
            
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
        name: "contact-",

        

        data(){
            return {

                }
            },
                methods:{




    }

        }
</script>

//update in Mon Sep 16 2024 10:53:10 GMT+0700 (Indochina Time) by loidirieng
