<template>
<div>
    <section class="bg-black">
        <div class="container">
            <div class="d-flex d-xl-flex flex-column align-items-start align-items-xl-start chirld-position">
                <h1 class="fw-lighter text-white p-2 text-uppercase text-title-mobile">Hair Transplant</h1><!-- Start: div heading 2 -->
                <div class="d-flex d-xl-flex d-xxl-flex justify-content-xl-center justify-content-xxl-center align-items-xxl-center"><nuxt-link class="text-decoration-none" to="/">
                        <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">HOME</h5>
                    </nuxt-link>
                    <h4 class="fw-lighter text-white text-section-1 p-2">.</h4><nuxt-link class="text-decoration-none" to="/gallery">
                        <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">GALLERY</h5>
                    </nuxt-link>
                </div><!-- End: div heading 2 -->
            </div>
        </div>
    </section>
    <section class="margin-section padding-section" style="min-height: 60vh;">
        <div class="container shadow py-3" style="border-color: rgb(0,0,0);"><!-- Start: 1 -->
            <div class="d-xl-flex justify-content-xl-between align-items-xl-center">
                <div><b-form-select class="custom-input border mb-xl-3 pe-5" :options="categoryBeforeAfters" value-field="_id" text-field="name" v-model="idCategory" @update:model-value="()=>{loadDataimageBeforeAfter()}"></b-form-select></div>
                <div class="d-flex justify-content-end mt-3 mt-xl-0"></div>
            </div><!-- End: 1 --><!-- Start: 2 -->
            <div>
                <div class="row">
                    <div class="col-12 col-xl-4 btn-hover p-1" style="border-width: 2px;border-style: solid;" v-for="(imageBeforeAfter,index) in imageBeforeAfters" v-bind:key="imageBeforeAfter._id">
                        <splitpanes class="splitpanes default-theme slitpane-image set-width" :vertical="false" :style="{'background-image':'url(&quot;'+imageBeforeAfter.imageAfter+'&quot;)'}">
                            <pane class="splitpanes__pane overflow-hidden bg-secondary"><b-img class="overflow-hidden h-100" style="width: auto" :src="imageBeforeAfter.imageBefore" :alt="imageBeforeAfter.imageBefore" lazy></b-img></pane>
                            <pane class="splitpanes__pane overflow-hidden" style="background: rgba(242,242,242,0);"></pane>
                        </splitpanes>
                    </div>
                </div>
            </div><!-- End: 2 -->
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
    
    


    let idCategory= ref("");;









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

        

    


    
    const loadDataimageBeforeAfter = async function(){
         await new Promise((re)=>{setTimeout(()=>{re(true)},70)});

let variableimageBeforeAfters={query :{}};

                                    if(idCategory.value&&idCategory.value!==''){
                                    variableimageBeforeAfters.query.categoryBeforeAfter = {eq: idCategory.value  } 
                                    
                                    }
                              

const resultimageBeforeAfterstemp = await useAsyncQuery( gql` query    
 imageBeforeAfters($query: imageBeforeAfterFindInput,$limit:Float,$skip:Float,$sort:JSONObject){
     imageBeforeAfters:  imageBeforeAfters(query:$query,limit:$limit,skip:$skip,sort:$sort)
     {
                _id createdAt updatedAt imageBefore imageAfter 
        }

}`,variableimageBeforeAfters);
if(resultimageBeforeAfterstemp.data&&resultimageBeforeAfterstemp.data.value.imageBeforeAfters){
imageBeforeAfters.value = resultimageBeforeAfterstemp.data.value.imageBeforeAfters};
;

    };

    





        //0 setup
        

        let imageBeforeAfters= ref([]);
let categoryBeforeAfters= ref([]);
let webConfig= ref({});

        const slug=route.params['index'];

let variableimageBeforeAfters={query :{}};

                                    if(idCategory.value&&idCategory.value!==''){
                                    variableimageBeforeAfters.query.categoryBeforeAfter = {eq: idCategory.value  } 
                                    
                                    }
                              

const resultimageBeforeAfters = await useAsyncQuery(gql` query    
 imageBeforeAfters($query: imageBeforeAfterFindInput,$limit:Float,$skip:Float,$sort:JSONObject){
     imageBeforeAfters:  imageBeforeAfters(query:$query,limit:$limit,skip:$skip,sort:$sort)
     {
                _id createdAt updatedAt imageBefore imageAfter 
        }

}`,variableimageBeforeAfters);
if(resultimageBeforeAfters.data.value&&resultimageBeforeAfters.data.value.imageBeforeAfters){
imageBeforeAfters.value = resultimageBeforeAfters.data.value.imageBeforeAfters}

let variablecategoryBeforeAfters={};

const resultcategoryBeforeAfters = await useAsyncQuery(gql` query    
 categoryBeforeAfters($query: categoryBeforeAfterFindInput,$limit:Float,$skip:Float,$sort:JSONObject){
     categoryBeforeAfters:  categoryBeforeAfters(query:$query,limit:$limit,skip:$skip,sort:$sort)
     {
                _id createdAt updatedAt name slug 
        }

}`,variablecategoryBeforeAfters);
if(resultcategoryBeforeAfters.data.value&&resultcategoryBeforeAfters.data.value.categoryBeforeAfters){
categoryBeforeAfters.value = resultcategoryBeforeAfters.data.value.categoryBeforeAfters}

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


         title= 'Hair Restoration Gallery - Before After Hair Transplant';
            meta.push({ name: 'title', content:'Hair Restoration Gallery - Before After Hair Transplant' });
            
            meta.push({ name: 'og:image', content:webConfig?.value.mediaSeo });
            
            meta.push({ name: 'description', content:'Explore our Hair Restoration Gallery showcasing before and after results of hair transplant procedures. See real transformations and the natural-looking outcomes achieved by our expert surgeons…' });
            
            meta.push({ name: 'keywords', content:'Before After Hair Transplant' });
            
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


    import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css';
              
    export default {
        name: "gallery-",

        
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

//update in Mon Sep 16 2024 10:52:35 GMT+0700 (Indochina Time) by loidirieng
