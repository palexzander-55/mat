
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function FadeCarousel() {
    return (
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
      );
}