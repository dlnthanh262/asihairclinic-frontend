<template>
<div>
    <section class="bg-black">
        <div class="container">
            <div class="d-flex d-xl-flex flex-column align-items-start align-items-xl-start chirld-position">
                <h1 class="fw-lighter text-white text-section-1 p-2">Hair Transplant</h1><!-- Start: div heading 2 -->
                <div class="d-flex d-xl-flex d-xxl-flex justify-content-xl-center justify-content-xxl-center align-items-xxl-center"><nuxt-link class="text-decoration-none" to="/">
                        <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">HOME</h5>
                    </nuxt-link>
                    <h4 class="fw-lighter text-white text-section-1 p-2">.</h4><nuxt-link class="7LmVTxc4D5HnkPyJ53WC5m-preview-css-ldr text-decoration-none" to="/gallery">
                        <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">GALLERY</h5>
                    </nuxt-link>
                </div><!-- End: div heading 2 -->
            </div>
        </div>
    </section>
    <section class="margin-section padding-section">
        <div class="container shadow py-3"><!-- Start: 1 -->
            <div class="d-xl-flex justify-content-xl-between align-items-xl-center">
                <div><select class="custom-input border">
                        <optgroup label="This is a group">
                            <option value="12" selected="">Hair Transplant</option>
                            <option value="13">This is item 2</option>
                            <option value="14">This is item 3</option>
                        </optgroup>
                    </select></div>
                <div class="d-flex justify-content-end mt-3 mt-xl-0"></div>
            </div><!-- End: 1 --><!-- Start: 2 -->
            <div>
                <div class="row g-0">
                    <div class="col-6 col-xl-4">
                        <splitpanes class="splitpanes default-theme slitpane-image" style="background: url(&quot;/static/2xxxxxx.jpg&quot;) top / cover no-repeat;" :vertical="false">
                            <pane class="splitpanes__pane overflow-hidden bg-secondary"><img class="overflow-hidden h-100 obj-cover" src="/static/2cccccccc.jpg" style="width: auto"></pane>
                            <pane class="splitpanes__pane overflow-hidden" style="background: rgba(242,242,242,0);"></pane>
                        </splitpanes>
                    </div>
                    <div class="col-6 col-xl-4 p-3 poiter btn-hover d-none" v-for="imageBeforeAfter in imageBeforeAfters" v-bind:key="imageBeforeAfter._id">
                        <div class="d-xl-flex align-items-xl-center h-100"><img class="w-50 h-100" :src="imageBeforeAfter.imageBefore"><img class="w-50 h-100" :src="imageBeforeAfter.imageAfter"></div>
                    </div>
                </div>
            </div><!-- End: 2 -->
        </div>
    </section>
    <section style="background: url(&quot;https://loidirieng.dev/landing/asihairclinic.com/static/bg4.jpg&quot;) center / cover no-repeat;min-height: 50vh;">
        <div class="d-xl-flex justify-content-xl-end text-white">
            <div class="col-xl-6 d-xxl-flex justify-content-xxl-center align-items-xxl-center p-2 p-xl-5" style="background: rgba(0,0,0,0.7);min-height: 50vh;">
                <div class="px-xl-5">
                    <h1 class="py-3 fw-lighter pe-5">Schedule a&nbsp;Consultation</h1>
                    <p class="py-3">If you are interested in our custom tailored, hand-harvested hair restoration procedures, your next step is a private consultation with Dr. Asaria. During this process, he will construct an honest plan to deliver maximum relief from hair loss.</p>
                    <div class="d-flex py-3">
                        <div class="py-3">
                            <p class="text-uppercase">in-office</p>
                            <div class="mt-3" style="width: 60px;height: 3px;background: #ffffff;"></div>
                        </div>
                        <div class="py-3 mx-3">
                            <p class="text-uppercase">virtual</p>
                            <div class="mt-3" style="width: 60px;height: 3px;background: #ffffff;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template><script setup>

    

    


    const $device = useDevice();
    const { isMobile,isDesktop } = useDevice();
    const route = useRoute();

  
  definePageMeta({
      layout: "default",

  });
  



    

    //   variables
    if(process.env.NODE_ENV==='development'){

    }



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
    


  let imageBeforeAfters= ref([]);
 

let variableimageBeforeAfters={};

const resultimageBeforeAfters = await useAsyncQuery( gql` query    
 imageBeforeAfters($query: imageBeforeAfterFindInput,$limit:Float,$skip:Float,$sort:JSONObject){
     imageBeforeAfters:  imageBeforeAfters(query:$query,limit:$limit,skip:$skip,sort:$sort)
     {
                _id createdAt updatedAt imageBefore imageAfter 
        }

}`,variableimageBeforeAfters);
if(resultimageBeforeAfters.data.value&&resultimageBeforeAfters.data.value.imageBeforeAfters){
imageBeforeAfters.value = resultimageBeforeAfters.data.value.imageBeforeAfters}

    
  

  





    

  
          useHead({
            title: '',
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
            charset: 'utf-8',
            meta: [
              
              { name: 'og:image:width', content: '600' },
              { name: 'og:image:height', content: '315' }
            ],
            script: [
                
            ],
            link:[
              { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css' },
              { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },

              { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' },
              { rel: 'stylesheet', href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' },
              { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css' },
               
            ]
          })
  


</script>


<!--false-->
<script>


  import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css';
              
  export default {
    name: "gallery-hair-transplant-",

            
            components: {
    Splitpanes, Pane,
},
            

  data(){
    return {

      }
  },
      methods:{
          runAnimation(name,delay=0,loop=false,reverse=false){

              
      },
          


  }

  }
</script>
