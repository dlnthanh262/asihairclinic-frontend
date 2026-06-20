<template>
<div>
    <section class="position-relative overflow-hidden"><!-- Start: container position -->
        <div class="d-xl-flex d-xxl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center align-items-xxl-center container-position">
            <div class="container">
                <div class="d-flex d-xl-flex flex-column align-items-start align-items-xl-start chirld-position">
                    <h1 class="fw-lighter text-white p-2 text-title-mobile">HAIR LOSS HISTORY</h1><!-- Start: div heading 2 -->
                    <div class="d-flex d-xl-flex d-xxl-flex justify-content-xl-center justify-content-xxl-center align-items-xxl-center"><nuxt-link class="text-decoration-none" to="/">
                            <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">HOME</h5>
                        </nuxt-link>
                        <h4 class="fw-lighter text-white text-section-1 p-2">.</h4><nuxt-link class="text-decoration-none" to="/hair-loss-history/">
                            <h5 class="fw-lighter text-white text-section-1 p-2 text-uppercase">HAIR LOSS HISTORY</h5>
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
                <div class="height-section-top"><img class="w-100 h-100 obj-cover" src="/static/main33335.png" alt="Hair Transplant"></div>
            </div>
        </div>
    </section>
    <section class="margin-section">
        <div class="container">
            <div class="shadow-custom py-3"><!-- Start: Your information -->
                <div class="margin-section border px-xl-3 py-xl-4"><!-- Start: title position -->
                    <div class="d-inline-block bg-white position-absolute p-2" style="margin-top: -46px;">
                        <p class="fw-bold">Your Information</p>
                    </div><!-- End: title position --><!-- Start: row input -->
                    <div class="py-3">
                        <div class="row g-0">
                            <div class="col-12 col-xl-6 px-2 py-2"><input type="text" class="custom-input rounded border" placeholder="First Name*" v-model="hairLossHistory.firstName"></div>
                            <div class="col-12 col-xl-6 px-2 py-2"><input type="text" class="custom-input rounded border" placeholder="Last Name*" v-model="hairLossHistory.lastName"></div>
                            <div class="col-12 col-xl-6 px-2 py-2"><input type="phone" class="custom-input rounded border" placeholder="Phone*" v-model="hairLossHistory.phone"></div>
                            <div class="col-12 col-xl-6 px-2 py-2"><input type="email" class="custom-input rounded border" placeholder="Email*" v-model="hairLossHistory.email"></div>
                            <div class="col-12 col-xl-6 px-2 py-2"><b-form-input class="custom-input rounded border" type="date" v-model="hairLossHistory.date"></b-form-input></div>
                            <div class="col-12 col-xl-6 px-2 py-2"><input type="text" class="custom-input rounded border" placeholder="Occupation*" v-model="hairLossHistory.occupation"></div>
                            <div class="col-12 col-xl-6 px-2 py-2"><input type="text" class="custom-input rounded border" placeholder="Stress Address*" v-model="hairLossHistory.stressAddress"></div>
                            <div class="col-12 col-xl-6 px-2 py-2"><input type="text" class="custom-input rounded border" placeholder="City*" v-model="hairLossHistory.city"></div>
                            <div class="col-12 col-xl-6 px-2 py-2"><input type="text" class="custom-input rounded border" placeholder="Postal Code" v-model="hairLossHistory.postalCode"></div>
                            <div class="col-12 col-xl-6 px-2 py-2"><input type="text" class="custom-input rounded border" placeholder="Country*" v-model="hairLossHistory.country"></div>
                        </div>
                    </div><!-- End: row input -->
                </div><!-- End: Your information --><!-- Start: Hair/Health Profile -->
                <div class="margin-section border px-3 py-4"><!-- Start: title position -->
                    <div class="d-inline-block bg-white position-absolute p-2" style="margin-top: -46px;">
                        <p class="fw-bold">Hair/Health Profile</p>
                    </div><!-- End: title position --><!-- Start: row input -->
                    <div class="py-3">
                        <div class="col"><input type="text" class="custom-input rounded border" placeholder="What age did you first notice hair loss?" v-model="hairLossHistory.whatAgeDidYouFirstNoticeHairLoss"></div>
                    </div><!-- End: row input --><!-- Start: row input -->
                    <div class="py-3">
                        <div class="col"><input type="text" class="custom-input rounded border" placeholder="Are you currently, or have you ever taken Propecia?" v-model="hairLossHistory.areYouCurrentlyOrHaveYouEverTakenPropecia"></div>
                    </div><!-- End: row input --><!-- Start: row input -->
                    <div class="py-3">
                        <div class="col"><input type="text" class="custom-input rounded border" placeholder="Are you currently, or  have you ever taken rogaine?" v-model="hairLossHistory.areYouCurrentlyOrHaveYouEverTakenRogaine"></div>
                    </div><!-- End: row input --><!-- Start: row input -->
                    <div class="py-3">
                        <div class="col"><input type="text" class="custom-input rounded border" placeholder="Have you ever tried Platelet Rich Plasma (PRP) treatments?" v-model="hairLossHistory.haveYouEverTriedPlateletRichPlasmaPrpTre"></div>
                    </div><!-- End: row input --><!-- Start: row input -->
                    <div class="py-3">
                        <div class="col"><input type="text" class="custom-input rounded border" placeholder="Do you have any pre-existing medical conditions?" v-model="hairLossHistory.doYouHaveAnyPreexistingMedicalConditions"></div>
                    </div><!-- End: row input --><!-- Start: row input -->
                    <div class="py-3">
                        <div class="col"><input type="text" class="custom-input rounded border" placeholder="Do you smoke?" v-model="hairLossHistory.doYouSmoke"></div>
                    </div><!-- End: row input --><!-- Start: row input -->
                    <div class="py-3">
                        <div class="col"><input type="text" class="custom-input rounded border" placeholder="Have you had a previous hair transplant?" v-model="hairLossHistory.haveYouHadAPreviousHairTransplant"></div>
                    </div><!-- End: row input --><!-- Start: row input -->
                    <div class="py-3">
                        <div class="col"><textarea class="custom-input rounded border" rows="4" placeholder="Describe the hair loss on your mother's side of the family" v-model="hairLossHistory.describeTheHairLossOnYourMothers"></textarea></div>
                    </div><!-- End: row input --><!-- Start: row input -->
                    <div class="py-3">
                        <div class="col"><textarea class="custom-input rounded border" rows="4" placeholder="Describe the hair loss on your father's side of the family" v-model="hairLossHistory.describeTheHairLossOnYourFathers"></textarea></div>
                    </div><!-- End: row input --><!-- Start: row input -->
                    <div class="py-3">
                        <div class="col"><textarea class="custom-input rounded border" rows="4" placeholder="Describe the hair loss of your sibling(s)" v-model="hairLossHistory.describeTheHairLossOfYourSibling"></textarea></div>
                    </div><!-- End: row input -->
                </div><!-- End: Hair/Health Profile --><!-- Start: Your Hair Transplant -->
                <div class="margin-section border px-3 py-4"><!-- Start: title position -->
                    <div class="d-inline-block bg-white position-absolute p-2" style="margin-top: -46px;">
                        <p class="fw-bold">Your Hair Transplant</p>
                    </div><!-- End: title position --><!-- Start: 1 -->
                    <div class="py-3">
                        <p class="fw-bold">What are your overall goals and objectives with your hair restoration procedures?</p>
                        <div class="d-xl-flex justify-content-xl-start mt-3">
                            <div class="form-check mx-2"><input class="form-check-input" type="checkbox" id="formCheck-1" value="FUE" v-model="hairLossHistory.objectivesWithYourHairRestorationProcedures"><label class="form-check-label" for="formCheck-1">FUE</label></div>
                            <div class="form-check mx-2"><input class="form-check-input" type="checkbox" id="formCheck-5" value="FUT" v-model="hairLossHistory.objectivesWithYourHairRestorationProcedures"><label class="form-check-label" for="formCheck-5">FUT</label></div>
                            <div class="form-check mx-2"><input class="form-check-input" type="checkbox" id="formCheck-4" value="Eyebrow Restoration" v-model="hairLossHistory.objectivesWithYourHairRestorationProcedures"><label class="form-check-label" for="formCheck-4">Eyebrow Restoration</label></div>
                            <div class="form-check mx-2"><input class="form-check-input" type="checkbox" id="formCheck-3" value="PRP treatment" v-model="hairLossHistory.objectivesWithYourHairRestorationProcedures"><label class="form-check-label" for="formCheck-3">PRP treatment</label></div>
                            <div class="form-check mx-2"><input class="form-check-input" type="checkbox" id="formCheck-2" value="Facial Hair Restoration" v-model="hairLossHistory.objectivesWithYourHairRestorationProcedures"><label class="form-check-label" for="formCheck-2">Facial Hair Restoration</label></div>
                            <div class="form-check mx-2"><input class="form-check-input" type="checkbox" id="formCheck-6" value="Unsure" v-model="hairLossHistory.objectivesWithYourHairRestorationProcedures"><label class="form-check-label" for="formCheck-6">Unsure</label></div>
                        </div>
                    </div><!-- End: 1 --><!-- Start: 2 -->
                    <div>
                        <p class="fw-bold my-3">Select the zones on your scalp you want to have treated</p>
                        <p class="my-3">(Proceed to next question if you are not seeking scalp hair restoration)</p>
                        <div class="row my-3">
                            <div class="col"><img class="img-fluid" src="/static/image/3.jpg" alt="Hair Transplant"></div>
                            <div class="col">
                                <div class="d-xl-flex flex-wrap justify-content-xl-start mt-3">
                                    <div class="form-check mx-2"><input class="form-check-input" type="checkbox" id="formCheck-7" value="Front" v-model="hairLossHistory.yourScalpYouWantToHaveTreated"><label class="form-check-label" for="formCheck-7">Front</label></div>
                                    <div class="form-check mx-2"><input class="form-check-input" type="checkbox" id="formCheck-8" value="Top" v-model="hairLossHistory.yourScalpYouWantToHaveTreated"><label class="form-check-label" for="formCheck-8">Top</label></div>
                                    <div class="form-check mx-2"><input class="form-check-input" type="checkbox" id="formCheck-9" value="Small Crown" v-model="hairLossHistory.yourScalpYouWantToHaveTreated"><label class="form-check-label" for="formCheck-9">Small Crown</label></div>
                                    <div class="form-check mx-2"><input class="form-check-input" type="checkbox" id="formCheck-10" value="Expanded Crown" v-model="hairLossHistory.yourScalpYouWantToHaveTreated"><label class="form-check-label" for="formCheck-10">Expanded Crown</label></div>
                                </div>
                            </div>
                        </div>
                    </div><!-- End: 2 --><!-- Start: 3 -->
                    <div class="margin-section"><!-- Start: item -->
                        <div class="my-2">
                            <p class="fw-bold mb-2">Have you consulted with another hair transplant doctor?</p>
                            <div class="d-flex py-2">
                                <div class="form-check"><input type="radio" id="formCheck-13" name="name1111" value="Yes" v-model="hairLossHistory.youConsultedWithAnotherHairTransplantDoctor"><label class="form-check-label ms-1" for="formCheck-13">Yes</label></div>
                                <div class="form-check"><input type="radio" id="formCheck-11" name="name1111" value="No" v-model="hairLossHistory.youConsultedWithAnotherHairTransplantDoctor"><label class="form-check-label ms-1" for="formCheck-11">No</label></div>
                            </div>
                        </div><!-- End: item --><!-- Start: item -->
                        <div class="my-2">
                            <p class="fw-bold mb-2">When are you thinking of scheduling your hair restoration procedure?</p>
                            <div class="d-flex py-2">
                                <div class="form-check"><input type="radio" id="formCheck-12" name="name" value="Less than 1 month" v-model="hairLossHistory.schedulingYourHairRestorationProcedure"><label class="form-check-label ms-1" for="formCheck-12">Less than 1 month</label></div>
                                <div class="form-check"><input type="radio" id="formCheck-17" name="name" value="1-3 Months" v-model="hairLossHistory.schedulingYourHairRestorationProcedure"><label class="form-check-label ms-1" for="formCheck-17">1-3 Months</label></div>
                                <div class="form-check"><input type="radio" id="formCheck-16" name="name" value="3-6 Months" v-model="hairLossHistory.schedulingYourHairRestorationProcedure"><label class="form-check-label ms-1" for="formCheck-16">3-6 Months</label></div>
                                <div class="form-check"><input type="radio" id="formCheck-15" name="name" value="6-12 Months" v-model="hairLossHistory.schedulingYourHairRestorationProcedure"><label class="form-check-label ms-1" for="formCheck-15">6-12 Months</label></div>
                                <div class="form-check"><input type="radio" id="formCheck-14" name="name" value="Not Sure" v-model="hairLossHistory.schedulingYourHairRestorationProcedure"><label class="form-check-label ms-1" for="formCheck-14">Not Sure</label></div>
                            </div>
                        </div><!-- End: item --><!-- Start: item -->
                        <div class="my-2">
                            <div class="row">
                                <div class="col-12 col-xl-6"><textarea class="custom-input rounded border" rows="6" placeholder="How did you hear about us?" v-model="hairLossHistory.howDidYouHearAboutUs"></textarea></div>
                                <div class="col-12 col-xl-6"><textarea class="custom-input rounded border" rows="6" placeholder="Any other comments" v-model="hairLossHistory.anyOtherComments"></textarea></div>
                            </div>
                        </div><!-- End: item -->
                    </div><!-- End: 3 -->
                </div><!-- End: Your Hair Transplant --><!-- Start: Upload Your Photos -->
                <div class="margin-section border px-3 py-4"><!-- Start: title position -->
                    <div class="d-inline-block bg-white position-absolute p-2" style="margin-top: -46px;">
                        <p class="fw-bold">Upload Your Photos</p>
                    </div><!-- End: title position --><!-- Start: 1 -->
                    <div class="margin-section my-3">
                        <div class="row">
                            <div class="col-6 col-xl-3">
                                <div>
                                    <div class="p-3"><img id="imgFrontView" class="my-2 w-100 obj-cover" src="/static/image/front.jpg" style="height: 400px;" alt="Hair Transplant"></div>
                                    <p class="my-2 fw-bold">Front Photo</p><input type="file" id="imgFront" class="custom-input rounded border my-2" @change="()=>{uploadfront()}">
                                </div>
                            </div>
                            <div class="col-6 col-xl-3">
                                <div>
                                    <div class="p-3"><img id="imgTopView" class="w-100 obj-cover my-2" src="/static/image/top.jpg" style="height: 400px;" alt="Hair Transplant"></div>
                                    <p class="my-2 fw-bold">Top Photo</p><input type="file" id="imgTop" class="custom-input rounded border my-2" @change="()=>{uploadtop()}">
                                </div>
                            </div>
                            <div class="col-6 col-xl-3">
                                <div>
                                    <div class="p-3"><img id="imgLeftView" class="w-100 obj-cover my-2" src="/static/image/left.jpg" style="height: 400px;" alt="Hair Transplant"></div>
                                    <p class="my-2 fw-bold">Left Photo</p><input type="file" id="imgLeft" class="custom-input rounded border my-2" @change="()=>{uploadleft()}">
                                </div>
                            </div>
                            <div class="col-6 col-xl-3">
                                <div>
                                    <div class="p-3"><img id="imgRightView" class="w-100 obj-cover my-2" src="/static/image/right.jpg" style="height: 400px;" alt="Hair Transplant"></div>
                                    <p class="my-2 fw-bold">Right Photo</p><input type="file" id="imgRight" class="custom-input rounded border my-2" @change="()=>{uploadright()}">
                                </div>
                            </div>
                            <div class="col-6 col-xl-3">
                                <div>
                                    <div class="p-3"><img id="imgBackView" class="w-100 obj-cover my-2" src="/static/image/back.jpg" style="height: 400px;" alt="Hair Transplant"></div>
                                    <p class="my-2 fw-bold">Back Photo</p><input type="file" id="imgBack" class="custom-input rounded border my-2" @change="()=>{uploadback()}">
                                </div>
                            </div>
                        </div>
                    </div><!-- End: 1 -->
                </div><!-- End: Upload Your Photos --><!-- Start: btn -->
                <div class="d-flex d-xl-flex justify-content-center justify-content-xl-center"><b-overlay :show="isloading"><!-- Start: btn -->
                        <div class="btn-black" @click="div4daa3edb38f5cc7eb9f4ab9495d81c08a107064bclick">
                            <p>SEND</p>
                        </div><!-- End: btn -->
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
    


    let isloading= ref(false);
    let ischeck= ref(false);
    let ischeck1= ref(false);
    let ischeck2= ref(false);
    let ischeck3= ref(false);
    let ischeck4= ref(false);
    let ischeck5= ref(false);
    let ischeckselect= ref(false);
    let ischeckselect1= ref(false);
    let ischeckselect2= ref(false);
    let ischeckselect3= ref(false);;
let hairLossHistory= ref({firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    occupation: "",
    city: "",
    stressAddress: "",
    country: "",
    postalCode: "",
    whatAgeDidYouFirstNoticeHairLoss: "",
    areYouCurrentlyOrHaveYouEverTakenPropecia: "",
    areYouCurrentlyOrHaveYouEverTakenRogaine: "",
    haveYouEverTriedPlateletRichPlasmaPrpTre: "",
    doYouHaveAnyPreexistingMedicalConditions: "",
    doYouSmoke: "",
    haveYouHadAPreviousHairTransplant: "",
    describeTheHairLossOnYourMothers: "",
    describeTheHairLossOnYourFathers: "",
    describeTheHairLossOfYourSibling: "",
    youConsultedWithAnotherHairTransplantDoctor: "",
    schedulingYourHairRestorationProcedure: "",
    howDidYouHearAboutUs: "",
    anyOtherComments: "",
    objectivesWithYourHairRestorationProcedures: [],
    yourScalpYouWantToHaveTreated: [],
    frontPhoto: "",
    topPhoto: "",
    leftPhoto: "",
    rightPhoto: "",
    backPhoto: ""});










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

        const createHairlosshistory = async( )=>{
            try {
                
                   let ValhairLossHistory = JSON.parse(JSON.stringify(hairLossHistory.value)) 
                
                
                
                
                  ValhairLossHistory = clearTypeName(ValhairLossHistory);
                const {data} =  await useFetch('https://asihairclinic.com/graphql',{

                    method: 'post',
                    body:{
                        query: `mutation 
 createHairLossHistory($hairLossHistory: hairLossHistoryCreateInput!){
        createHairLossHistory(hairLossHistory:$hairLossHistory)
                {firstName lastName phone email date occupation city stressAddress country postalCode whatAgeDidYouFirstNoticeHairLoss areYouCurrentlyOrHaveYouEverTakenPropecia areYouCurrentlyOrHaveYouEverTakenRogaine haveYouEverTriedPlateletRichPlasmaPrpTre doYouHaveAnyPreexistingMedicalConditions doYouSmoke haveYouHadAPreviousHairTransplant describeTheHairLossOnYourMothers describeTheHairLossOnYourFathers describeTheHairLossOfYourSibling youConsultedWithAnotherHairTransplantDoctor schedulingYourHairRestorationProcedure howDidYouHearAboutUs anyOtherComments objectivesWithYourHairRestorationProcedures yourScalpYouWantToHaveTreated frontPhoto topPhoto leftPhoto rightPhoto backPhoto _id }
        

}`,
                        variables: {hairLossHistory:ValhairLossHistory }}
                });
                
                if(data.value.data.createHairLossHistory){
                    toast?.show({props:{title:'Success',body:'Send information success',variant:'success'}});router.push({path:'/'})
                }
                        


                {

                }
                if(data.value.data.createHairLossHistory){
                    data.value.data.createHairLossHistory.value = JSON.parse(JSON.stringify(hairLossHistory.value))
                }

            } catch (e) {
                console.error(e)
            }

        }
        

    
    const router = useRouter();
    


    const div4daa3edb38f5cc7eb9f4ab9495d81c08a107064bclick = async function(){
        let stepBreak=0;;if( (!stepBreak||stepBreak===1) ){isloading.value=true};if( hairLossHistory.value.firstName==='' || hairLossHistory.value.lastName==='' || hairLossHistory.value.phone==='' || hairLossHistory.value.email==='' || hairLossHistory.value.date==='' || hairLossHistory.value.occupation==='' || hairLossHistory.value.city==='' || hairLossHistory.value.stressAddress==='' || hairLossHistory.value.country===''&&(!stepBreak||stepBreak===2) ){toast?.show({props:{title:'An error occurred',body:'Please fill in all required fields before proceeding.',variant:'danger'}})};if( (!stepBreak||stepBreak===3) ){  await new Promise((re)=>{
                    setTimeout(()=>{re(true);},1000);
                });};if( (!stepBreak||stepBreak===4) ){isloading.value=false};if( hairLossHistory.value.firstName==='' || hairLossHistory.value.lastName==='' || hairLossHistory.value.phone==='' || hairLossHistory.value.email==='' || hairLossHistory.value.date==='' || hairLossHistory.value.occupation==='' || hairLossHistory.value.city==='' || hairLossHistory.value.stressAddress==='' || hairLossHistory.value.country==='' ){
 stepBreak=999};if( (!stepBreak||stepBreak===6) ){await createHairlosshistory()};
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


         title= 'Hair Loss History & Timeline';
            meta.push({ name: 'title', content:'Hair Loss History & Timeline' });
            
            meta.push({ name: 'og:image', content:webConfig?.value.mediaSeo });
            
            meta.push({ name: 'description', content:'Discover the history and timeline of hair loss, from its causes to modern treatments. Learn about the evolution of hair restoration techniques and solutions for combating hair loss effectively…' });
            
            meta.push({ name: 'keywords', content:'hair loss' });
            
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
        name: "hair-loss-history-",

        

        data(){
            return {

                }
            },
                methods:{




    }

        }
</script>

//update in Mon Sep 16 2024 10:53:46 GMT+0700 (Indochina Time) by loidirieng
