'use client'

import React, { CSSProperties, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import style from './swiper.module.css'
import Image from 'next/image';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Carousel() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    return (
        <>
            <Swiper
                style={{
                    // height: '600px',
                    // maxWidth: '100%',
                    // padding: 0,
                    // margin: 0,
                    "--swiper-pagination-color": "#0066ff",
                } as CSSProperties}

                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide className={style.swiperSlide} >
                    <div className='box has-background-dark'>
                        <div className='columns'>
                            <div className='column is-6 '>

                                <h1 style={{ fontSize: 42 }}>Cloquet High School</h1>

                                {/* <div style={{ width: 500 }}>
                                    <Image
                                        src="/cloquet_high_school.png"
                                        alt="Vercel Logo"
                                        // className={styles.vercelLogo}
                                        // fill={true}
                                        style={{ maxWidth: '1000px', maxHeight: '500px', objectFit: 'fill' }}
                                        // width={800}
                                        // height={400}
                                        fill={true}
                                        // objectFit='fill'
                                        priority
                                    />
                                </div> */}


                                <figure className="image is-16by9">
                                    <img src="/cloquet_high_school.png" />
                                </figure>

                            </div>


                            <div className='column is-6'>

                                <div className='box'>
                                    {/* <p style={{position: 'fixed', width:'100%', height:'100%', alignItems:'start', display:'flex', justifyContent:'right'}}> */}
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quidem suscipit impedit enim pariatur voluptatum provident. Non doloremque vitae illum provident eos, nostrum illo laudantium temporibus voluptate earum quod deserunt?
                                    {/* </p> */}
                                </div>
                            </div>

                        </div>

                    </div>

                </SwiperSlide>
                {/* <SwiperSlide className={style.swiperSlide}>

                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide> */}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                style={{
                    // height: 400,
                }}
            >
                <SwiperSlide className={style.swiperSlide}>
                    <h1 style={{ position: 'absolute', width: '100%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center', fontSize: 42 }}>Cloquet</h1>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { ButtonGroupProps, ArrowProps, DotProps } from 'react-multi-carousel/lib/types';

// const responsive = {
//     superLargeDesktop: {
//         // the naming can be any, depends on you.
//         breakpoint: { max: 4000, min: 3000 },
//         items: 1
//     },
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 1
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 1
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1
//     }
// };


// interface CustomLeftArrowProps extends ArrowProps {
//     myOwnStuff: string;
// }
// interface CarouselButtonGroupProps extends ButtonGroupProps {
//     className?: string;
// }
// const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
//     if (onClick == undefined) return;
//     return <div onClick={() => onClick()}>This is My custom arrow</div>
// }


// const CarouselButtonGroup = ({ next, previous }: CarouselButtonGroupProps) => {
//     if (previous == undefined || next == undefined) {
//         return;
//     }
//     return (
//         <div>
//             <button onClick={() => previous()} />
//             <button onClick={() => next()} />
//         </div>
//     );
// };
// const CustomDots = ({ index, active, onClick, carouselState }: DotProps) => {
//     return <div onClick={() => onClick}>This is a Custom dots</div>
// }
