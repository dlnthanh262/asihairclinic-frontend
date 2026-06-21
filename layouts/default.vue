<template>
<div>
    <header class="header-home bg-transparent" :class="{'scroll-header-top':scrolled}">
        <div class="row g-0 pe-lg-3 pe-xl-5 header-nav-row align-items-center"><!-- Start: logo -->
            <div class="col-2 col-xl-2 d-none d-lg-none d-xl-block"><nuxt-link class="poiter" :to="localizedTo('/')">
                    <div class="d-xl-flex justify-content-xl-center align-items-xl-center px-5 logo-header-layout"><img class="w-100 h-100 obj-contain logo-header-img" alt="logo asihairclinic" :src="webConfig.logoHeader"></div>
                </nuxt-link></div><!-- End: logo -->
            <div class="col-10 col-xl-10 d-none d-xl-flex align-items-center">
                <div style="width: 100%; display: flex; align-items: center;">
                    <div class="d-flex justify-content-xl-center align-items-xl-center" style="flex: 1;">
                        <HeaderNavbar bold dark />
                    </div>
                    <div class="lang-switch lang-switch--header lang-switch--dark">
                        <i class="fa fa-globe lang-switch__icon" aria-hidden="true"></i>
                        <nuxt-link :to="englishLangLink" class="lang-switch__link" :class="{ 'lang-switch__link--active': !isSpanishLang }">English</nuxt-link>
                        <span class="lang-switch__divider">|</span>
                        <nuxt-link :to="spanishLangLink" class="lang-switch__link" :class="{ 'lang-switch__link--active': isSpanishLang }">Spanish</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="col d-flex d-xl-none justify-content-between align-items-center px-3">
                <div class="lang-switch lang-switch--dark">
                    <i class="fa fa-globe lang-switch__icon" aria-hidden="true"></i>
                    <nuxt-link :to="englishLangLink" class="lang-switch__link" :class="{ 'lang-switch__link--active': !isSpanishLang }">English</nuxt-link>
                    <span class="lang-switch__divider">|</span>
                    <nuxt-link :to="spanishLangLink" class="lang-switch__link" :class="{ 'lang-switch__link--active': isSpanishLang }">Spanish</nuxt-link>
                </div>
                <div class="d-flex justify-content-end align-items-center h-100 pe-3" @click="isshowoffcanvas=!isshowoffcanvas">
                    <p>{{ navContent.menu }}</p><i class="fa fa-align-justify fs-5 ms-2"></i>
                </div>
            </div>
        </div>
    </header>
    <main>
        <slot/>
    </main>
    <section class="reponsive-section-2 margin-top-section section-ft-layout" :style="{'background-image':'url(&quot;'+webConfig.backroundFooter+'&quot;)'}" v-if="route.path!=='/contact'">
        <div class="d-xl-flex justify-content-xl-end text-white">
            <div class="col-xl-6 d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center p-3 p-xl-5 reponsive-section-2" style="background: rgba(0,0,0,0.7);">
                <div class="px-xl-5">
                    <h2 class="py-3 fw-lighter pe-5 fs-2 text-uppercase">Schedule a&nbsp;Consultation</h2>
                    <p class="py-3">If you are interested in our custom tailored, hand-harvested hair restoration procedures, your next step is a private consultation with Dr. Do. During this process, he will construct an honest plan to deliver maximum relief from hair loss.</p>
                    <div class="d-flex py-3"><nuxt-link class="text-decoration-none text-white" to="/contact">
                            <div class="py-3 btn-hover-2">
                                <p class="text-uppercase">in-office</p>
                                <div class="mt-3" style="width: 60px;height: 3px;background: #ffffff;"></div>
                            </div>
                        </nuxt-link></div>
                </div>
            </div>
        </div>
    </section>
    <footer class="shadow-custom pt-2 mb-5 mb-xl-0"><!-- Start: footer-mobile -->
        <div class="footer-mobile shadow">
            <div class="row g-0">
                <div class="col"><nuxt-link class="text-decoration-none text-dark" to="/contact">
                        <div class="text-center text-uppercase py-3 poiter">
                            <p>Contact us</p>
                        </div>
                    </nuxt-link></div>
                <div class="col"><a class="text-decoration-none text-dark" :href="'tel:'+webConfig.phoneNumber">
                        <div class="text-center text-uppercase py-3 poiter bg-black text-white h-100">
                            <p>{{webConfig.phoneNumber}}</p>
                        </div>
                    </a></div>
            </div>
        </div><!-- End: footer-mobile --><!-- Start: footer-destop -->
        <div><!-- Start: left -->
            <div class="d-none footer-destop-left poiter btn-hover"><i class="fa fa-wheelchair text-white fs-4 m-3"></i></div><!-- End: left --><!-- Start: right -->
            <div class="footer-destop-right poiter btn-hover"><nuxt-link class="text-decoration-none" to="/contact">
                    <p class="text-white">CONTACT US</p>
                </nuxt-link></div><!-- End: right -->
        </div><!-- End: footer-destop --><!-- Start: 1 -->
        <div class="d-none d-xl-block margin-section">
            <div class="d-flex flex-wrap justify-content-xl-center align-items-xl-center"><nuxt-link class="txt-header poiter text-dark" to="/about/">
                    <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center">
                        <p class="text-uppercase font-size-reponsive-header">ABOUT</p>
                    </div>
                </nuxt-link><nuxt-link class="txt-header poiter text-dark" to="/hair-transplantation/">
                    <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center">
                        <p class="text-uppercase font-size-reponsive-header">Hair Transplantation</p>
                    </div>
                </nuxt-link><nuxt-link class="txt-header poiter text-dark" to="/patient-resources/">
                    <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center">
                        <p class="text-uppercase font-size-reponsive-header">Patient Resources</p>
                    </div>
                </nuxt-link><nuxt-link class="txt-header poiter text-dark" to="/hair-loss-history/">
                    <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center">
                        <p class="text-uppercase font-size-reponsive-header">Hair Loss History</p>
                    </div>
                </nuxt-link><nuxt-link class="txt-header poiter text-dark" to="/gallery/">
                    <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center">
                        <p class="text-uppercase font-size-reponsive-header">Gallery</p>
                    </div>
                </nuxt-link><nuxt-link class="txt-header poiter text-dark" to="/videos">
                    <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center">
                        <p class="text-uppercase font-size-reponsive-header">VIDEOS</p>
                    </div>
                </nuxt-link><nuxt-link class="txt-header poiter text-dark" to="/blogs">
                    <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center">
                        <p class="text-uppercase font-size-reponsive-header">Blogs</p>
                    </div>
                </nuxt-link><nuxt-link class="txt-header poiter text-dark" to="/contact">
                    <div class="d-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center">
                        <p class="text-uppercase font-size-reponsive-header">contact</p>
                    </div>
                </nuxt-link></div>
        </div><!-- End: 1 --><!-- Start: 2 -->
        <div class="text-white bg-footer">
            <div class="px-xl-5">
                <div class="row g-0 px-xl-5">
                    <div class="col-12 col-xl-4 d-flex d-xxl-flex flex-column justify-content-center align-items-center justify-content-xl-center align-items-xl-start order-xl-first px-2 py-3 py-xl-0">
                        <p class="my-2">{{webConfig.nameStore}}</p><nuxt-link class="text-decoration-none text-white btn-hover text-center-footer" :to="webConfig.linkGoogleMap">
                            <p class="my-2">{{webConfig.address}}</p>
                        </nuxt-link><!-- Start: mail -->
                        <div class="d-flex justify-content-center justify-content-xl-end justify-content-xxl-end"><a class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center text-white text-decoration-none btn-hover" :href="'mailto:'+webConfig.email">
                                <p class="d-none">EMAIL:&nbsp;</p>
                                <p class="my-2">{{webConfig.email}}</p>
                            </a></div><!-- End: mail -->
                    </div>
                    <div class="col-12 col-xl-4 d-xl-flex order-first justify-content-xl-center align-items-xl-center py-3 py-xl-0"><nuxt-link to="/">
                            <div class="d-flex d-xxl-flex justify-content-center align-items-center justify-content-xxl-center align-items-xxl-center"><b-img class="btn-hover img-fluid max-height-img-footer" alt="logo asihairclinic" :src="webConfig.logoHeader" lazy></b-img></div>
                        </nuxt-link></div>
                    <div class="col-12 col-xl-4 d-xl-flex d-xxl-flex justify-content-xl-end align-items-xl-center justify-content-xxl-end align-items-xxl-center py-3 py-x-0">
                        <div>
                            <div class="d-flex justify-content-center justify-content-xl-end justify-content-xxl-end my-3"><nuxt-link class="text-white poiter" :to="webConfig.linkFb"><i class="fa fa-facebook-f mx-2 fs-5"></i></nuxt-link><nuxt-link class="text-white poiter" :to="webConfig.linkYoutube"><i class="fa fa-youtube-play mx-2 fs-5"></i></nuxt-link><nuxt-link class="text-white poiter" :to="webConfig.linkInstagram"><i class="fa fa-instagram mx-2 fs-5"></i></nuxt-link><nuxt-link class="text-white poiter" :to="webConfig.linkTwitter"><i class="fa fa-twitter mx-2 fs-5"></i></nuxt-link></div>
                            <div class="d-flex justify-content-center justify-content-xl-end justify-content-xxl-end my-3"><nuxt-link class="d-xl-flex justify-content-xl-center align-items-xl-center text-white text-decoration-none" :to="webConfig.linkGoogleMap">
                                    <p>4.3 Stars 56 Reviews</p>
                                    <div><i class="fa fa-star mx-2 fs-5"></i><i class="fa fa-star mx-2 fs-5"></i><i class="fa fa-star mx-2 fs-5"></i><i class="fa fa-star mx-2 fs-5"></i></div>
                                </nuxt-link></div>
                            <div class="d-flex justify-content-center justify-content-xl-end justify-content-xxl-end my-3"><a class="d-flex d-xl-flex d-xxl-flex justify-content-center justify-content-xl-center justify-content-xxl-center text-white text-decoration-none btn-hover" :href="'tel:'+webConfig.phoneNumber">
                                    <p class="d-none">PHONE:&nbsp;</p>
                                    <p>{{webConfig.phoneNumber}}</p>
                                </a></div><!-- Start: btn email -->
                            <div class="d-flex d-xxl-flex justify-content-center justify-content-xl-end justify-content-xxl-end my-3"><nuxt-link class="poiter text-decoration-none" to="/contact">
                                    <div class="d-inline-block bg-white text-dark text-uppercase p-2">
                                        <p>email us</p>
                                    </div>
                                </nuxt-link></div><!-- End: btn email -->
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- End: 2 --><!-- Start: 3 -->
        <div class="p-3 p-xl-5">
            <div class="d-flex flex-column justify-content-between flex-xl-row align-items-xl-center px-xl-5">
                <div class="d-flex flex-column flex-xl-row justify-content-xl-center align-items-xl-center">
                    <p class="text-center fw-bold mt-3 mt-xl-0">{{webConfig.nameStore}}</p><a v-if="linkCopyright" class="ms-3 text-decoration-none btn-hover-2 text-dark" :href="linkCopyright" target="_blank" rel="noopener">
                        <p class="text-center py-3">{{webConfig.copyright}}</p>
                    </a>
                    <p v-else class="text-center py-3 ms-3">{{webConfig.copyright}}</p>
                </div><nuxt-link class="text-decoration-none text-dark" to="/">
                    <p class="text-center py-3 d-none">PRIVACY POLICY</p>
                </nuxt-link>
            </div>
        </div><!-- End: 3 -->
    </footer><client-only><b-offcanvas placement="top" backdrop id="offcanvas-1" class="h-100 delete-canvas-header" v-model="isshowoffcanvas">
            <div><!-- Start: header -->
                <div class="d-flex justify-content-between align-items-center"><a class="px-lg-2 px-xl-0 text-decoration-none" :href="'tel:'+webConfig.phoneNumber">
                        <div class="poiter px-3 px-lg-0">
                            <p class="text-center fs-5 text-phone-header text-dark">{{webConfig.phoneNumber}}</p>
                        </div>
                    </a>
                    <div class="d-flex justify-content-end align-items-center h-100 pe-3" @click="isshowoffcanvas=!isshowoffcanvas">
                        <p>{{ navContent.menu }}</p><i class="fa fa-remove fs-2 ms-2"></i>
                    </div>
                </div><!-- End: header --><!-- Start: body -->
                <HeaderMobileMenu />
            </div>
        </b-offcanvas></client-only>
</div>
</template><script setup>
    import { computed,watch } from 'vue';
    const config = useRuntimeConfig()




            const isshowoffcanvas = useIsshowoffcanvas();
            


    

            


    

    

    //replaceMome
    
    import {onMounted,} from 'vue';
    

    


    const $device = useDevice();
    const { isMobile,isDesktop } = useDevice();
    const route = useRoute();

    const { navContent, isSpanishLang, englishLangLink, spanishLangLink, localizedTo } = useLangNav();

    
    


    let scrolled= ref(false);;









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

        

    


    const div52578ebc4e1f4b316401b4c33393e7642ba3b3ccclick = async function(){
        ;
    };
    





        //1 setup
        

        let webConfig = await useWebConfig();
        const linkCopyright = useLinkCopyright(webConfig);








        //1 afterData
        


        


        



        
        const handelscroll=()=>{
            if (process.client) {
    const debouncedScrollHandler = debounce(() => {
        const rect = document.body.getBoundingClientRect();
        scrolled.value = rect.top !== 0;
        //console.log(rect.top);
    }, 100); // Thời gian chờ trước khi gọi lại hàm (milliseconds)

    window.addEventListener("scroll", debouncedScrollHandler);
}

// Hàm debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

        }
        const methods=()=>{
            
        }

          onMounted(()=>{
            handelscroll()
        })





  // watch



    










 useHead({
                     viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
            charset: 'utf-8',
            link:[

                
                
                
                 { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
               
                    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inter&amp;display=swap' },{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&amp;display=swap' },
            ]
            
        })


</script>


<!--true-->
<script>


    
    export default {
        name: "default",

        

        data(){
            return {

                }
            },
                methods:{




    }

        }
</script>

<style scoped>
.lang-switch {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.35rem;
  flex-shrink: 0;
  font-size: 0.8125rem;
  white-space: nowrap;
}

.lang-switch--header {
  padding-left: 1rem;
}

.lang-switch__icon {
  font-size: 0.875rem;
  font-style: normal;
}

.lang-switch__divider {
  font-style: normal;
}

.lang-switch--dark .lang-switch__icon,
.lang-switch--dark .lang-switch__link {
  color: #212529;
}

.lang-switch--dark .lang-switch__divider {
  color: rgba(33, 37, 41, 0.55);
}

.lang-switch__link {
  text-decoration: none;
  font-weight: 500;
}

.lang-switch__link--active {
  color: #DEB22F !important;
  font-weight: 700 !important;
}
</style>

//update in Thu Nov 28 2024 01:28:13 GMT+0000 (Coordinated Universal Time) by loidirieng
