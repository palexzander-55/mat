// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './coverflow_swiper.module.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function CoverflowSwiper() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                style={{
                    width: "100%",
                    paddingTop: '50px',
                    paddingBottom: '50px',
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px'
                }}>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px'
                }}>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>       
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px'
                }}>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>       
                <SwiperSlide style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '300px',
                    height: '300px'
                }}>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

