<template>
<div>
    <section class="position-relative overflow-hidden"><!-- Start: container position -->
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column align-items-start align-items-xl-start chirld-position">
                    <h1 class="fw-lighter text-white p-2 text-title-mobile">VIRTUAL CONSULTATION</h1><!-- Start: div heading 2 -->
                    <div class="d-flex d-xl-flex d-xxl-flex justify-content-xl-center justify-content-xxl-center align-items-xxl-center"><nuxt-link class="text-decoration-none" to="/">
                            <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">HOME</h5>
                        </nuxt-link>
                        <h4 class="fw-lighter text-white text-section-1 p-2">.</h4><nuxt-link class="text-decoration-none" to="/contact/virtual-consultation/">
                            <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">VIRTUAL CONSULTATION</h5>
                        </nuxt-link>
                    </div><!-- End: div heading 2 -->
                </div>
            </div>
        </div><!-- End: container position -->
        <div class="row">
            <div class="col d-none d-xl-block">
                <div class="d-xl-flex flex-column justify-content-xl-center align-items-xl-start py-5 bg-black h-100 height-section-top">
                    <h1 class="fw-lighter" style="color: rgb(0,0,0);">VIRTUAL CONSULTATION</h1>
                    <h4 class="fw-lighter" style="color: rgb(0,0,0);">HOME . CONTACT . VIRTUAL CONSULTATION</h4>
                </div>
            </div>
            <div class="col">
                <div class="height-section-top"><img class="w-100 h-100 obj-cover" src="/static/hairtransplant.jpg" alt="Hair Transplant"></div>
            </div>
        </div>
    </section>
    <section class="margin-section">
        <div class="container">
            <div class="py-3"><!-- Start: Your information -->
                <div class="margin-section border px-xl-3 py-xl-4"><!-- Start: title position -->
                    <div class="d-inline-block bg-white position-absolute p-2" style="margin-top: -46px;">
                        <p class="fw-bold">Your Information</p>
                    </div><!-- End: title position --><!-- Start: row input -->
                    <div class="py-3">
                        <div class="row g-0">
                            <div class="col-12 col-xl-6 px-3 py-2"><input type="text" class="custom-input rounded border" placeholder="First Name*" v-model="consultation.firstName"></div>
                            <div class="col-12 col-xl-6 px-3 py-2"><input type="text" class="custom-input rounded border" placeholder="Last Name*" v-model="consultation.lastName"></div>
                            <div class="col-12 col-xl-6 px-3 py-2"><input type="phone" class="custom-input rounded border" placeholder="Phone*" v-model="consultation.phone"></div>
                            <div class="col-12 col-xl-6 px-3 py-2"><input type="email" class="custom-input rounded border" placeholder="Email*" v-model="consultation.email"></div>
                            <div class="col-12 col-xl-6 px-3 py-2"><input type="text" class="custom-input rounded border" placeholder="Procedure of Interest" v-model="consultation.procedureOfInterest"></div>
                            <div class="col-12 col-xl-6 px-3 py-2"><input type="text" class="custom-input rounded border" placeholder="How did you hear about us?" v-model="consultation.howDidYouHearAboutUs"></div>
                            <div class="col-12 px-3 py-2"><textarea class="custom-input rounded border" placeholder="Message" rows="5" v-model="consultation.message"></textarea></div>
                        </div>
                    </div><!-- End: row input -->
                </div><!-- End: Your information --><!-- Start: select file d-none -->
                <div class="margin-section border px-3 py-4 d-none"><!-- Start: title position -->
                    <div class="d-inline-block bg-white position-absolute p-2" style="margin-top: -46px;">
                        <p class="fw-bold">Attach Files (Optional)</p>
                    </div><!-- End: title position --><input type="file">
                </div><!-- End: select file d-none --><!-- Start: btn -->
                <div class="d-flex d-xl-flex justify-content-center justify-content-xl-center"><b-overlay :show="isloading"><!-- Start: btn id:d7EiSLGDw5YFgDLVJNgkkv-debug-component-ldr -->
                        <div class="undefined d7EiSLGDw5YFgDLVJNgkkv-preview-css-ldr btn-black" @click="divc771df98414098ec7e4e09654ebe083bb4cd804dclick">
                            <p>SEND</p>
                        </div><!-- End: btn id:d7EiSLGDw5YFgDLVJNgkkv-debug-component-ldr -->
                    </b-overlay></div><!-- End: btn -->
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
    
    
    const toast = useToast();
    


    let isloading= ref(false);;
let consultation= ref({firstName: "",
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

// mutation

        const createConsultation = async( )=>{
            try {
                
                   let Valconsultation = JSON.parse(JSON.stringify(consultation.value)) 
                
                
                
                
                  Valconsultation = clearTypeName(Valconsultation);
                const {data} =  await useFetch('https://asihairclinic.com/graphql',{

                    method: 'post',
                    body:{
                        query: `mutation 
 createConsultation($consultation: consultationCreateInput!){
        createConsultation(consultation:$consultation)
                {firstName lastName phone email procedureOfInterest howDidYouHearAboutUs message directConsultation _id }
        

}`,
                        variables: {consultation:Valconsultation }}
                });
                
                if(data.value.data.createConsultation){
                    toast?.show({props:{title:'Success',body:'Send information success',variant:'success'}});consultation.value.firstName='';consultation.value.lastName='';consultation.value.phone='';consultation.value.email='';consultation.value.procedureOfInterest='';consultation.value.howDidYouHearAboutUs='';consultation.value.message=''
                }
                        
                else{
                    toast?.show({props:{title:'Error :(',body:'',variant:'danger'}})
                }
                


                {

                }
                if(data.value.data.createConsultation){
                    data.value.data.createConsultation.value = JSON.parse(JSON.stringify(consultation.value))
                }

            } catch (e) {
                console.error(e)
            }

        }
        

    


    const divc771df98414098ec7e4e09654ebe083bb4cd804dclick = async function(){
        let stepBreak=0;;if( (!stepBreak||stepBreak===1) ){isloading.value=true};if( consultation.value.firstName==='' || consultation.value.lastName==='' || consultation.value.phone==='' || consultation.value.email===''&&(!stepBreak||stepBreak===2) ){toast?.show({props:{title:'An error occurred',body:'Please fill in all required fields before proceeding.',variant:'danger'}})};if( (!stepBreak||stepBreak===3) ){  await new Promise((re)=>{
                    setTimeout(()=>{re(true);},1000);
                });};if( (!stepBreak||stepBreak===4) ){isloading.value=false};if( consultation.value.firstName==='' || consultation.value.lastName==='' || consultation.value.phone==='' || consultation.value.email==='' ){
 stepBreak=999};if( (!stepBreak||stepBreak===6) ){await createConsultation()};
    };
    





        //0 setup
        

        let webConfig= ref({});

        
let variablewebConfig={};

const resultwebConfig = await useAsyncQuery(gql` query {  webConfig {
                ceoTitle ceoDescription seoKeywords mediaSeo domain 
        } }`,variablewebConfig);
if(resultwebConfig.data.value&&resultwebConfig.data.value.webConfig){
webConfig.value = {...resultwebConfig.data.value.webConfig}}








        //0 afterData
        


        


        



        
        const uploadfront=()=>{
            var filesSelected = document.getElementById("imgFront").files;
if (filesSelected.length > 0) {
  var fileToLoad = filesSelected[0];
  var fileReader = new FileReader();
  fileReader.onload = function(fileLoadedEvent) {
    var srcData = fileLoadedEvent.target.result; // <--- data: base64
    hairLossHistory.value.frontPhoto = srcData
    document.getElementById("imgFrontView").src = srcData;
  }
  fileReader.readAsDataURL(fileToLoad);
}
        }
        const uploadtop=()=>{
            var filesSelected = document.getElementById("imgTop").files;
if (filesSelected.length > 0) {
  var fileToLoad = filesSelected[0];
  var fileReader = new FileReader();
  fileReader.onload = function(fileLoadedEvent) {
    var srcData = fileLoadedEvent.target.result; // <--- data: base64
    hairLossHistory.value.topPhoto = srcData
    document.getElementById("imgTopView").src = srcData;
  }
  fileReader.readAsDataURL(fileToLoad);
}
        }
        const uploadleft=()=>{
            var filesSelected = document.getElementById("imgLeft").files;
if (filesSelected.length > 0) {
  var fileToLoad = filesSelected[0];
  var fileReader = new FileReader();
  fileReader.onload = function(fileLoadedEvent) {
    var srcData = fileLoadedEvent.target.result; // <--- data: base64
    hairLossHistory.value.leftPhoto = srcData
    document.getElementById("imgLeftView").src = srcData;
  }
  fileReader.readAsDataURL(fileToLoad);
}

        }
        const uploadright=()=>{
            var filesSelected = document.getElementById("imgRight").files;
if (filesSelected.length > 0) {
  var fileToLoad = filesSelected[0];
  var fileReader = new FileReader();
  fileReader.onload = function(fileLoadedEvent) {
    var srcData = fileLoadedEvent.target.result; // <--- data: base64
    hairLossHistory.value.rightPhoto = srcData
    document.getElementById("imgRightView").src = srcData;
  }
  fileReader.readAsDataURL(fileToLoad);
}
        }
        const uploadback=()=>{
            var filesSelected = document.getElementById("imgBack").files;
if (filesSelected.length > 0) {
  var fileToLoad = filesSelected[0];
  var fileReader = new FileReader();
  fileReader.onload = function(fileLoadedEvent) {
    var srcData = fileLoadedEvent.target.result; // <--- data: base64
    hairLossHistory.value.backPhoto = srcData
    document.getElementById("imgBackView").src = srcData;
  }
  fileReader.readAsDataURL(fileToLoad);
}
        }
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
        name: "contact-virtual-consultation-",

        

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

//update in Thu Jul 04 2024 10:38:31 GMT+0700 (Indochina Time) by loidirieng
