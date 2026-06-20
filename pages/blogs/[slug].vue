<template>
    <section>
        <div class="container">
            <div class="row g-0 overflow-hidden">
                <div class="col-12 col-xl-9"><!-- Start: content -->
                    <div class="py-3 px -2 py-xl-5 px-xl-4 shadow-custom"><!-- Start: tags -->
                        <div class="d-flex flex-wrap"><!-- Start: item -->
                            <div class="unselect-category" v-for="(tags,index) in (blogsBySlug.tags)" v-bind:key="index"><nuxt-link class="text-dark text-decoration-none" :to="'/blogs?tag='+tags"><span>#&nbsp;</span><span>{{tags}}</span></nuxt-link></div><!-- End: item -->
                        </div><!-- End: tags --><!-- Start: date -->
                        <div class="py-2"><span style="color: rgb(152,152,152);">{{blogsBySlug.createdAt}}</span></div><!-- End: date --><!-- Start: title -->
                        <div>
                            <h1 class="fw-lighter">{{blogsBySlug.title}}</h1>
                        </div><!-- End: title -->
                        <div class="has-content-html"><span v-html="blogsBySlug.content"></span></div>
                    </div><!-- End: content -->
                    <hr>
                </div>
                <div class="col-12 col-xl-3">
                    <div class="py-3 py-xl-5 px-3">
                        <p class="fw-bold pb-3">LATEST POSTS</p><!-- Start: item -->
                        <div v-for="(blogs,index) in (blogss||[]).filter((itss,itx) => itx<8)" v-bind:key="blogs._id"><nuxt-link class="text-decoration-none text-dark" :to="'/blogs/'+blogs.slug">
                                <div>
                                    <div class="row g-0">
                                        <div class="col-5">
                                            <div class="h-100"><b-img class="w-100 h-100 obj-cover" :src="blogs.thumbnail" :alt="blogs.title" lazy></b-img></div>
                                        </div>
                                        <div class="col-7">
                                            <p class="ps-2">{{blogs.title}}</p>
                                        </div>
                                    </div>
                                </div>
                            </nuxt-link>
                            <hr>
                        </div><!-- End: item -->
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
        

        let blogsBySlug= ref({});
let blogss= ref([]);
let webConfig= ref({});

        const slug=route.params['slug'];

let variableblogsBySlug={};

variableblogsBySlug.slug=slug;
 const resultblogsBySlug = await useAsyncQuery(gql` query    
  blogsBySlug($slug: String!){
     blogsBySlug:  blogsBySlug(slug:$slug)
     {
                _id createdAt updatedAt title thumbnail content description slug categoryBlog tags 
        }

}`,variableblogsBySlug);
if(resultblogsBySlug.data.value&&resultblogsBySlug.data.value.blogsBySlug){
blogsBySlug.value = {...resultblogsBySlug.data.value.blogsBySlug}}

let variableblogss={query :{}};

                                    if(blogsBySlug.value._id&&blogsBySlug.value._id!==''){
                                    variableblogss.query._id = {nin: blogsBySlug.value._id } //huyêweer
                                    
                                    }
                              

const resultblogss = await useAsyncQuery(gql` query    
 blogss($query: blogsFindInput,$limit:Float,$skip:Float,$sort:JSONObject){
     blogss:  blogss(query:$query,limit:$limit,skip:$skip,sort:$sort)
     {
                _id createdAt updatedAt title thumbnail content description slug categoryBlog 
        }

}`,variableblogss);
if(resultblogss.data.value&&resultblogss.data.value.blogss){
blogss.value = resultblogss.data.value.blogss}

let variablewebConfig={};

const resultwebConfig = await useAsyncQuery(gql` query {  webConfig {
                domain 
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

    title =blogsBySlug.value.title


         title= blogsBySlug.value.title;
            meta.push({ name: 'title', content:blogsBySlug.value.title });
            
            meta.push({ name: 'og:image', content:blogsBySlug.value.thumbnail });
            
            meta.push({ name: 'description', content:blogsBySlug.value.description });
            
            meta.push({ name: 'keywords', content:blogsBySlug.value.tags });
            
            meta.push({ name: 'og:url', content:webConfig.value.domain+'blogs/'+blogsBySlug.value.slug });
            


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
        name: "blogs-slug",

        

        data(){
            return {

                }
            },
                methods:{

                runAnimation(id,delay=0,loop=false,reverse=false){

                    
                }



            }

        }
</script>

//update in Mon Aug 26 2024 10:07:57 GMT+0700 (Indochina Time) by loidirieng
