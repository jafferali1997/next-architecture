'use client';

/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@mui/material';
import { EffectCoverflow, Pagination } from 'swiper';
import useLandingPage from './use-landing-page.hook';

import Header from './components/header/header.component';
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
        <div className="home-container">
          <div className="home-header">
            <div className="logo-menu">
              <img alt="img" className="logo" src="/assets/images/logo.png" />
              <button className="home-toggle-btn ">
                {open ? (
                  <img alt="img" src="/assets/images/Icons.svg" />
                ) : (
                  <img alt="img" src="/assets/images/menu-i.svg" />
                )}
              </button>
              <nav className={`header-menu-nav ${open ? 'minus-200 ' : ''}`}>
                {open ? (
                  <div className="mobilelogo">
                    <img alt="img" src="/assets/images/logo.png" />
                  </div>
                ) : null}

                <button className="home-inner-toggle-btn">
                  {open ? (
                    <img alt="img" src="/assets/images/Icons.svg" />
                  ) : (
                    <img alt="img" src="/assets/images/menu-i.svg" />
                  )}
                </button>
                <ul className={`${open ? 'minus-200-column' : ''}`}>
                  <li className={router.pathname === '/' ? 'active' : ''}>
                    <Link href="/">Home</Link>
                  </li>
                  <li className={router.pathname === '/about' ? 'active' : ''}>
                    <Link href="/">Features</Link>
                  </li>
                  <li className={router.pathname === '/contact' ? 'active' : ''}>
                    <Link href="/">Pricing</Link>
                  </li>
                  <li className={router.pathname === '/contact' ? 'active' : ''}>
                    <Link href="/">FAQ</Link>
                  </li>
                  <li className={router.pathname === '/contact' ? 'active' : ''}>
                    <Link href="/">Help Center</Link>
                  </li>
                  <Button className="login-btn" href="/sign-up">
                    {' '}
                    Signup{' '}
                  </Button>
                </ul>
              </nav>
            </div>
            <div className="lang-btn">
              <div className="lang-btn-inner">
                <img alt="img" height="24px" width="24px" src="/assets/images/lang.svg" />
              </div>
              {auth ? (
                <div className="auth-div">
                  <div className="img-menu">
                    <img alt="img" src="/assets/images/menu-i.svg" />
                  </div>
                  <div className="img-user">
                    <img alt="img" src="/assets/images/user.svg" />
                  </div>
                  <div className="auth-pop">
                    <div className="pop-head">What Quicksteps</div>
                    <div className="pop-btns">
                      {auth ? (
                        <Link href="/">Logout</Link>
                      ) : (
                        <>
                          <Button className="login-btn" href="/sign-up">
                            {' '}
                            Signup{' '}
                          </Button>
                          <Link href="/login">Login</Link>
                          <Link href="/sign-up">Sign Up</Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : <div className="log-sign-btn">
                  <Link className="login-btn-outline" href="/login">
                    {' '}
                    Login
                  </Link>
                  <Button className="login-btn" href="/sign-up">
                    {' '}
                    Signup{' '}
                  </Button>
                  <Link className="login-btn" href="/sign-up">
                    {' '}
                    Signup
                  </Link>
                </div> ? (
                <>
                  <div className="elselog-sign-btn">
                    <Link className="login-btn-outline" href="/login">
                      {' '}
                      Login
                    </Link>

                    <Link className="login-btn" href="/sign-up">
                      {' '}
                      Signup
                    </Link>
                  </div>

                  <div className="elseauth-div">
                    <div className="img-menu">
                      <img alt="img" src="/assets/images/menu-i.svg" />
                    </div>
                    <div className="img-user">
                      <img alt="img" src="/assets/images/user.svg" />
                    </div>
                    <div className="auth-pop">
                      <div className="pop-head">What Quicksteps</div>
                      <div className="pop-btns">
                        {auth ? (
                          <Link href="/logout">Logout</Link>
                        ) : (
                          <>
                            <Link href="/login">Login</Link>
                            <Link href="/sign-up">Sign Up</Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div className="home-hero-section">
          <div className="home-container">
            <div className="hero-content tw-grid tw-grid-cols-12">
              <div className="innerColumn tw-col-span-6">
                <h1>
                  <span>One app </span> to{' '}
                  <span className="hero_rep_color">replace </span> them <span>all</span>
                </h1>
                <div className="hero_max_width">
                  <p className="hero-description">
                    All of your work in one place: Build Invoices, Manage Customer and
                    Products, Manage Employee, Chat, Goals, & more.
                  </p>
                </div>
                <div className="hero_desc_btn">
                  <button>Try Free For 14 Days</button>
                </div>
                <p className="after-btn">
                  Quicksteps is free for 14 days as long as you’d like
                </p>
              </div>
              <div className="col-zi tw-col-span-6">
                <div className="colvido">
                  <img alt="img" src="/assets/images/hero-wos.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="circle-bg">
            <img alt="img" src="/assets/images/heor-circle.png" />
          </div>
        </div>
        <section className="home-brand-section">
          <div className="home-container">
            <h1>Accredited Partners</h1>
            <div className="brand-imgs">
              <img alt="img" src="/assets/images/pat.png" />
              <img alt="img" src="/assets/images/eu.png" />
              <img alt="img" src="/assets/images/ocn.png" />
              <img alt="img" src="/assets/images/british.png" />
              <img alt="img" src="/assets/images/eirm.png" />
              <img alt="img" src="/assets/images/adh.png" />
            </div>
          </div>
        </section>
        <section className="home-posts-section ">
          <div className="home-container">
            <div className="section-header">
              <h1 className="section_title">
                Smart Solutions for<span> Your Problems</span>
              </h1>
              <p className="section_para">
                Following are some fundamental features of Quickstep
              </p>
            </div>

            <div className="tw-align-items-center secondPost tw-grid tw-grid-cols-12">
              <div className="md:tw-col-span-6 lg:tw-col-span-6">
                <div className="colImage">
                  <img alt="img" src="/assets/images/post1.png" />
                </div>
              </div>
              <div className="md:tw-col-span-6 lg:tw-col-span-6 ">
                <div className="inner_content">
                  <h2>Documents Processing</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est
                    purus, ultrices in porttitor in, accumsan. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <p>
                    Nulla est purus, ultrices in porttitor in, accumsan. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in
                    porttitorm.
                  </p>
                  <div className="lernmor">
                    <a href="/">Learn more about features</a>
                    <img alt="img" src="/assets/images/arrow.svg" />
                  </div>
                </div>
              </div>
            </div>

            <div className="tw-align-items-center firstPost tw-mt-[143px] tw-grid tw-grid-cols-12">
              <div className="order-md-1 tw-col-span-6">
                <div className="inner_content">
                  <h2>Cancelation of Documents</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est
                    purus, ultrices in porttitor in, accumsan. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nulla est purus, ultrices in porttitor
                    in, accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla est purus, ultrices in porttitorm.
                  </p>
                  <div className="lernmor">
                    <a href="/">Learn more about features</a>
                    <img alt="img" src="/assets/images/arrow.svg" />
                  </div>
                </div>
              </div>
              <div className="order-md-2 tw-col-span-6">
                <div className="colImage">
                  <img alt="img" src="/assets/images/dashbordupborder.png" />
                </div>
              </div>
            </div>
            <div className="tw-align-items-center marginhundred tw-grid tw-grid-cols-12">
              <div className="tw-col-span-6">
                <div className="colImage mida-padd">
                  <img alt="img" src="/assets/images/postsecond.png" />
                </div>
              </div>
              <div className="tw-col-span-6">
                <div className="inner_content">
                  <h2>Send Reminder</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est
                    purus, ultrices in porttitor in, accumsan. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nulla est purus, ultrices in porttitor
                    in, accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla est purus, ultrices in porttitorm.
                  </p>
                  <div className="lernmor">
                    <a href="/">Learn more about features</a>
                    <img alt="img" src="/assets/images/arrow.svg" />
                  </div>
                </div>
              </div>

              <button className="solution_btn">
                Explore More Features{' '}
                <img alt="img" src="/assets/images/white-arrow.png" />
              </button>
            </div>
          </div>
        </section>
        <section className="home-whychose-section">
          <div className="home-container">
            <div className="home-section-intro ">
              <h2 className="marginTop100">
                Why <span> Quick step</span>
              </h2>
              <p>
                We facilitate the process to create win-win strategies, aligning
                world-class marketing functions with consumer’s interests in mind and
                bringing forth the best possible growth solutions for businesses.
              </p>
            </div>
            <div className="why-content">
              <div className="whycard tw-col-span-6">
                <img alt="img" src="/assets/images/reserch.png" />
                <h4>Insight network</h4>
                <p>
                  Gain the expertise you need to make smarter marketing decisions for
                  business growth
                </p>
              </div>
              <div className="whycard tw-col-span-6">
                <img alt="img" src="/assets/images/cycle.png" />
                <h4>Agile talent</h4>
                <p>
                  Go ahead with efficient execution to achieve marketing KPIs & strategic
                  results
                </p>
              </div>
              <div className="whycard tw-col-span-6">
                <img alt="img" src="/assets/images/ready.png" />
                <h4>Ready-to-use</h4>
                <p>
                  Save 80% of your time & money with the most tech savvy marketing
                  solutions
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-worke-section">
          <div className="home-container">
            <div className="home-section-intro ">
              <h2>
                How It <span>Works</span>
              </h2>
              <h3>It’s as simple as 1, 2, 3</h3>
              <div className="workcard">
                <div className="workcard tw-col-span-6">
                  <div className="workcard-image">
                    <img alt="img" src="/assets/images/account.png" />
                  </div>
                  <span className="subtitle">STEP 01</span>
                  <h4>Create Your Account</h4>
                  <p>
                    Simply click on "Let's Get Started" below, enter your details, and
                    create your account.
                  </p>
                </div>
                <div className="workcard tw-col-span-6">
                  <div className="workcard-image-ba">
                    <img alt="img" src="/assets/images/safe.png" />
                  </div>
                  <span className="subtitle">STEP 02</span>
                  <h4>Get Verified</h4>
                  <p>
                    One of the Education Elephant team will review your details and verify
                    your account.
                  </p>
                </div>
                <div className="workcard tw-col-span-6">
                  <div className="workcard-image">
                    <img alt="img" src="/assets/images/basket.png" />
                  </div>
                  <span className="subtitle">STEP 03</span>
                  <h4>Sell Products & Services</h4>
                  <p>
                    Once you receive your account confirmation, you are all set to
                    purchase the tests online.
                  </p>
                </div>
              </div>
              <div className="workfoot">
                <button className="workfoot_btn">Get Started</button>
                <p>
                  *Please note that some tests have restrictions and can only be purchased
                  by those that have suitable testing qualifications.
                </p>
              </div>
            </div>
          </div>
        </section>
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
