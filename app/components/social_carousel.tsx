import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import style from './social_carousel.module.css';

import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';

class Post {
    imgUrl: string;
    caption: string;
    postUrl: string;

    constructor(imgUrl: string, caption: string, postUrl: string) {
        this.imgUrl = imgUrl;
        this.caption = caption;
        this.postUrl = postUrl;
    }
}

export default function SocialCarousel() {
    function PostSlide({ post }: { post: Post }) {
        return (
            <SwiperSlide className={style.swiperSlide}>
                <Link href={post.postUrl} >
                    {/* <h1 style={{ position: 'absolute', width: '100%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center', fontSize: 42, }}>{post.caption}</h1> */}

                    {/* <p id={style.caption} className='has-text-white' style={{backgroundColor: 'gray', position:'absolute', bottom:0}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum molestiae aspernatur expedita in, repellendus quos doloremque suscipit iste repudiandae, ullam, fuga vero esse cum ut facilis at eaque eum.
                </p> */}
                    <div className={style.swiperOverlay}>
                        <div id={style.visitUsButton} className=''>
                            <p id={style.caption} className='has-text-white p-4 is-invisible-mobile' >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum molestiae aspernatur expedita in, repellendus quos doloremque suscipit iste repudiandae, ullam, fuga vero esse cum ut facilis at eaque eum.
                            </p>

                            <button className="button is-responsive" id={style.button}>
                                <strong>Visit our Facebook</strong>
                            </button>
                        </div>

                    </div>
                    <img id='mediaImage' src={post.imgUrl} style={{objectFit:'fill', height: '100%', width:'100%'}} />
                </Link>
            </SwiperSlide>
        );
    }

    const posts: Post[] = [
        new Post("https://swiperjs.com/demos/images/nature-1.jpg", "Cloquet", "https://swiperjs.com/demos/images/nature-1.jpg"),
        new Post("https://swiperjs.com/demos/images/nature-2.jpg", "Cloquet", "https://swiperjs.com/demos/images/nature-2.jpg"),
        new Post("https://swiperjs.com/demos/images/nature-3.jpg", "Cloquet", "https://swiperjs.com/demos/images/nature-3.jpg"),
    ];

    function GetPostSlides() {
        return posts.map(p => {
            return (PostSlide({ post: p }));
        })
    }

    return (
        <Swiper
            // onSwiper={setThumbsSwiper}
            loop={false}
            spaceBetween={0}
            slidesPerView={4}
            freeMode={true}
            navigation={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper"
            style={{
                padding: 0,
                margin:0,
                // height: 400,
            }}
        >
            {/* {
                posts.map(post => {
                    return (

                       
                    );
                })
            } */}

            {/* {PostSlide({post: new Post("https://swiperjs.com/demos/images/nature-1.jpg", "Cloquet", "https://swiperjs.com/demos/images/nature-1.jpg"),})} */}
            {/* {PostSlide({post: new Post("https://swiperjs.com/demos/images/nature-1.jpg", "Cloquet", "https://swiperjs.com/demos/images/nature-1.jpg"),})} */}
            {GetPostSlides()}

            {/* <SwiperSlide className={style.swiperSlide} >
                <h1 style={{ position: 'absolute', width: '100%', height: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center', fontSize: 42, }}>Cloquet</h1>
                <div className={style.swiperOverlay}>
                    <a className="button" href=''>
                        <strong>Visit our Facebook</strong>
                    </a>
                </div>
                <img id='mediaImage' src="https://swiperjs.com/demos/images/nature-1.jpg" />
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
            </SwiperSlide> */}
        </Swiper>
    )
}