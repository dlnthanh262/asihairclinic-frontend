<template>
<div>
    <section class="bg-black">
        <div class="container">
            <div class="d-flex d-xl-flex flex-column align-items-start align-items-xl-start chirld-position">
                <h1 class="fw-lighter text-white p-2 text-uppercase text-title-mobile">VIDEOS</h1><!-- Start: div heading 2 -->
                <div class="d-flex d-xl-flex d-xxl-flex justify-content-xl-center justify-content-xxl-center align-items-xxl-center"><nuxt-link class="text-decoration-none" to="/">
                        <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">HOME</h5>
                    </nuxt-link>
                    <h4 class="fw-lighter text-white text-section-1 p-2">.</h4><nuxt-link class="text-decoration-none" to="/videos">
                        <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">VIDEOS</h5>
                    </nuxt-link>
                </div><!-- End: div heading 2 -->
            </div>
        </div>
    </section>
    <section class="margin-section padding-section">
        <div class="container shadow py-3"><!-- Start: search category -->
            <div class="pb-4"><!-- Start: item -->
                <div class="d-inline-flex unselect-category" :class="{' select-category':selectTags?.includes(tags.label)}" v-for="(tags,index) in tagss" v-bind:key="tags._id" @click="()=>{if(!selectTags.includes(tags?.label)){selectTags.push(tags?.label)}else{selectTags = selectTags.filter(item => item !== tags?.label)};setQuery('tag',selectTags);loadDatavideos()}"><span>#</span>
                    <p>{{tags.label}}</p>
                </div><!-- End: item -->
            </div><!-- End: search category --><!-- Start: 2 -->
            <div><!-- Start: no data -->
                <div class="d-flex justify-content-center align-items-center p-5" v-if="videoss.length<=0">
                    <div class="d-flex justify-content-center align-items-center"><i class="fa fa-spinner me-2"></i>
                        <p>No Data</p>
                    </div>
                </div><!-- End: no data -->
                <div class="row">
                    <div class="col-12 col-xl-4 px-2" style="height: 40vh;" v-for="(videos,index) in videoss" v-bind:key="videos._id"><iframe class="w-100 h-100" :src="videos.srcYoutubeHome"></iframe></div>
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
    
    


    let selectTags= ref([]);;









    //   variables
    if(process.env.NODE_ENV==='development'){

    }




    const setParam =  function(key,value){
        let objParams = {...route.params};
        let objQuery = {...route.query};
        if(value===undefined){
            delete objParams[key];
        }else{
            objParams[key] = value;
        }
        router.push({
            path: route.path,
            query:objQuery,
            params:objParams
        });
    };
    const setQuery =  function(key,value){
        let objQuery = {...route.query};
        let isChange= false;
        if(value===undefined){
            isChange =true;
            delete objQuery[key];
        }else if(!Array.isArray(value)||(value.length)||(objQuery[key]&& value.length!==objQuery[key].length)){
            isChange =true;
        }
        if(isChange){
            objQuery[key] = value;
            router.push({
                path: route.path,
                query:objQuery
            });
        }
    };
    const setQuerys =  function(items,params){
        let objQuery = {...route.query};
        let isChange= false;
        items.forEach((item)=>{
            const {key,value} =item;
            if(value===undefined){
                isChange =true;
                delete objQuery[key];
            }else if(!Array.isArray(value)||(value.length)||(objQuery[key]&& value.length!==objQuery[key].length)){
                isChange =true;
            }
            if(isChange){
                objQuery[key] = value;

            }
        })

        let objParam={};
        items.forEach((item)=>{
            const {key,value} =item;
            if(value===undefined){
                isChange =true;
                delete objParam[key];
            }else if(!Array.isArray(value)||(value.length)||(objParam[key]&& value.length!==objParam[key].length)){
                isChange =true;
            }
            if(isChange){
                objParam[key] = value;

            }
        })
        if(isChange){
            router.push({
                path: params?('/danh-muc/'+params):route.path,
                query:objQuery
            });
        }

    };
    





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

        

    
    const router = useRouter();
    


    
    const loadDatavideos = async function(){
         await new Promise((re)=>{setTimeout(()=>{re(true)},70)});

let variablevideoss={query :{}};

                                    if(selectTags.value&&selectTags.value.length){
                                    variablevideoss.query.tags = {in: selectTags.value  }
                                    
                                    }
                              

const resultvideosstemp = await useAsyncQuery( gql` query    
 videoss($query: videosFindInput,$limit:Float,$skip:Float,$sort:JSONObject){
     videoss:  videoss(query:$query,limit:$limit,skip:$skip,sort:$sort)
     {
                srcYoutubeHome _id 
        }

}`,variablevideoss);
if(resultvideosstemp.data&&resultvideosstemp.data.value.videoss){
videoss.value = resultvideosstemp.data.value.videoss};
;

    };

    





        //1 setup
        

        let videoss= ref([]);
let tagss= ref([]);
let webConfig= ref({});

        const slug=route.params['index'];

let variablevideoss={query :{}};

                                    if(selectTags.value&&selectTags.value.length){
                                    variablevideoss.query.tags = {in: selectTags.value  }
                                    
                                    }
                              

const resultvideoss = await useAsyncQuery(gql` query    
 videoss($query: videosFindInput,$limit:Float,$skip:Float,$sort:JSONObject){
     videoss:  videoss(query:$query,limit:$limit,skip:$skip,sort:$sort)
     {
                srcYoutubeHome _id 
        }

}`,variablevideoss);
if(resultvideoss.data.value&&resultvideoss.data.value.videoss){
videoss.value = resultvideoss.data.value.videoss}

let variabletagss={};

const resulttagss = await useAsyncQuery(gql` query    
 tagss($query: tagsFindInput,$limit:Float,$skip:Float,$sort:JSONObject){
     tagss:  tagss(query:$query,limit:$limit,skip:$skip,sort:$sort)
     {
                _id createdAt updatedAt label 
        }

}`,variabletagss);
if(resulttagss.data.value&&resulttagss.data.value.tagss){
tagss.value = resulttagss.data.value.tagss}

let variablewebConfig={};

const resultwebConfig = await useAsyncQuery(gql` query {  webConfig {
                ceoTitle ceoDescription seoKeywords mediaSeo domain 
        } }`,variablewebConfig);
if(resultwebConfig.data.value&&resultwebConfig.data.value.webConfig){
webConfig.value = {...resultwebConfig.data.value.webConfig}}








        //1 afterData
        


        


        

        



        
        const methods=()=>{
            
        }

        
         if(route.query['tag']){
                                    let value =  Array.isArray(route.query['tag'])?route.query['tag']:[route.query['tag']];
                                    if(value ){
                                    selectTags.value = value  ;
                                    }
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

                
                
                
                
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }, 
               
                    { rel: 'stylesheet', href: '' },
            ]
            
        })
    


</script>


<!--false-->
<script>


    
    export default {
        name: "videos-",

        

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

//update in Thu Jun 27 2024 09:31:14 GMT+0700 (Indochina Time) by loidirieng
