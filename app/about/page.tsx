'use client'

import styles from './page.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ButtonGroupProps, ArrowProps, DotProps } from 'react-multi-carousel/lib/types';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


interface CustomLeftArrowProps extends ArrowProps {
    myOwnStuff: string;
}
interface CarouselButtonGroupProps extends ButtonGroupProps {
    className?: string;
}
const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
    if (onClick == undefined) return;
    return <div onClick={() => onClick()}>This is My custom arrow</div>
}


const CarouselButtonGroup = ({ next, previous }: CarouselButtonGroupProps) => {
    if (previous == undefined || next == undefined) {
        return;
    }
    return (
        <div>
            <button onClick={() => previous()} />
            <button onClick={() => next()} />
        </div>
    );
};
const CustomDots = ({ index, active, onClick, carouselState }: DotProps) => {
    return <div onClick={() => onClick}>This is a Custom dots</div>
}

export default function About() {

    return (
        <main className={styles.main} >
            <section className='section is-large '>
                <div className='container is-fluid'>
                    <div className="columns" >
                        <div className="column">
                            <div className="box" style={{ maxWidth: 200 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa omnis repudiandae nesciunt eveniet iure aliquam! Magni necessitatibus commodi architecto reiciendis, hic nulla quasi consectetur, nesciunt obcaecati quo a placeat!
                            </div>
                        </div>
                        <div className="column">
                            <div className="card" style={{ maxWidth: 200 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa omnis repudiandae nesciunt eveniet iure aliquam! Magni necessitatibus commodi architecto reiciendis, hic nulla quasi consectetur, nesciunt obcaecati quo a placeat!
                            </div>
                        </div>
                        <div className="column">
                            <div className="box" style={{ maxWidth: 200 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa omnis repudiandae nesciunt eveniet iure aliquam! Magni necessitatibus commodi architecto reiciendis, hic nulla quasi consectetur, nesciunt obcaecati quo a placeat!
                            </div>
                        </div>
                        <div className="column">
                            <div className="box has-background-primary-dark" style={{ maxWidth: 200 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa omnis repudiandae nesciunt eveniet iure aliquam! Magni necessitatibus commodi architecto reiciendis, hic nulla quasi consectetur, nesciunt obcaecati quo a placeat!
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="notification is-primary">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi atque nihil delectus saepe expedita magni vero suscipit. Distinctio pariatur vitae veniam, hic fugit similique velit voluptate, laudantium dolores quam dolor.

                            <iframe src="https://www.instagram.com/p/BdJRABkDbXU/embed/" width="320" height="440" scrolling="no" ></iframe>


                            <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={true}
                                responsive={responsive}
                                deviceType='tablet'
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                <div>Item 1</div>
                                <div>Item 2</div>
                                <div>Item 3</div>
                                <div>Item 4</div>
                            </Carousel>;
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
