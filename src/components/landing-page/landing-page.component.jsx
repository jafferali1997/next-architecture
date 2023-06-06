'use client';

/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@mui/material';
import { EffectCoverflow, Pagination } from 'swiper';
import useLandingPage from './use-landing-page.hook';

import Header from './components/header/header.component';
import Hero from './components/hero/hero.component';
import Partners from './components/partners/partners.component';
import SmartSolutions from './components/smartsolutions/smartsolutions.component';
import WhyQuicksteps from './components/whyquicksteps/whyquicksteps.component';
import HowItWorks from './components/howitworks/howitworks.component';
/**
 * create landing page component
 * @returns component
 */
function LandingPage() {
  const { open, setOpen, auth, setAuth, router } = useLandingPage();

  return (
    <>
      {/* <Header /> */}
      <div className="home-wrapper" data-auto-select="true">
        <Header />
        <Hero />

        <div className="tw-m-auto tw-w-full tw-max-w-7xl">
          <Partners />
          <SmartSolutions />
          <WhyQuicksteps />
          <HowItWorks />
        </div>

        <section className="home-review-section">
          <div className="home-container">
            <div className="home-section-intro ">
              <h2>
                Our <span>Testimonials</span>
              </h2>
            </div>
            <div className="slid-section">
              <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 8,
                  slideShadows: true
                }}
                pagination={true}
                loop={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="slide-card">
                    <div className="card-text">
                      The CCET course was structured in a way that made it very
                      informative and manageable. The short videos were really useful and
                      allowed for great flexibility in completion of the course. Thank you
                      to Kate and Rebecca for all of your support and feedback.
                    </div>
                    <div className="card-stars">
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                    </div>
                    <div className="card-user">
                      <img alt="img" src="/assets/images/usr.png" />
                      <div className="card-user-data">
                        <h4>Niamh Brennan</h4>
                        <p>6 months ago</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-card">
                    <div className="card-text">
                      The CCET course was structured in a way that made it very
                      informative and manageable. The short videos were really useful and
                      allowed for great flexibility in completion of the course. Thank you
                      to Kate and Rebecca for all of your support and feedback.
                    </div>
                    <div className="card-stars">
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                    </div>
                    <div className="card-user">
                      <img alt="img" src="/assets/images/usr.png" />
                      <div className="card-user-data">
                        <h4>Niamh Brennan</h4>
                        <p>6 months ago</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-card">
                    <div className="card-text">
                      The CCET course was structured in a way that made it very
                      informative and manageable. The short videos were really useful and
                      allowed for great flexibility in completion of the course. Thank you
                      to Kate and Rebecca for all of your support and feedback.
                    </div>
                    <div className="card-stars">
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                    </div>
                    <div className="card-user">
                      <img alt="img" src="/assets/images/usr.png" />
                      <div className="card-user-data">
                        <h4>Niamh Brennan</h4>
                        <p>6 months ago</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-card">
                    <div className="card-text">
                      The CCET course was structured in a way that made it very
                      informative and manageable. The short videos were really useful and
                      allowed for great flexibility in completion of the course. Thank you
                      to Kate and Rebecca for all of your support and feedback.
                    </div>
                    <div className="card-stars">
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                      <img alt="img" src="/assets/images/star.png" />
                    </div>
                    <div className="card-user">
                      <img alt="img" src="/assets/images/usr.png" />
                      <div className="card-user-data">
                        <h4>Niamh Brennan</h4>
                        <p>6 months ago</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section className="home-news-section">
          <div className="home-container">
            <div className="newscontent">
              <h2>Want to avail the best services?</h2>
              <p>
                All of your work in one place: Build Invoices, Manage Customer and
                Products, Manage Employee, Chat, Goals, & more.
              </p>
              <button className="newscontent_btn">Try Free For 14 Days</button>
            </div>
          </div>
        </section>
        <section className="home-footer-section">
          <div className="footercontent">
            <div className="footerlogo">
              <div className="img-div">
                <img alt="img" src="/assets/images/footer_logo.png" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas cursus commodo consequat
                id. Consectetur sed eget dolor egestas eu ullamcorper nunc. Morbi elit at
                montes in ridiculus morbi sed vitae purus. Eget congue malesuada
              </p>
            </div>
            <div className="footermenu">
              <h4>Company</h4>

              <a href="/">About us</a>
              <a href="/">Contact us</a>
              <a href="/">Blogs</a>
            </div>
            <div className="footermenu">
              <h4>Support</h4>

              <a href="/">FAQs</a>
              <a href="/">Help Center</a>
            </div>
            <div className="footermenu">
              <h4>Agreements</h4>

              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
              <a href="/">Cookie Setting</a>
            </div>
            <div className="footersocial">
              <h4>Payment Methods</h4>
              <div className="social-img">
                <img alt="img" src="assets/images/paypal.svg" />
                <img alt="img" src="assets/images/visa.svg" />
                <img alt="img" src="assets/images/master.svg" />
              </div>
              <h4 className="mtop25">Follow Us</h4>
              <div className="social-img">
                <img alt="img" src="assets/images/facbook.png" />
                <img alt="img" src="assets/images/linked.png" />
                <img alt="img" src="assets/images/insta.png" />
                <img alt="img" src="assets/images/twiter.png" />
              </div>
              {/* <div className='f-s-link'>
                  <a href=''>Try free for 14 days</a>
                </div> */}
            </div>
          </div>
        </section>
        <section className="home-footer-end-section">
          <p>© 2023 Quicksteps | All rights reserved.</p>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
