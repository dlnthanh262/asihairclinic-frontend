<template>
<div>
    <section class="position-relative home-hero-inline">
        <div class="home-hero-inline__media" style="position:relative;display:block;">
            <img class="obj-cover w-100 object-position-top home-hero-inline__image" src="/static/header-landing.png" alt="Houston hair transplant experts at Aesthetic Hair Restoration" style="display:block;min-height:40vh;width:100%;object-fit:cover;object-position:center top;">
            <div aria-hidden="true" style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(15,15,15,0.88) 0%,rgba(20,20,20,0.78) 14%,rgba(30,30,30,0.52) 28%,rgba(37,37,37,0.18) 48%,rgba(37,37,37,0.45) 100%);pointer-events:none;z-index:1;"></div>
            <div class="home-hero-inline__wrap" style="position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:flex-start;padding:1.5rem;">
                <div class="px-3 px-xl-5" style="max-width:680px;width:100%;text-align:left;">
                    <h1 class="text-uppercase home-hero-inline__title" style="font-weight:700;line-height:1.1;letter-spacing:0.08em;font-size:clamp(1.65rem,4.5vw,3rem);margin-bottom:1.25rem;"><span style="color:#DEB22F;">Houston&rsquo;s</span><span style="color:#ffffff;"> Hair Transplant</span></h1>
                    <p class="home-hero-inline__subheading" style="font-weight:400;line-height:1.75;color:rgba(255,255,255,0.92);font-size:clamp(0.9375rem,1.8vw,1.125rem);max-width:640px;margin-bottom:2rem;">Led by Dr. Do, a Brown University School of Medicine PLME graduate and double board-certified surgeon with 20+ years of experience and 20,000+ procedures performed.</p>
                    <div class="home-hero-inline__actions" style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem;">
                        <nuxt-link class="text-decoration-none d-inline-block" to="/contact">
                            <div class="btn-black btn-hover text-center home-hero-inline__cta" style="min-width:220px;padding:0.875rem 2rem !important;border-radius:0;">
                                <p class="text-uppercase mb-0 fw-bold">Request Consultation</p>
                            </div>
                        </nuxt-link>
                        <a
                            class="home-hero-inline__phone btn-hover"
                            :href="'tel:' + webConfig.phoneNumber"
                        ><i class="fa fa-phone home-hero-inline__phone-icon" aria-hidden="true"></i><span class="home-hero-inline__phone-text">{{ webConfig.phoneNumber }}</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="padding-section d-none">
        <div class="container">
            <div>
                <p class="text-center fs-1"><span class="fw-bold">Dr. Do</span>&nbsp;Hair Transplant</p>
            </div>
        </div>
    </section>
    <section class="margin-top-section">
        <div class="container">
            <div class="row g-0">
                <div class="col-xl-7">
                    <div class="h-100 home-why-ahr">
                        <div class="my-3">
                            <div class="col-xl-10 d-xl-flex justify-content-xl-start">
                                <h2 class="home-why-ahr__heading">Why Choose AHR?</h2>
                            </div>
                        </div>
                        <div class="d-xl-flex justify-content-xl-start my-3">
                            <div class="col-xl-10">
                                <p class="home-why-ahr__subheading">Experience. Precision. Results.</p>
                                <p class="home-why-ahr__body">At Aesthetic Hair Restoration, every treatment plan is designed around the individual.</p>
                                <p class="home-why-ahr__body">Led by Dr. Do, a Brown University School of Medicine PLME graduate and double board-certified surgeon, our team combines advanced technology with personalized care to create natural-looking results.</p>
                                <div class="home-why-ahr__metrics">
                                    <div class="home-why-ahr__metric">
                                        <p class="home-why-ahr__metric-value">20+</p>
                                        <p class="home-why-ahr__metric-label">Years Experience</p>
                                    </div>
                                    <div class="home-why-ahr__metric">
                                        <p class="home-why-ahr__metric-value">20,000+</p>
                                        <p class="home-why-ahr__metric-label">Procedures Performed</p>
                                    </div>
                                    <div class="home-why-ahr__metric">
                                        <p class="home-why-ahr__metric-value">Double</p>
                                        <p class="home-why-ahr__metric-label">Board Certified</p>
                                    </div>
                                    <div class="home-why-ahr__metric">
                                        <p class="home-why-ahr__metric-value">Houston</p>
                                        <p class="home-why-ahr__metric-label">Based</p>
                                    </div>
                                    <div class="home-why-ahr__metric">
                                        <p class="home-why-ahr__metric-value">FUE</p>
                                        <p class="home-why-ahr__metric-label">Specialists</p>
                                    </div>
                                    <div class="home-why-ahr__metric">
                                        <p class="home-why-ahr__metric-value">ARTAS</p>
                                        <p class="home-why-ahr__metric-label">Technology</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 m-bottom">
                    <div class="h-100 shadow-custom"><img class="w-100 h-100 obj-cover" src="/static/anh-you-choose.png" style="box-shadow: 0px 0px 12px rgba(175,185,195,0.25);" alt="Hair Transplant"></div>
                </div>
            </div>
        </div>
    </section>
    <section class="d-flex d-xl-flex align-items-center align-items-xl-center margin-section" style="background: url(&quot;/static/image/1612300320-home-bg2.jpg&quot;) center / cover no-repeat;min-height: 40vh;">
        <div class="container">
            <div class="col-12 col-xl-6 div-message-section">
                <div>
                    <h3 class="fw-lighter">We'll give you lively and youthful hair that exudes confidence and vitality.</h3>
                </div>
            </div>
        </div>
    </section>
    <section class="margin-section padding-section home-services-grid">
        <div class="row g-0 home-services-grid__row d-xl-flex justify-content-xl-center align-items-stretch">
            <div class="col-6 col-lg-2"><!-- Start: item hover -->
                <div class="item-img-hover"><!-- Start: overlay hover -->
                    <div class="overlay-hover"><!-- Start: content -->
                        <div class="pd-2">
                            <div class="d-none d-xl-inline-block px-2 py-1 bg-white text-dark fs-6 py-2 mb-3">
                                <p class="text-uppercase">Hair Transplant</p>
                            </div>
                            <div class="d-inline-block d-xl-none px-2 py-1 bg-white text-dark fs-6 py-2 mb-3 text-uppercase">
                                <p>Hair Transplant</p>
                            </div>
                            <p class="py-2 has-hover">Your trusted Houston hair transplant provider for customized hair restoration solutions. Utilizing advanced FUE, DHI, and robotic techniques, we create natural-looking results designed around each patient.</p><nuxt-link class="text-decoration-none text-white" to="/hair-transplantation/">
                                <div class="pt-3 pb-3">
                                    <p class="text-uppercase">More About Hair Transplants</p>
                                    <div class="mt-1 line-bottom-btn"></div>
                                </div>
                            </nuxt-link>
                        </div><!-- End: content -->
                    </div><!-- End: overlay hover --><img class="img-fluid" src="/static/hairi01.png" alt="Hair Transplant"><!-- Start: ovelay -->
                    <div class="overlay">
                        <p>Hair Transplant</p>
                    </div><!-- End: ovelay -->
                </div><!-- End: item hover -->
            </div>
            <div class="col-6 col-lg-2"><!-- Start: item hover -->
                <div class="item-img-hover"><!-- Start: overlay hover -->
                    <div class="overlay-hover"><!-- Start: content -->
                        <div class="pd-2">
                            <div class="d-inline-block d-xl-none px-2 py-1 bg-white text-dark fs-6 py-2 mb-3 text-uppercase">
                                <p>Eyebrow Hair</p>
                            </div>
                            <div class="d-none d-xl-inline-block px-2 py-1 bg-white text-dark fs-6 py-2 mb-3">
                                <p class="text-uppercase">Eyebrow Hair</p>
                            </div>
                            <p class="py-2 has-hover">Restore fuller, natural-looking eyebrows with advanced eyebrow transplant techniques in Houston. Each treatment is customized to complement your facial features and aesthetic goals.</p><nuxt-link class="text-decoration-none text-white" to="/hair-transplantation/eyebrow-transplant/">
                                <div class="pt-3 pb-3">
                                    <p class="text-uppercase">More About Eyebrow Hair</p>
                                    <div class="mt-1 line-bottom-btn"></div>
                                </div>
                            </nuxt-link>
                        </div><!-- End: content -->
                    </div><!-- End: overlay hover --><img class="img-fluid" src="/static/hairi02.png" alt="Hair Transplant"><!-- Start: ovelay -->
                    <div class="overlay">
                        <p>Eyebrow Hair</p>
                    </div><!-- End: ovelay -->
                </div><!-- End: item hover -->
            </div>
            <div class="col-6 col-lg-2"><!-- Start: item hover -->
                <div class="item-img-hover"><!-- Start: overlay hover -->
                    <div class="overlay-hover"><!-- Start: content -->
                        <div class="pd-2">
                            <div class="d-inline-block d-xl-none px-2 py-1 bg-white text-dark fs-6 py-2 mb-3 text-uppercase">
                                <p>Facial Hair</p>
                            </div>
                            <div class="d-none d-xl-inline-block px-2 py-1 bg-white text-dark fs-6 py-2 mb-3">
                                <p class="text-uppercase">Facial Hair</p>
                            </div>
                            <p class="py-2 has-hover">Restore beard, mustache, and sideburn density with facial hair transplant procedures in Houston. Our personalized approach helps create fuller, natural-looking facial hair growth.</p><nuxt-link class="text-decoration-none text-white" to="/hair-transplantation/facial-hair-transplants/">
                                <div class="pt-3 pb-3">
                                    <p class="text-uppercase">More About Facial Hair</p>
                                    <div class="mt-1 line-bottom-btn"></div>
                                </div>
                            </nuxt-link>
                        </div><!-- End: content -->
                    </div><!-- End: overlay hover --><img class="img-fluid" src="/static/hairi03.png" alt="Hair Transplant"><!-- Start: ovelay -->
                    <div class="overlay">
                        <p>Facial Hair</p>
                    </div><!-- End: ovelay -->
                </div><!-- End: item hover -->
            </div>
            <div class="col-6 col-lg-2"><!-- Start: item hover -->
                <div class="item-img-hover"><!-- Start: overlay hover -->
                    <div class="overlay-hover"><!-- Start: content -->
                        <div class="pd-2">
                            <div class="d-inline-block d-xl-none px-2 py-1 bg-white text-dark fs-6 py-2 mb-3 text-uppercase">
                                <p>Female Hair</p>
                            </div>
                            <div class="d-none d-xl-inline-block px-2 py-1 bg-white text-dark fs-6 py-2 mb-3">
                                <p class="text-uppercase">Female Hair</p>
                            </div>
                            <p class="py-2 has-hover">Our Houston hair restoration treatments for women address thinning, shedding, and hair loss with personalized solutions designed to restore fuller-looking hair and confidence.</p><nuxt-link class="text-decoration-none text-white" to="/hair-transplantation/female-hair-transplants/">
                                <div class="pt-3 pb-3">
                                    <p class="text-uppercase">More About Female Hair</p>
                                    <div class="mt-1 line-bottom-btn"></div>
                                </div>
                            </nuxt-link>
                        </div><!-- End: content -->
                    </div><!-- End: overlay hover --><img class="img-fluid" src="/static/femalehair2.png" alt="Hair Transplant"><!-- Start: ovelay -->
                    <div class="overlay">
                        <p>Female Hair</p>
                    </div><!-- End: ovelay -->
                </div><!-- End: item hover -->
            </div>
            <div class="col-6 col-lg-2"><!-- Start: item hover -->
                <div class="item-img-hover"><!-- Start: overlay hover -->
                    <div class="overlay-hover"><!-- Start: content -->
                        <div class="pd-2">
                            <div class="d-inline-block d-xl-none px-2 py-1 bg-white text-dark fs-6 py-2 mb-3 text-uppercase">
                                <p>PRP</p>
                            </div>
                            <div class="d-none d-xl-inline-block px-2 py-1 bg-white text-dark fs-6 py-2 mb-3">
                                <p class="text-uppercase">PRP</p>
                            </div>
                            <p class="py-2 has-hover">PRP hair restoration uses platelet-rich plasma to support healthier hair growth, improve hair density, and help slow the progression of hair loss.</p><nuxt-link class="text-decoration-none text-white" to="/hair-transplantation/prp-hair-loss-treatment/">
                                <div class="pt-3 pb-3">
                                    <p class="text-uppercase">More About PRP</p>
                                    <div class="mt-1 line-bottom-btn"></div>
                                </div>
                            </nuxt-link>
                        </div><!-- End: content -->
                    </div><!-- End: overlay hover --><img class="img-fluid" src="/static/prphair.png" alt="Hair Transplant"><!-- Start: ovelay -->
                    <div class="overlay">
                        <p>PRP</p>
                    </div><!-- End: ovelay -->
                </div><!-- End: item hover -->
            </div>
            <div class="col-6 col-lg-2"><!-- Start: item hover -->
                <div class="item-img-hover"><!-- Start: overlay hover -->
                    <div class="overlay-hover"><!-- Start: content -->
                        <div class="pd-2">
                            <div class="d-inline-block d-xl-none px-2 py-1 bg-white text-dark fs-6 py-2 mb-3 text-uppercase">
                                <p>DHI</p>
                            </div>
                            <div class="d-none d-xl-inline-block px-2 py-1 bg-white text-dark fs-6 py-2 mb-3">
                                <p class="text-uppercase">DHI</p>
                            </div>
                            <p class="py-2 has-hover">Direct Hair Implantation (DHI) is an advanced hair transplant technique that delivers precise graft placement and natural-looking hair restoration results.</p><nuxt-link class="text-decoration-none text-white" to="/hair-transplantation/dhi">
                                <div class="pt-3 pb-3">
                                    <p class="text-uppercase">More About DHi</p>
                                    <div class="mt-1 line-bottom-btn"></div>
                                </div>
                            </nuxt-link>
                        </div><!-- End: content -->
                    </div><!-- End: overlay hover --><img class="img-fluid" src="/static/dhihair.png" alt="Hair Transplant"><!-- Start: ovelay -->
                    <div class="overlay">
                        <p>DHI</p>
                    </div><!-- End: ovelay -->
                </div><!-- End: item hover -->
            </div>
        </div>
    </section>
    <section class="d-flex d-xl-flex align-items-center align-items-xl-center reponsive-section home-artas-banner" style="background: url(&quot;/static/10.jpg&quot;) center / cover no-repeat;background-position: center top;">
        <div class="container">
            <div class="col-xl-4 div-message-section-2">
                <div>
                    <h2 class="text-white fw-lighter text-uppercase">ARTAS® Robotic Hair Restoration</h2>
                </div>
            </div>
        </div>
    </section>
    <section class="home-artas-content">
        <div class="container"><!-- Start: section child 1 -->
            <div class="row g-0">
                <div class="col-12 col-xl-6 bg-white home-artas-overlap">
                    <div class="shadow-custom pb-5"><!-- Start: text -->
                        <div class="d-xl-flex justify-content-xl-center py-3 px-3 px-xl-0 py-xl-5">
                            <div class="col-xl-8">
                                <p class="px-xl-0 fs-4 fw-bold py-xl-3 text-uppercase home-section-heading" style="color:#DEB22F;">Why ARTAS®?<br></p>
                                <p class="justified-text py-2 home-body-text">ARTAS® supports a more precise approach to hair restoration, helping optimize follicular unit harvesting while preserving surrounding hair.</p>
                                <p class="justified-text pt-2 home-body-text">Combined with Dr. Do's experience and individualized treatment planning, this advanced technology helps create natural-looking results designed around each patient's goals.</p>
                            </div>
                        </div><!-- End: text --><!-- Start: btn -->
                        <div class="mb-3 home-hero-inline__actions" style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem;justify-content:center;">
                            <nuxt-link class="text-decoration-none d-inline-block" to="/hair-transplantation/artas-ix-robotic-hair-restoration/"">
                                <div class="btn-black btn-hover text-center home-hero-inline__cta" style="min-width:220px;padding:0.875rem 2rem !important;border-radius:0;">
                                    <p class="text-uppercase mb-0 fw-bold">Learn More About ARTAS</p>
                                </div>
                            </nuxt-link>
                        </div>    
                            <!-- End: btn -->
                    </div>
                </div>
                <div class="col">
                    <div class="bg-black text-white d-xl-flex justify-content-xl-center align-items-xl-center justify-content-xxl-center shadow-custom py-4 m-xl-5 py-xl-5">
                        <div class="col-xl-9">
                            <div>
                                <p class="px-xl-0 fs-4 fw-bold py-xl-3 text-uppercase home-section-heading">how ARTAS® benefits you:<br></p>
                                <ul class="home-check-list home-body-text-light">
                                    <li class="home-check-list__item">
                                        <span class="home-check-list__icon" aria-hidden="true"><i class="fa fa-check"></i></span>
                                        <span>Advanced robotic-assisted precision</span>
                                    </li>
                                    <li class="home-check-list__item">
                                        <span class="home-check-list__icon" aria-hidden="true"><i class="fa fa-check"></i></span>
                                        <span>Natural-looking hairline and density planning</span>
                                    </li>
                                    <li class="home-check-list__item">
                                        <span class="home-check-list__icon" aria-hidden="true"><i class="fa fa-check"></i></span>
                                        <span>No long linear donor scar</span>
                                    </li>
                                    <li class="home-check-list__item">
                                        <span class="home-check-list__icon" aria-hidden="true"><i class="fa fa-check"></i></span>
                                        <span>Personalized treatment guided by Dr. Do</span>
                                    </li>
                                    <li class="home-check-list__item">
                                        <span class="home-check-list__icon" aria-hidden="true"><i class="fa fa-check"></i></span>
                                        <span>Designed to help preserve surrounding hair</span>
                                    </li>
                                    <li class="home-check-list__item">
                                        <span class="home-check-list__icon" aria-hidden="true"><i class="fa fa-check"></i></span>
                                        <span>Minimally invasive approach with modern FUE technology</span>
                                    </li>
                                    <li class="home-check-list__item">
                                        <span class="home-check-list__icon" aria-hidden="true"><i class="fa fa-check"></i></span>
                                        <span>Comprehensive recovery and aftercare support</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- End: section child 1 --><!-- Start: section child 3 -->
            <div class="padding-section">
                <div class="row g-0">
                    <div class="col-12 col-xl-6 shadow"><img class="w-100 h-100 obj-cover" src="/static/24.jpg" alt="Hair Transplant"></div>
                    <div class="col">
                        <div class="p-xl-5 m-xl-5">
                            <h2 class="pt-4 pt-xl-2 pb-2 fw-bold text-uppercase home-section-heading home-why-ahr__heading" style="color:#DEB22F;">Hair Transplant</h2>
                            <p class="py-2 justified-text home-body-text">Hair transplantation can provide a long-term solution for thinning hair, receding hairlines, and areas affected by hair loss.</p>
                            <p class="py-2 justified-text home-body-text">Using advanced FUE and FUT techniques, Dr. Do and the Aesthetic Hair Restoration team create personalized treatment plans designed around each patient's unique goals.</p>
                            <p class="py-2 justified-text home-body-text">Every procedure is focused on achieving natural-looking results that complement your appearance today and for years to come.</p>
                            <div class="mt-5 home-hero-inline__actions" style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem;justify-content:start;">
                                <nuxt-link class="text-decoration-none d-inline-block" to="/hair-transplantation/fue-hair-transplant"">
                                    <div class="btn-black btn-hover text-center home-hero-inline__cta" style="min-width:220px;padding:0.875rem 2rem !important;border-radius:0;">
                                        <p class="text-uppercase mb-0 fw-bold">Learn More About FUE</p>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- End: section child 3 -->
            <div class="home-video-banner margin-section"><!-- Start: section child 2 -->
                <div class="home-video-banner__frame">
                    <div class="home-video-banner__frame-inner">
                        <div class="home-video-banner__media">
                            <client-only>
                                <video
                                    class="home-video-banner__video"
                                    controls
                                    autoplay
                                    muted
                                    loop
                                    playsinline
                                    preload="metadata"
                                    :src="webConfig.srcVideo1"
                                ></video>
                            </client-only>
                            <div class="home-video-banner__content">
                                <p class="home-video-banner__eyebrow">ARTAS® TECHNOLOGY</p>
                                <h2 class="home-video-banner__heading"><span class="home-video-banner__heading-accent">FUE Hair Restoration</span> with ARTAS®</h2>
                                <p class="home-video-banner__subheading">Discover how Dr. Do combines advanced FUE techniques with ARTAS® technology to help patients achieve natural-looking, long-lasting hair restoration results.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- End: section child 2 -->
        </div>
    </section>
    <section class="d-xl-flex align-items-xl-center padding-section reponsive-section" style="background: url(&quot;/static/15.jpg&quot;) top / cover no-repeat;">
        <div class="position-section">
            <div class="h-100 mb-5">
                <h2 class="text-uppercase">GALLERY</h2>
            </div><nuxt-link class="text-decoration-none text-white" to="/gallery">
                <div class="btn-section m-btn-section">
                    <p>Explore</p>
                </div>
            </nuxt-link>
        </div>
    </section>
    <section class="margin-section padding-section">
        <div class="container">
            <div class="shadow-custom p-xl-5">
                <div class="row g-0">
                    <div class="col-12 message-section-9">
                        <div>
                            <p>With your customized hairstyle, your beauty truly shines.</p>
                        </div>
                        <p class="fw-bold">‐ Dr. Do</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="d-flex d-xl-flex align-items-end align-items-xl-end margin-section reponsive-section" style="background: url(&quot;/static/28.jpg&quot;) top / cover no-repeat; background-position: 100%  20%;;">
        <div class="container">
            <div class="d-xl-flex justify-content-xl-end mb-5"><!-- Start: d-none -->
                <div class="col-xl-6 px-2 px-xl-5 d-none">
                    <h2 class="text-white">Dr. Do</h2>
                    <div class="d-xl-flex justify-content-xl-end align-items-xl-center text-white mt-5">
                        <div class="p-3 p-xl-5 d-inline-block" style="border: 3px solid white"><i class="fa fa-play fs-1"></i></div>
                        <div class="px-xl-4">
                            <p>Watch a video to learn more about Dr. Do and his approach to aesthetic enhancements.</p>
                            <div class="mt-3" style="width: 60px;height: 3px;background: #ffffff;"></div>
                        </div>
                    </div>
                </div><!-- End: d-none -->
            </div>
        </div>
    </section>
    <section>
        <div class="container"><!-- Start: 1 -->
            <div class="row g-0">
                <div class="col-12 col-xl-6 shadow m-top-section-11">
                    <div>
                        <h2 class="d-none d-xl-block p-5 text-end text-white text-uppercase">Dr. Do&nbsp;</h2><!-- Start: bg black -->
                        <div class="px-3 p-xl-5 text-white bg-black">
                            <p class="justified-text py-3 home-body-text-light">Dr. Do is a Brown University School of Medicine PLME graduate and double board-certified surgeon with more than 20 years of experience.</p>
                            <p class="justified-text py-3 home-body-text-light">Throughout his career, he has performed over 20,000 procedures while helping patients achieve natural-looking aesthetic outcomes through advanced surgical techniques and individualized treatment planning.</p>
                            <p class="justified-text py-3 home-body-text-light">His approach to hair restoration combines surgical precision, artistic design, and a commitment to creating results that complement each patient&rsquo;s facial features and long-term appearance goals.</p>
                            <p class="justified-text py-3 home-body-text-light">Patients from Houston and across the United States trust Dr. Do for his experience, attention to detail, and personalized care.</p><nuxt-link class="text-decoration-none text-white" to="/about">
                                <div class="d-flex d-xl-flex justify-content-center flex-xl-column justify-content-xl-center align-items-xl-center py-4 my-5 bg-black btn-hover-2">
                                    <div>
                                        <p class="text-uppercase fw-bold">Learn More About Dr. Do</p>
                                        <div class="align-self-start mt-1" style="width: 40px;height: 2px;background: #ffffff;"></div>
                                    </div>
                                </div>
                            </nuxt-link>
                        </div><!-- End: bg black -->
                    </div>
                </div>
            </div><!-- End: 1 --><!-- Start: 2 -->
            <div class="d-xl-flex justify-content-xl-center margin-section padding-section shadow-custom">
                <div class="col-xl-8">
                    <div class="border-left-item">
                        <h3 class="fw-lighter">We are committed to creating custom hair restorations that look like they were naturally grown.</h3>
                    </div>
                    <h3 class="d-flex d-xl-flex justify-content-end justify-content-xl-end px-2">Dr. Do</h3>
                </div>
            </div><!-- End: 2 --><!-- Start: 3 -->
            <div>
                <div class="row g-0">
                    <div class="col-12 col-xl-6"><!-- Start: item hover -->
                        <div class="img-hover-2"><img class="img-fluid" src="/static/facialhair-transpant.png" alt="Hair Transplant"><!-- Start: overlay-btn -->
                            <div class="d-none d-xl-block px-5 py-3 bg-white text-dark overlay-btn">
                                <p class="text-uppercase">Facial Hair Transplant</p>
                            </div><!-- End: overlay-btn --><!-- Start: ovelay -->
                            <div class="overlay"><!-- Start: content -->
                                <div class="text-white">
                                    <div class="d-inline-block d-xl-none px-2 py-1 bg-white text-dark fs-6 py-2">
                                        <p>Facial Hair Transplant</p>
                                    </div>
                                    <p class="d-none d-xl-inline-block py-2">Despite being lesser-known, facial hair transplantation is a crucial aspect of Dr. Do's expertise. For men with insufficient facial hair, this method offers a solution to regain a more masculine appearance. Similar to scalp hair transplantation, healthy hair is harvested from other areas and meticulously implanted into the beard region.</p><nuxt-link class="text-decoration-none text-white" to="/hair-transplantation/facial-hair-transplants/">
                                        <div class="py-3 py-2">
                                            <p class="text-uppercase">Learn More About Facial Hair Transplant</p>
                                            <div class="mt-3" style="width: 60px;height: 3px;background: #ffffff;"></div>
                                        </div>
                                    </nuxt-link>
                                </div><!-- End: content -->
                            </div><!-- End: ovelay --><!-- Start: bg-overlay -->
                            <div class="bg-overlay"></div><!-- End: bg-overlay -->
                        </div><!-- End: item hover -->
                    </div>
                    <div class="col-12 col-xl-6"><!-- Start: item hover -->
                        <div class="img-hover-2"><img class="img-fluid" src="/static/eyebrow-transplant.png" alt="Hair Transplant"><!-- Start: overlay-btn -->
                            <div class="d-none d-xl-block px-5 py-3 bg-white text-dark overlay-btn">
                                <p class="text-uppercase">Eyebrow Transplant</p>
                            </div><!-- End: overlay-btn --><!-- Start: ovelay -->
                            <div class="overlay"><!-- Start: content -->
                                <div class="text-white">
                                    <div class="d-inline-block d-xl-none px-2 py-1 bg-white text-dark fs-6 py-2">
                                        <p>Eyebrow Transplant</p>
                                    </div>
                                    <p class="d-none d-xl-inline-block py-2">In addition to facial hair transplants, Dr. Do also provides eyebrow transplants. Eyebrows are a crucial facial feature that enables expressive communication. Loss of eyebrows due to genetics, illness, or other factors can detract from one's appearance. Similar to other hair restoration methods, Dr. Do skillfully implants individual follicles into the eyebrow region. </p><nuxt-link class="text-decoration-none text-white" to="/hair-transplantation/eyebrow-transplant/">
                                        <div class="py-3 py-2">
                                            <p class="text-uppercase">Learn More About Eyebrow Transplant</p>
                                            <div class="mt-3" style="width: 60px;height: 3px;background: #ffffff;"></div>
                                        </div>
                                    </nuxt-link>
                                </div><!-- End: content -->
                            </div><!-- End: ovelay --><!-- Start: bg-overlay -->
                            <div class="bg-overlay"></div><!-- End: bg-overlay -->
                        </div><!-- End: item hover -->
                    </div>
                </div>
            </div><!-- End: 3 -->
        </div>
    </section>
    <section class="padding-section margin-section">
        <div class="container">
            <div class="row g-0 shadow-custom">
                <div class="col-12 col-xl-8 p-3 p-xl-5">
                    <h2 class="fw-lighter text-uppercase py-2 home-section-heading" style="font-weight: bold;">Patients Travel to Houston for Hair Restoration</h2>
                    <p class="justified-text py-2 home-body-text">Aesthetic Hair Restoration welcomes patients from throughout Texas and across the United States.</p>
                    <p class="justified-text py-2 home-body-text">In addition to serving the Houston community, we regularly work with patients traveling from Austin, Dallas, San Jose, San Francisco, Seattle, Atlanta, New York, Arizona, and other locations seeking advanced hair restoration care.</p>
                    <p class="justified-text py-2 home-body-text">Our team can help coordinate consultations, treatment scheduling, and recovery planning to make the process as convenient as possible for out-of-town patients.</p>
                    <nuxt-link class="text-decoration-none d-inline-block mt-3" to="/contact/virtual-consultation/">
                        <div class="btn-black btn-hover text-center" style="padding:0.875rem 2rem !important;border-radius:0;">
                            <p class="text-uppercase mb-0 fw-bold">Request a Virtual Consultation</p>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
    <section class="d-flex d-xl-flex justify-content-center justify-content-xl-center margin-section" style="/*background: url(&quot;https://asihairclinic.loidirieng.com/_nuxt/static/pexels-photo-245240.webp&quot;) center / cover no-repeat;*/min-height: 40vh;background: url(&quot;/images/1715092596161.webp&quot;) center;">
        <div class="container d-flex d-xl-flex flex-column justify-content-center align-items-center align-items-lg-center justify-content-xl-center align-items-xxl-center" style="/*background: url(&quot;/images/1715092596161.webp&quot;) center;*/">
            <div class="d-xl-flex flex-xl-column justify-content-xl-center align-items-xl-center py-2" style="background: rgba(14,12,12,0.51);border-radius: 12px;padding: 18px;">
                <h2 class="text-white fw-lighter py-2 text-center text-uppercase">Hair Loss History</h2>
                <h5 class="text-white fw-lighter py-2 text-center">Complete your hair loss questionnaire today.</h5>
            </div>
            <div class="d-flex d-xl-flex justify-content-center justify-content-xl-center py-2" style="width: max-content;min-width: 300px;"><nuxt-link class="text-decoration-none text-white" to="/hair-loss-history/">
                    <div class="btn-section mt-3 poiter">
                        <p class="text-center">BEGIN</p>
                    </div>
                </nuxt-link></div>
        </div>
    </section>
    <section class="margin-section">
        <div class="container"><!-- Start: div section 1 -->
            <div class="padding-section">
                <div class="row">
                    <div class="col-12 col-xl-4"><!-- Start: item hover -->
                        <div class="item-img-hover"><!-- Start: overlay hover -->
                            <div class="overlay-hover"><!-- Start: content -->
                                <div class="px-5">
                                    <div class="d-inline-block d-xl-none px-2 py-1 bg-white text-dark fs-6 py-2">
                                        <p>Stages of Hair Loss</p>
                                    </div>
                                    <div class="d-none d-xl-inline-block px-2 py-1 bg-white text-dark fs-6 py-2">
                                        <p class="text-uppercase">Hair Transplant Consultation</p>
                                    </div>
                                    <p class="py-2">Hair loss occurs in stages, beginning with a receding hairline. This gradually progresses to thinning and eventual balding.</p><nuxt-link class="text-decoration-none text-white" to="/patient-resources/hair-transplant-consultation/">
                                        <div class="pt-3 pb-4">
                                            <p class="text-uppercase">More About Hair Transplant Consultation</p>
                                            <div class="mt-3" style="width: 60px;height: 3px;background: #ffffff;"></div>
                                        </div>
                                    </nuxt-link>
                                </div><!-- End: content -->
                            </div><!-- End: overlay hover --><img class="img-fluid" src="/static/faceialhair.png" alt="Hair Transplant"><!-- Start: ovelay -->
                            <div class="overlay">
                                <p>Hair Transplant Consultation</p>
                            </div><!-- End: ovelay -->
                        </div><!-- End: item hover -->
                    </div>
                    <div class="col-12 col-xl-4"><!-- Start: item hover -->
                        <div class="item-img-hover"><!-- Start: overlay hover -->
                            <div class="overlay-hover"><!-- Start: content -->
                                <div class="px-5">
                                    <div class="d-inline-block d-xl-none px-2 py-1 bg-white text-dark fs-6 py-2">
                                        <p>Hair Transplant Cost</p>
                                    </div>
                                    <div class="d-none d-xl-inline-block px-2 py-1 bg-white text-dark fs-6 py-2">
                                        <p class="text-uppercase">Hair Transplant Cost</p>
                                    </div>
                                    <p class="py-2">Hair loss occurs in stages, beginning with a receding hairline. This gradually progresses to thinning and eventual balding.</p><nuxt-link class="text-decoration-none text-white" to="/patient-resources/hair-transplant-cost/">
                                        <div class="pt-3 pb-4">
                                            <p class="text-uppercase">More About Hair Transplant Cost</p>
                                            <div class="mt-3" style="width: 60px;height: 3px;background: #ffffff;"></div>
                                        </div>
                                    </nuxt-link>
                                </div><!-- End: content -->
                            </div><!-- End: overlay hover --><img class="img-fluid" src="/static/main33335.png" alt="Hair Transplant"><!-- Start: ovelay -->
                            <div class="overlay">
                                <p>Hair Transplant Cost</p>
                            </div><!-- End: ovelay -->
                        </div><!-- End: item hover -->
                    </div>
                    <div class="col-12 col-xl-4"><!-- Start: item hover -->
                        <div class="item-img-hover"><!-- Start: overlay hover -->
                            <div class="overlay-hover"><!-- Start: content -->
                                <div class="px-5">
                                    <div class="d-inline-block d-xl-none px-2 py-1 bg-white text-dark fs-6 py-2">
                                        <p>FUT Hair Transplant</p>
                                    </div>
                                    <div class="d-none d-xl-inline-block px-2 py-1 bg-white text-dark fs-6 py-2">
                                        <p class="text-uppercase">Stages of Hair Loss</p>
                                    </div>
                                    <p class="py-2">Advantages of FUT include avoidance of having to shave the donor site on the day of your procedure. The hair can be kept at its natural length in the region. Furthermore</p><nuxt-link class="text-decoration-none text-white" to="/patient-resources/stages-of-hair-loss/">
                                        <div class="pt-3 pb-4">
                                            <p class="text-uppercase">More About Stages of Hair Loss</p>
                                            <div class="mt-3" style="width: 60px;height: 3px;background: #ffffff;"></div>
                                        </div>
                                    </nuxt-link>
                                </div><!-- End: content -->
                            </div><!-- End: overlay hover --><img class="img-fluid" src="/static/dhihair.png" alt="Hair Transplant"><!-- Start: ovelay -->
                            <div class="overlay">
                                <p>Stages of Hair Loss</p>
                            </div><!-- End: ovelay -->
                        </div><!-- End: item hover -->
                    </div>
                </div>
            </div><!-- End: div section 1 --><!-- Start: section child 2 -->
            <div class="padding-section">
                <div class="row g-0">
                    <div class="col-12 col-xl-6 shadow"><img class="w-100 h-100 obj-cover" src="/static/anh-landing11.png" alt="Hair Transplant"></div>
                    <div class="col">
                        <div class="p-xl-5 m-xl-5 d-none">
                            <h2 class="pt-4 py-xl-2">Your hair transplant Consultation at Aesthetic Hair Restoration</h2>
                            <p class="py-2 justified-text">Unlike hair restoration methods of the past, modern hair transplants provide patients with natural, convincing hair restoration. When patients take advantage of recent developments in the field of hair transplantation, their new hair grows and behaves just like the rest of their hair. It’s almost as though hair loss never occurred in the first place.&nbsp;So what makes these techniques so beautiful?</p>
                            <p class="py-2 justified-text">We believe consistency is a major factor. Dr. Do built his team of hair transplant specialists over ten years ago, and to this day, he works with the same team of talented technicians. At Aesthetic Hair Restoration, Dr. Do will carefully assess and understand your areas of concern to plan your restoration. In performing hair restoration, he performs no more than one hair transplant per day, allowing him to dedicate his total attention to providing you with the authentically natural results you deserve.</p>
                        </div>
                        <div class="p-xl-5 m-xl-5">
                            <h2 class="pt-4 pt-xl-2 pb-xl-2 text-uppercase home-section-heading">Your Hair Transplant Consultation at Aesthetic Hair Restoration</h2>
                            <p class="py-2 justified-text home-body-text">Your hair restoration journey begins with a personalized consultation at Aesthetic Hair Restoration.</p>
                            <p class="py-2 justified-text home-body-text">During this visit, Dr. Do will evaluate your hair loss pattern, donor hair quality, scalp health, medical history, and aesthetic goals. This allows the team to recommend the most appropriate treatment options, which may include FUE, FUT, DHI, ARTAS robotic hair restoration, PRP, or a customized plan.</p>
                            <p class="py-2 justified-text home-body-text">Once your treatment plan is created, our team will walk you through procedure timing, preparation, recovery expectations, and aftercare instructions.</p>
                            <p class="py-2 justified-text home-body-text">For many patients, transplanted hairs shed within the first few weeks before new growth begins. Early growth commonly appears within several months, with continued improvement over 9 to 12 months and final density maturing over 12 to 18 months.</p>
                        </div>
                    </div>
                </div>
            </div><!-- End: section child 2 --><!-- Start: homepage FAQ -->
            <div class="padding-section">
                <div class="container">
                    <h2 class="fw-lighter py-2 text-uppercase home-section-heading">Hair Transplant Houston FAQs</h2>
                    <div><b-accordion class="accordion home-faq-accordion" role="tablist" id="homepage-faq"><b-accordion-item v-for="faq in homepageFaqs" :key="faq.question" class="accordion-item my-3" :title="faq.question">
                                <p class="mb-0 home-body-text">{{ faq.answer }}</p>
                            </b-accordion-item></b-accordion></div>
                </div>
            </div><!-- End: homepage FAQ --><!-- Start: section child 3 -->
            <div class="padding-section">
                <div class="row g-0">
                    <div class="col d-xxl-flex justify-content-xxl-center align-items-xxl-center">
                        <div class="p-2 p-xl-5 mx-xl-5">
                            <h2 class="pt-4 pb-2 pt-xl-0 pb-xl-0 text-uppercase">Before and After Results of FUE Hair Restoration at Aesthetic Hair Restoration</h2>
                            <p class="py-2 justified-text">One of the most significant advantages of FUE hair restoration at Aesthetic Hair Restoration is the natural-looking results it provides. This is due to the precise extraction and placement of follicles, as well as the artistic skills of the surgeons.<br></p>
                        </div>
                    </div>
                    <div class="col-12 col-xl-6 d-xl-flex d-xxl-flex order-first justify-content-xl-center align-items-xl-center order-xl-last justify-content-xxl-center">
                        <div class="d-xxl-flex align-items-xxl-center h-100 w-100 shadow-custom" style="max-height: 50vh;" v-for="(imageBeforeAfter,index) in imageBeforeAfters" v-bind:key="imageBeforeAfter._id">
                            <splitpanes class="splitpanes default-theme set-width" :vertical="false" :style="{'background-image':'url(&quot;'+imageBeforeAfter.imageAfter+'&quot;)'}">
                                <pane class="splitpanes__pane overflow-hidden bg-secondary"><b-img class="overflow-hidden h-100 obj-cover" style="width: auto" :src="imageBeforeAfter.imageBefore" :alt="imageBeforeAfter.imageBefore" lazy></b-img></pane>
                                <pane class="splitpanes__pane overflow-hidden" style="background: rgba(242,242,242,0);"></pane>
                            </splitpanes>
                        </div>
                    </div>
                </div>
            </div><!-- End: section child 3 -->
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
        layout: "layouthome",

    });
    
    


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

        

    


    





        //0 setup
        

        const slug=route.params['index'];

const resultimageBeforeAfters = await useAsyncQuery(gql` query    
 imageBeforeAfters($query: imageBeforeAfterFindInput,$limit:Float,$skip:Float,$sort:JSONObject){
     imageBeforeAfters:  imageBeforeAfters(query:$query,limit:$limit,skip:$skip,sort:$sort)
     {
                _id createdAt updatedAt imageBefore imageAfter 
        }

}`, { limit: 1 });
        let imageBeforeAfters = computed(() => resultimageBeforeAfters.data.value?.imageBeforeAfters ?? []);
        let webConfig = await useWebConfig();








        //0 afterData
        


        


        



        
        const methods=()=>{
            
        }

        





  // watch



    











    //meta

        const homepageFaqs = [
            {
                question: 'What is the best hair transplant option in Houston?',
                answer: 'The best option depends on your hair loss pattern, donor hair quality, goals, and medical history. At Aesthetic Hair Restoration, Dr. Do evaluates each patient and may recommend FUE, FUT, DHI, ARTAS robotic hair restoration, PRP, or a customized combination.',
            },
            {
                question: 'How much does a hair transplant cost in Houston?',
                answer: 'Hair transplant cost in Houston varies based on the number of grafts, technique used, treatment area, and complexity of the case. A consultation is the best way to receive a personalized estimate.',
            },
            {
                question: 'What is the difference between FUE and FUT?',
                answer: 'FUE removes individual follicular units from the donor area, usually leaving tiny dot-like scars. FUT removes a strip of donor tissue and may be useful for larger graft sessions, but it can leave a linear scar. Dr. Do helps patients choose the approach that best fits their goals.',
            },
            {
                question: 'How long is hair transplant recovery?',
                answer: 'Most patients can return to light daily activities within a few days, depending on the technique and scope of treatment. Temporary swelling, scabbing, and shedding can occur as part of the healing process.',
            },
            {
                question: 'When will I see hair transplant results?',
                answer: 'Early growth often begins around 3 to 4 months. More visible improvement usually develops over 6 to 12 months, with final density continuing to mature up to 12 to 18 months.',
            },
            {
                question: 'Do patients travel to Houston from other cities for hair restoration?',
                answer: 'Yes. Aesthetic Hair Restoration welcomes patients from Austin, Dallas, San Jose, San Francisco, Seattle, Atlanta, New York, Arizona, and other areas who travel to Houston for hair restoration care.',
            },
            {
                question: 'Who is Dr. Do?',
                answer: 'Dr. Do is a Brown University School of Medicine PLME graduate and double board-certified surgeon with more than 20 years of experience and over 20,000 procedures performed.',
            },
        ];

        const faqSchema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: homepageFaqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        };

        const metaTitle = 'Hair Transplant Houston | FUE, DHI & Hair Restoration | Dr. Do';
        const metaDescription = 'Looking for a hair transplant in Houston? Aesthetic Hair Restoration is led by Dr. Do, a Brown University School of Medicine PLME graduate and double board-certified surgeon with 20+ years of experience and 20,000+ procedures performed. Explore FUE, DHI, ARTAS, eyebrow, beard, and female hair restoration options.';
        const metaKeywords = 'hair transplant Houston, FUE hair transplant Houston, DHI hair transplant Houston, hair restoration Houston, Dr. Do hair transplant';
        const ogTitle = 'Hair Transplant Houston | Aesthetic Hair Restoration';
        const ogDescription = 'Advanced FUE, DHI, ARTAS robotic hair restoration, and personalized hair transplant solutions in Houston led by Dr. Do.';

        const meta = [{ name: 'theme-color', content: '#fff' }];

        meta.push({ name: 'title', content: metaTitle });
        meta.push({ name: 'description', content: metaDescription });
        meta.push({ name: 'keywords', content: metaKeywords });
        meta.push({ property: 'og:title', content: ogTitle });
        meta.push({ property: 'og:description', content: ogDescription });
        meta.push({ name: 'og:image', content: webConfig?.value.mediaSeo });
        meta.push({ name: 'og:url', content: webConfig?.value.domain });

   const bodyAttrs ={};
    const  htmlAttrs={};

        useHead({
            title: metaTitle,
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
            charset: 'utf-8',
            meta: meta,
            htmlAttrs:htmlAttrs,
            bodyAttrs:bodyAttrs,
            script: [
                {
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify(faqSchema),
                },
            ],
            link:[
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
               { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' },
            ]
        })
    


</script>


<!--false-->
<script>


    import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css';
              
    export default {
        name: "home",

        
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

<style scoped>
.home-section-heading {
  color: #252525;
}

.bg-black .home-section-heading {
  color: #fff;
}

.home-body-text {
  color: #606060;
}

.home-body-text-light {
  color: rgba(255, 255, 255, 0.92);
}

.home-faq-accordion :deep(.accordion-button) {
  color: #252525;
  font-weight: 600;
}

.home-faq-accordion :deep(.accordion-button:not(.collapsed)) {
  color: #252525;
  background-color: rgba(222, 178, 47, 0.12);
  box-shadow: inset 0 -1px 0 rgba(37, 37, 37, 0.08);
}

.home-why-ahr__heading {
  margin: 0;
  font-weight: 700;
  font-size: clamp(1.35rem, 2.4vw, 1.875rem);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #252525;
  line-height: 1.2;
}

.home-why-ahr__subheading {
  margin: 0 0 1.5rem;
  font-weight: 500;
  font-size: clamp(1rem, 1.6vw, 1.125rem);
  letter-spacing: 0.04em;
  color: #DEB22F;
  line-height: 1.4;
}

.home-why-ahr__body {
  margin: 0 0 1rem;
  max-width: 36rem;
  color: #606060;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
}

.home-why-ahr__body:last-of-type {
  margin-bottom: 0;
}

.home-why-ahr__metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(37, 37, 37, 0.1);
}

.home-why-ahr__metric {
  padding: 1.25rem 1rem;
  border: 1px solid rgba(37, 37, 37, 0.08);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.home-why-ahr__metric:hover {
  border-color: rgba(222, 178, 47, 0.35);
  box-shadow: 0 8px 24px rgba(37, 37, 37, 0.06);
}

.home-why-ahr__metric-value {
  margin: 0;
  font-weight: 600;
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: #DEB22F;
}

.home-why-ahr__metric-label {
  margin: 0.5rem 0 0;
  font-weight: 600;
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #606060;
  line-height: 1.4;
}

@media (max-width: 575px) {
  .home-why-ahr__metrics {
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }

  .home-why-ahr__metric {
    padding: 1rem 0.75rem;
  }
}

.home-hero-inline__cta p {
  font-weight: 700;
  font-size: 1rem;
}

.home-hero-inline__phone {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 220px;
  padding: 0.875rem 2rem;
  background-color: rgba(255, 255, 255, 0.14);
  border: none;
  color: #DEB22F;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.25s ease, color 0.25s ease;
  transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
}

.home-hero-inline__phone-icon {
  font-size: 1rem;
  text-decoration: none;
}

.home-hero-inline__phone-text {
  font-size: 1.125rem;
  text-decoration: underline;
  text-underline-offset: 0.2em;
  text-decoration-thickness: 1px;
}

.home-hero-inline__phone:hover .home-hero-inline__phone-text {
  text-decoration: underline;
}

@media (min-width: 1200px) {
  .home-hero-inline {
    margin-bottom: 150px;
  }

  .home-hero-inline__media {
    margin-top: -150px;
    z-index: 0;
  }

  .home-hero-inline__image {
    max-height: 110vh;
  }
}

@media (min-width: 992px) {
  .home-hero-inline__title {
    font-size: clamp(2rem, 3.2vw, 3.25rem);
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 575px) {
  .home-hero-inline__wrap {
    padding: 1rem;
  }

  .home-hero-inline__subheading {
    margin-bottom: 1.5rem;
  }

  .home-hero-inline__cta {
    width: 100%;
    min-width: 0;
  }

  .home-hero-inline__phone {
    width: 100%;
    min-width: 0;
    justify-content: center;
  }

  .home-hero-inline__actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>

//update in Mon Sep 16 2024 10:46:13 GMT+0700 (Indochina Time) by loidirieng
