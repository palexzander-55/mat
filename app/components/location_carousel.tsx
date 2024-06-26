'use client'

import React, { CSSProperties,  } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import style from './location_carousel.module.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import LocationCard from './location_card';

export default function LocationCarousel() {
    // const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
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
                // thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide className={style.locSwiperSlide} >
                    <LocationCard locationName='Cloquet High School' mapImgUrl='/cloquet_high_school.png' ></LocationCard>
                </SwiperSlide>
                <SwiperSlide className={style.locSwiperSlide}>
                    <LocationCard locationName='Duluth High School' mapImgUrl='/logo.jpg' ></LocationCard>
                </SwiperSlide>
                {/* 
                <SwiperSlide className={style.swiperSlide}>

                    <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide> */}
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
