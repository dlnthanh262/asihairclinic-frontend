<template>
<div>
    <section class="position-relative overflow-hidden"><!-- Start: container position -->
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-start chirld-position">
                    <h1 class="fw-lighter text-white p-2 text-title-mobile">BLOGS</h1><!-- Start: div heading 2 -->
                    <div class="d-flex d-xxl-flex justify-content-start align-items-center justify-content-xxl-center align-items-xxl-center"><nuxt-link class="text-decoration-none" to="/">
                            <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">HOME</h5>
                        </nuxt-link>
                        <h4 class="fw-lighter text-white text-section-1 p-2">.</h4><nuxt-link class="text-decoration-none" to="/blogs">
                            <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">BLOGS</h5>
                        </nuxt-link>
                    </div><!-- End: div heading 2 -->
                </div>
            </div>
        </div><!-- End: container position -->
        <div class="row">
            <div class="col d-none d-xl-block">
                <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start py-5 h-100" style="background: #000000;">
                    <h1 class="fw-lighter" style="color: rgb(0,0,0);">VIRTUAL CONSULTATION</h1>
                    <h4 class="fw-lighter" style="color: rgb(0,0,0);">HOME . CONTACT . VIRTUAL CONSULTATION</h4>
                </div>
            </div>
            <div class="col">
                <div><img class="img-fluid obj-cover" src="/static/image/bg-blog.jpg" alt="Hair Transplant"></div>
            </div>
        </div>
    </section>
    <section class="margin-section">
        <div class="container"><!-- Start: search -->
            <div><!-- Start: 1 -->
                <div class="d-flex justify-content-between">
                    <h1 class="d-none d-xl-block fw-lighter">Latest blog posts 12312312</h1>
                    <div class="col-12 col-xl-6"><!-- Start: input search -->
                        <div class="d-flex justify-content-between align-items-center border"><input type="search" class="custom-input" placeholder="Search" v-model="keyWordSearch"><!-- Start: btn -->
                            <div class="btn-black btn-hover" @click="div978108ead4b76f6d30860d19980cfcce1ac0cb32click">
                                <p class="fw-lighter">FIND</p>
                            </div><!-- End: btn -->
                        </div><!-- End: input search -->
                    </div>
                </div><!-- End: 1 --><!-- Start: search category -->
                <div class="pt-4"><!-- Start: item -->
                    <div class="unselect-category" :class="{' select-category':categoryId==='All'}" @click="dive75789961aac81060dc7aaa57be0531c6b274939click">
                        <p>All</p>
                    </div><!-- End: item --><!-- Start: item -->
                    <div class="unselect-category" v-for="(categoryBlog,index) in categoryBlogs" v-bind:key="categoryBlog._id" :class="{' select-category':categoryId===categoryBlog._id}" @click="divac06773562ea07ce8a83845dd8a9349768bbbaa3click(categoryBlog,index)">
                        <p>{{categoryBlog.name}}</p>
                    </div><!-- End: item -->
                </div><!-- End: search category -->
            </div><!-- End: search -->
            <div style="min-height: 70vh;"><!-- Start: item blogs -->
                <div class="shadow-custom margin-section rounded max-h-50vh" v-for="(blogs,index) in blogss" v-bind:key="blogs._id">
                    <div class="row g-0">
                        <div class="col-12 col-xl-6">
                            <div class="h-100"><b-img class="w-100 obj-cover" style="max-height: 30vh;" :src="blogs.thumbnail" :alt="blogs.title" lazy></b-img></div>
                        </div>
                        <div class="col-12 col-xl-6">
                            <div class="h-100 px-2 px-xl-0"><!-- Start: item -->
                                <div class="d-xl-flex flex-column justify-content-xl-start align-items-xl-start px-xl-5 py-xl-3 mx-xl-5">
                                    <h3 class="fw-lighter my-2">{{blogs.title}}</h3>
                                    <div class="overflow-hidden">
                                        <p class="fw-lighter my-2 limit-lines">{{blogs.description}}</p>
                                    </div>
                                    <div class="w-100">
                                        <div class="row g-0">
                                            <div class="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start"><nuxt-link aria-label="Hair Transplant Patient Resources" :to="'/blogs/'+blogs.slug">
                                                    <div class="btn-black my-2 btn-hover">
                                                        <p class="fw-lighter">READ MORE</p>
                                                    </div>
                                                </nuxt-link></div>
                                            <div class="col-12 col-lg-6 d-flex justify-content-center align-items-sm-end justify-content-lg-end"><!-- Start: date -->
                                                <div class="py-3 py-lg-0">
                                                    <div><span style="color: rgb(152,152,152);">{{blogs.createdAt}}</span></div>
                                                </div><!-- End: date -->
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- End: item -->
                            </div>
                        </div>
                    </div>
                </div><!-- End: item blogs -->
            </div><!-- Start: pagination -->
            <div class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xl-end justify-content-xxl-end align-items-xxl-center"><b-pagination v-model="page" :total-rows="countBlogs" :per-page="6" @update:model-value="pagination663eacee074d3a8088057e4c707d8ca39211d56dupdatemodelvalue"></b-pagination></div><!-- End: pagination -->
        </div>
    </section>
</div>
</template><script setup>
    import { computed,watch } from 'vue';





    

            


    

    

    //replaceMome
    
    import {onMounted,} from 'vue';
    

    


    const $device = useDevice();
    const { isMobile,isDesktop } = useDevice();
    const route = useRoute();

    
    definePageMeta({
        layout: "default",

    });
    
    


    let page= ref(1);
    let categoryId= ref("All");
    let keyWordSearch= ref("");;









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



        //methods


    

// mutation

        

    
    const router = useRouter();
    


    
    const loadDatablogs = async function(){
         await new Promise((re)=>{setTimeout(()=>{re(true)},70)});

let variableblogss={limit: 6, skip :function(){
                      let pagequery =0;
                      try{
                       let pagePTem = parseInt(route.query.page);
                        if(pagePTem>0){
                        pagequery = (pagePTem -1)* 6;
                        }
                      }catch(e){
                      pagequery =0;
                      }
                      return pagequery
                      }(), query :{}};
 if(route.query['search']){
                                    let value =  route.query['search'];
                                    if(value ){
                                    variableblogss.query.searchText =  {search:  value };
                                     
                                    }
                              }
if( categoryId.value!=='All'){
                                    if(categoryId.value&&categoryId.value!==''){
                                    variableblogss.query.categoryBlog = {eq: categoryId.value  } 
                                    
                                    }
                              
} if(route.query['tag']){
                                    let value =  Array.isArray(route.query['tag'])?route.query['tag']:[route.query['tag']];
                                    if(value &&value.length){
                                    variableblogss.query.tags =  {in:  value };
                                     
                                    }
                              }

const resultblogsstemp = await useAsyncQuery( gql` query    
 blogss($query: blogsFindInput,$limit:Float,$skip:Float,$sort:JSONObject){
     blogss:  blogss(query:$query,limit:$limit,skip:$skip,sort:$sort)
     {
                _id createdAt updatedAt title thumbnail content description slug categoryBlog 
        }

}`,variableblogss);
if(resultblogsstemp.data&&resultblogsstemp.data.value.blogss){
blogss.value = resultblogsstemp.data.value.blogss};
;

    };

    
    const loadDatacountBlogs = async function(){
         await new Promise((re)=>{setTimeout(()=>{re(true)},70)});

let variablecountBlogs={limit: 6, skip :function(){
                      let pagequery =0;
                      try{
                       let pagePTem = parseInt(route.query.page);
                        if(pagePTem>0){
                        pagequery = (pagePTem -1)* 6;
                        }
                      }catch(e){
                      pagequery =0;
                      }
                      return pagequery
                      }(), query :{}};
 if(route.query['search']){
                                    let value =  route.query['search'];
                                    if(value ){
                                    variablecountBlogs.query.searchText =  {search:  value };
                                     
                                    }
                              }
if( categoryId.value!=='All'){
                                    if(categoryId.value&&categoryId.value!==''){
                                    variablecountBlogs.query.categoryBlog = {eq: categoryId.value  } 
                                    
                                    }
                              
} if(route.query['tag']){
                                    let value =  Array.isArray(route.query['tag'])?route.query['tag']:[route.query['tag']];
                                    if(value &&value.length){
                                    variablecountBlogs.query.tags =  {in:  value };
                                     
                                    }
                              }

const resultcountBlogstemp = await useAsyncQuery( gql` query    
 countBlogs($query: blogsCountInput){
     countBlogs:  countBlogs(query:$query)
  
}`,variablecountBlogs);
if(resultcountBlogstemp.data&&resultcountBlogstemp.data.value.countBlogs){
countBlogs.value = resultcountBlogstemp.data.value.countBlogs};
;

    };

    
    const loadDatacategoryBlogWithQuery = async function(){
         await new Promise((re)=>{setTimeout(()=>{re(true)},70)});

let variablecategoryBlogWithQuerys={limit: 1, query :{}};
if( route.query['category']!==undefined){ if(route.query['category']){
                                    let value =  route.query['category'];
                                    if(value ){
                                    variablecategoryBlogWithQuerys.query.name =  {regex:  value };
                                     
                                    }
                              }
}if( route.query['category']===undefined){variablecategoryBlogWithQuerys.query.name = {regex:"???????????????????"}
                              
}
const resultcategoryBlogWithQuerystemp = await useAsyncQuery( gql` query    
 categoryBlogs($query: categoryBlogFindInput,$limit:Float,$skip:Float,$sort:JSONObject){
     categoryBlogWithQuerys:  categoryBlogs(query:$query,limit:$limit,skip:$skip,sort:$sort)
     {
                createdAt name _id 
        }

}`,variablecategoryBlogWithQuerys);
if(resultcategoryBlogWithQuerystemp.data&&resultcategoryBlogWithQuerystemp.data.value.categoryBlogWithQuerys){
categoryBlogWithQuerys.value = resultcategoryBlogWithQuerystemp.data.value.categoryBlogWithQuerys};
;

    };

    const div978108ead4b76f6d30860d19980cfcce1ac0cb32click = async function(){
        setQuery('search',keyWordSearch.value);await loadDatablogs();await loadDatacountBlogs();
    };
    const dive75789961aac81060dc7aaa57be0531c6b274939click = async function(){
        setQuery('category',undefined);categoryId.value='All';await loadDatablogs();await loadDatacountBlogs();
    };
    const divac06773562ea07ce8a83845dd8a9349768bbbaa3click = async function(categoryBlog,index){
        setQuery('category',categoryBlog.name);categoryId.value=categoryBlog?._id;await loadDatablogs();await loadDatacountBlogs();
    };
    const pagination663eacee074d3a8088057e4c707d8ca39211d56dupdatemodelvalue = async function(){
        setQuery('page',page.value);await loadDatablogs();await loadDatacountBlogs();
    };
    





        //3 setup
        
        loadDatacategoryBlogWithQuery()
        

        let categoryBlogWithQuerys= ref([]);
let blogss= ref([]);
let countBlogs= ref(0);
let categoryBlogs= ref([]);
let webConfig= ref({});

        const slug=route.params['index'];

let variablecategoryBlogWithQuerys={limit: 1, query :{}};
if( route.query['category']!==undefined){ if(route.query['category']){
                                    let value =  route.query['category'];
                                    if(value ){
                                    variablecategoryBlogWithQuerys.query.name =  {regex:  value };
                                     
                                    }
                              }
}if( route.query['category']===undefined){variablecategoryBlogWithQuerys.query.name = {regex:"???????????????????"}
                              
}
const resultcategoryBlogWithQuerys = await useAsyncQuery(gql` query    
 categoryBlogs($query: categoryBlogFindInput,$limit:Float,$skip:Float,$sort:JSONObject){
     categoryBlogWithQuerys:  categoryBlogs(query:$query,limit:$limit,skip:$skip,sort:$sort)
     {
                createdAt name _id 
        }

}`,variablecategoryBlogWithQuerys);
if(resultcategoryBlogWithQuerys.data.value&&resultcategoryBlogWithQuerys.data.value.categoryBlogWithQuerys){
categoryBlogWithQuerys.value = resultcategoryBlogWithQuerys.data.value.categoryBlogWithQuerys}

let variableblogss={limit: 6, skip :function(){
                      let pagequery =0;
                      try{
                       let pagePTem = parseInt(route.query.page);
                        if(pagePTem>0){
                        pagequery = (pagePTem -1)* 6;
                        }
                      }catch(e){
                      pagequery =0;
                      }
                      return pagequery
                      }(), query :{}};
 if(route.query['search']){
                                    let value =  route.query['search'];
                                    if(value ){
                                    variableblogss.query.searchText =  {search:  value };
                                     
                                    }
                              }
if( categoryId.value!=='All'){
                                    if(categoryId.value&&categoryId.value!==''){
                                    variableblogss.query.categoryBlog = {eq: categoryId.value  } 
                                    
                                    }
                              
} if(route.query['tag']){
                                    let value =  Array.isArray(route.query['tag'])?route.query['tag']:[route.query['tag']];
                                    if(value &&value.length){
                                    variableblogss.query.tags =  {in:  value };
                                     
                                    }
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

let variablecountBlogs={limit: 6, skip :function(){
                      let pagequery =0;
                      try{
                       let pagePTem = parseInt(route.query.page);
                        if(pagePTem>0){
                        pagequery = (pagePTem -1)* 6;
                        }
                      }catch(e){
                      pagequery =0;
                      }
                      return pagequery
                      }(), query :{}};
 if(route.query['search']){
                                    let value =  route.query['search'];
                                    if(value ){
                                    variablecountBlogs.query.searchText =  {search:  value };
                                     
                                    }
                              }
if( categoryId.value!=='All'){
                                    if(categoryId.value&&categoryId.value!==''){
                                    variablecountBlogs.query.categoryBlog = {eq: categoryId.value  } 
                                    
                                    }
                              
} if(route.query['tag']){
                                    let value =  Array.isArray(route.query['tag'])?route.query['tag']:[route.query['tag']];
                                    if(value &&value.length){
                                    variablecountBlogs.query.tags =  {in:  value };
                                     
                                    }
                              }

const resultcountBlogs = await useAsyncQuery(gql` query    
 countBlogs($query: blogsCountInput){
     countBlogs:  countBlogs(query:$query)
  
}`,variablecountBlogs);
if(resultcountBlogs.data.value&&resultcountBlogs.data.value.countBlogs){
countBlogs.value = resultcountBlogs.data.value.countBlogs}

let variablecategoryBlogs={};

const resultcategoryBlogs = await useAsyncQuery(gql` query    
 categoryBlogs($query: categoryBlogFindInput,$limit:Float,$skip:Float,$sort:JSONObject){
     categoryBlogs:  categoryBlogs(query:$query,limit:$limit,skip:$skip,sort:$sort)
     {
                _id createdAt updatedAt name slug 
        }

}`,variablecategoryBlogs);
if(resultcategoryBlogs.data.value&&resultcategoryBlogs.data.value.categoryBlogs){
categoryBlogs.value = resultcategoryBlogs.data.value.categoryBlogs}

let variablewebConfig={};

const resultwebConfig = await useAsyncQuery(gql` query {  webConfig {
                ceoTitle ceoDescription seoKeywords mediaSeo domain 
        } }`,variablewebConfig);
if(resultwebConfig.data.value&&resultwebConfig.data.value.webConfig){
webConfig.value = {...resultwebConfig.data.value.webConfig}}








        //3 afterData
        


        


        

        

        

        



        
        const methods=()=>{
            
        }

        
         if(route.query['page']){
                                    let value =  parseInt(route.query['page']);
                                    if(value ){
                                    page.value = value  ;
                                    }
                              }

          onMounted(()=>{
console.log(categoryBlogWithQuerys.value[0]._id, categoryBlogWithQuerys.value[0].name)
            categoryId.value=categoryBlogWithQuerys.value[0]._id
        })





  // watch



    











    //meta
        

        const meta = [  {name: "theme-color" ,content:"#fff"}];
        let title = '';

    title =''


         title= 'Hair Transplant Blog';
            meta.push({ name: 'title', content:'Hair Transplant Blog' });
            
            meta.push({ name: 'og:image', content:webConfig?.value.mediaSeo });
            
            meta.push({ name: 'description', content:'Go through the official blog section of Aesthetic Hair Restoration and know about various details regarding hair restoration surgery.' });
            
            meta.push({ name: 'keywords', content:'Hair Transplant' });
            
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
        name: "blogs-",

        

        data(){
            return {

                }
            },
                methods:{




    }

        }
</script>

//update in Tue Sep 17 2024 10:26:27 GMT+0700 (Indochina Time) by loidirieng
 