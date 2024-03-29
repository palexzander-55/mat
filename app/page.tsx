'use client'


import Image from 'next/image'
import styles from './page.module.css'
import Carousel from './components/swiper'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import NavBar from './components/navbar';
import ContactForm from './components/contact_form';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <NavBar /> */}

      {/* <div className='section'>
        <h1>Minnesota Academy of Tumbling</h1>
      </div> */}

         


      <section className='section is-large' style={{ position: 'absolute', width: '100%', height: '100%', fontSize: 42, zIndex: 1 }}>
        <h1 className='title is-1 is-flex is-align-items-center is-justify-content-center'>Welcome to the Minnesota Academy of Tumbling</h1>
        <h2 className='subtitle is-2 is-flex is-align-items-center is-justify-content-center'>A place to learn about tumbling</h2>
      </section>


      <Swiper
        spaceBetween={300}
        speed={2500}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        style={{ zIndex: 0, height: '85vh' }}
        effect={'fade'}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" style={{
            height: '100%', width: '100%',
          }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" style={{ height: '100%', width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" style={{ height: '100%', width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" style={{ height: '100%', width: '100%' }} />
        </SwiperSlide>
        {/* <span slot="container-start">Container Start</span>
  <span slot="container-end">Container End</span>
  <span slot="wrapper-start">Wrapper Start</span>
  <span slot="wrapper-end">Wrapper End</span> */}
      </Swiper>

      <section className="hero is-small is-info" style={{backgroundColor:'#55A8DD'}} >
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered ">
              <div className='column is-9 '>
                <p className="title">
                  Buy tickets to our Spring Performance now!
                </p>
              </div>
              <div className='column is-2 has-text-right'>
                <Link style={{ zIndex: 2 }} className="button is-primary  is-large is-responsive is-rounded" href="/classes/locations/cloquet" > <strong>Buy Tickets</strong></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='columns is-multiline is-centered is-gapless'>
        <div className='column is-6' >
          {/* <div className='box has-background-warning' style={{height:'100%', objectFit:'cover', width:'100%'}}> */}
          {/* <div className='image-container'> */}
          <figure className="is-flex is-align-items-center is-justify-content-center image " style={{ height: '100%', width: '100%', objectFit: 'fill' }}>
            <img src="https://bulma.io/images/placeholders/800x480.png" style={{ height: '100%', width: '100%', objectFit: 'fill' }} />
          </figure>
          {/* </div> */}
          {/* </div> */}
        </div>

        <div className='column is-6'>
          <div className='section  has-background-warning' style={{ height: '100%' }}>
            <div className="container is-fluid pb-6" style={{height:'100%'}}>
              <h1 className='title is-1 is-size-3-mobile'>Tumbling Classes</h1>
              <p className='pb-6 is-size-4-desktop has-text-grey'>
                We offer a variety of tumbling classes for all ages. Whether you're a beginner or an experienced tumbler, our classes are designed to help you learn the basics of tumbling and improve your skills.
                We offer a variety of tumbling classes for all ages. Whether you're a beginner or an experienced tumbler, our classes are designed to help you learn the basics of tumbling and improve your skills.
              </p>
              <a href="/classes/schedule">
                <button id={styles.buttonNav} className='button is-large  mt-5' style={{ position:'absolute', left:0, bottom:0, right:0, backgroundColor:''}}>Class Schedule</button>
              </a>
            </div>
          </div>
        </div>


  
{/* 
        <div className='column is-6'>
          <div className='section has-background-warning' style={{ height: '100%' }}>
            <div className="container is-fluid" style={{ height: '100%' }}>
              <h1 className='title is-1 is-size-3-mobile'>Tumbling Classes</h1>
              <p className='is-size-4-desktop has-text-grey'>
                We offer a variety of tumbling classes for all ages. Whether you're a beginner or an experienced tumbler, our classes are designed to help you learn the basics of tumbling and improve your skills.
                We offer a variety of tumbling classes for all ages. Whether you're a beginner or an experienced tumbler, our classes are designed to help you learn the basics of tumbling and improve your skills.
              </p>
              <div className="columns mt-5">
                <div className="column is-half is-hidden-touch">
                </div>
                <div className="column is-half has-text-centered">
                  <a href="/classes/schedule">
                    <button className='button is-primary is-large  ' >Class Schedule</button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div> */}

        <div className='column is-6 is-hidden-tablet' >
          <figure className="is-flex is-align-items-center is-justify-content-center image is-5by3">
            <img src="https://bulma.io/images/placeholders/800x480.png" />
          </figure>
        </div>

        <div className='column is-6'>
          <div className='section is-medium has-background-warning ' style={{ height: '100%' }}>
            <h1 className='title is-1 is-size-3-mobile'>Welcome to the Minnesota Academy of Tumbling</h1>
            <h2 className='subtitle is-2 is-size-5-mobile'>A place to learn about tumbling</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui officia praesentium, sunt ullam neque dicta molestias distinctio maiores aspernatur tempora blanditiis consequuntur sed? Neque beatae repudiandae qui magnam necessitatibus? Ducimus?
          </div>
        </div>

        <div className='column is-6 is-hidden-mobile' >
          <figure className="is-flex is-align-items-center is-justify-content-center image is-5by3">
            <img src="https://bulma.io/images/placeholders/800x480.png" />
          </figure>
        </div>

        <div className='column is-6' >
          {/* <div className='box has-background-warning' style={{height:'100%', objectFit:'cover', width:'100%'}}> */}
          {/* <div className='image-container'> */}
          <figure className="is-flex is-align-items-center is-justify-content-center image " style={{ height: '100%', width: '100%', objectFit: 'fill' }}>
            <img src="https://bulma.io/images/placeholders/800x480.png" style={{ height: '100%', width: '100%', objectFit: 'fill' }} />
          </figure>
          {/* </div> */}
          {/* </div> */}
        </div>

        <div className='column is-6'>
          <div className='section is-medium has-background-warning ' style={{ height: '100%' }}>
            <h1 className='title is-1 is-size-3-mobile'>Welcome to the Minnesota Academy of Tumbling</h1>
            <h2 className='subtitle is-2 is-size-5-mobile'>A place to learn about tumbling</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui officia praesentium, sunt ullam neque dicta molestias distinctio maiores aspernatur tempora blanditiis consequuntur sed? Neque beatae repudiandae qui magnam necessitatibus? Ducimus?
          </div>
        </div>
      </div>


      <h1 className='title is-1 is-size-3-mobile has-text-centered has-text-weight-bold' style={{}}>Locations:</h1>
      <Carousel />
    </main>
  )
}

{/* <div className={styles.description}>
<p>
  Get started by editing&nbsp;
  <code className={styles.code}>app/page.tsx</code>
</p>
<div>
  <a
    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    By{' '}
    <Image
      src="/logo.jpg"
      alt="Vercel Logo"
      className={styles.vercelLogo}
      width={100}
      height={24}
      priority
    />
  </a>
</div>
</div>

<div className={styles.center}>
<Image
  className={styles.logo}
  src="/next.svg"
  alt="Next.js Logo"
  width={180}
  height={37}
  priority
/>
</div>

<div className={styles.grid}>
<a
  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  className={styles.card}
  target="_blank"
  rel="noopener noreferrer"
>
  <h2>
    Docs <span>-&gt;</span>
  </h2>
  <p>Find in-depth information about Next.js features and API.</p>
</a>

<a
  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  className={styles.card}
  target="_blank"
  rel="noopener noreferrer"
>
  <h2>
    Learn <span>-&gt;</span>
  </h2>
  <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
</a>

<a
  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  className={styles.card}
  target="_blank"
  rel="noopener noreferrer"
>
  <h2>
    Templates <span>-&gt;</span>
  </h2>
  <p>Explore starter templates for Next.js.</p>
</a>

<a
  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  className={styles.card}
  target="_blank"
  rel="noopener noreferrer"
>
  <h2>
    Deploy <span>-&gt;</span>
  </h2>
  <p>
    Instantly deploy your Next.js site to a shareable URL with Vercel.
  </p>
</a>
</div> */}
