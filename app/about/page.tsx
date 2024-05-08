'use client'

import Image from 'next/image';
// import styles from './page.module.css'
import LocationCarousel from '../components/location_carousel';
// import FBPage from '../components/fb_page';
import ContactForm from '../components/contact_form';
import Link from 'next/link';
import FAQ, { FaqProps } from '../components/faq';




// import { FacebookEmbed } from 'react-social-media-embed';
// import Script from 'next/script';

const questions: FaqProps = {
    questions: [
      ["What is TypeScript?", "TypeScript is a superset of JavaScript."],
      ["Why use TypeScript?", "TypeScript helps you write safer and more maintainable code."],
    ],
  };


export default function About() {


    return (
        <main>
            <div className="container py-5">
                <div className="box has-text-centered">
                    <h1 className="title is-3" >Our Mission</h1>
                    <p>
                        To provide a safe and supportive environment for students to learn and grow.
                    </p>

                </div>

                <div className="box has-text-centered">
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <div className="content">
                                <h1 className="subtitle is-3 " >About Us</h1>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse est doloribus dignissimos perspiciatis necessitatibus iusto incidunt. Accusamus architecto deserunt, delectus itaque quibusdam dolore, eligendi repellendus quasi saepe non soluta!</p>
                                <p> <strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse est doloribus dignissimos perspiciatis necessitatibus iusto incidunt. Accusamus architecto deserunt, delectus itaque quibusdam dolore, eligendi repellendus quasi saepe non soluta!</strong></p>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse est doloribus dignissimos perspiciatis necessitatibus iusto incidunt. Accusamus architecto deserunt, delectus itaque quibusdam dolore, eligendi repellendus quasi saepe non soluta!</p>
                            </div>
                        </div>
                        <div className="column is-one-thirds">
                            <Image src="/cloquet_high_school.png" alt="about us" width={500} height={500} />
                        </div>
                    </div>
                </div>
                <div className="box has-text-centered">
                    <div className="columns">
                        <div className="column is-3">
                        <h3 className="subtitle is-3 has-text-centered " >Contact Us:</h3>
                            <ul>
                                <li ><Link className="button is-dark is-inverted" href="tel:3192024226" >(319) 202-4226</Link></li>
                                <li ><Link className="button is-dark is-inverted" href="mailto:mat@gmail.com" >mat@gmail.com</Link></li>
                            </ul>
                        </div>
                        <div className="column is-1 is-flex " >
                            <div className="" style={{ width: 1, height: '100%', backgroundColor: 'grey', }}></div>
                        </div>
                        <div className="column is-8">
                            <h3 className="subtitle is-3 has-text-centered " >Send a message:</h3>
                            <div className="content">
                                <ContactForm onCloseModal={() => { 
                                            document.getElementById('form-container')?.classList.remove('is-hidden');

                                            document.getElementById('success-container')?.classList.add('is-hidden');
    
                                            (document.getElementById('privates-form') as HTMLFormElement).reset();
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <h3 className="title is-2 has-text-centered " >Locations:</h3>
            <LocationCarousel />
            <FAQ faqProp={questions}/>
        </main>
    );
}

{/* <main className={styles.main} > */ }
{/* <div id="fb-root"/> */ }
{/* <Script async defer crossOrigin='anonymous' src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0' nonce='hpxHqHqr'/> */ }
{/* // <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0" nonce="hpxHqHqr"></script> */ }

{/* <section className='section is-large '> */ }
{/* <div className='container '>
    <div className="columns is-multiline is-centered">
        <div className="column is-4">
            <div className="box" style={{}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa omnis repudiandae nesciunt eveniet iure aliquam! Magni necessitatibus commodi architecto reiciendis, hic nulla quasi consectetur, nesciunt obcaecati quo a placeat!
            </div>
        </div>
        <div className="column is-4">
            <div className="card" style={{}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa omnis repudiandae nesciunt eveniet iure aliquam! Magni necessitatibus commodi architecto reiciendis, hic nulla quasi consectetur, nesciunt obcaecati quo a placeat!
            </div>
        </div>
        <div className="column is-4">
            <div className="box" style={{}}>
                <p className='is-family-sans-serif'>Hello</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa omnis repudiandae nesciunt eveniet iure aliquam! Magni necessitatibus commodi architecto reiciendis, hic nulla quasi consectetur, nesciunt obcaecati quo a placeat!
                <FBPage />

            </div>
        </div>
        <div className="column is-8">
            <div className="box has-background-primary-dark" style={{}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, culpa omnis repudiandae nesciunt eveniet iure aliquam! Magni necessitatibus commodi architecto reiciendis, hic nulla quasi consectetur, nesciunt obcaecati quo a placeat!
            </div>
        </div>
    </div>
    <FBPage />
</div>

<h3 style={{ fontSize: 42, justifyContent: 'center', paddingLeft: 12 }}>Locations:</h3>
<Carousel />

</main> */}


{/* <div style={{ 
                            display: 'flex', justifyContent: 'center', 
                            // height: 337, 
                    // position: 'relative',
                    // paddingTop: '110%',
                    // width: '100%',
                    // paddingTop: '35px',
                    // paddingBottom: '75%',    
                    // padd: 56.25%;
                    // padding-top: 35px;
                    // height: 0,
                    // backgroundColor:'red',
                    // overflow: 'hidden',
                    }}>
        {/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fandrewismusic%2Fposts%2Fpfbid02GBwLqP5pm432yToVq3R7ShTuKzfsk3is9AAYrL9bf9iNQ2zYqDRHpWdv5xCKNyPol&show_text=false&width=1000"  style={{ border:0,  margin:0, padding:0, alignSelf:'end' }}   allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
{/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0y6CbaxLSEbrcF6K3kLZe31kjGxUhV9MF32STk4aboHQv1tTsuQipJ5KLU9EvCbYBl%26id%3D100092468774489&show_text=false" style={{width: '500', height: '337', position:'absolute', top: 0, left: 0, bottom:0, right:0, backgroundColor: 'red'}} */ }
{/* ></iframe> */ }


{/* <FacebookEmbed url="https://www.facebook.com/andrewismusic/posts/451971596293956" width={550} /> */ }
{/* </div> */ }
{/* <div className="container is-large">
<div className="notification is-primary is-hidden-mobile">
    {/* <iframe src="https://www.instagram.com/p/BdJRABkDbXU/embed/" width="400" height="500" style={{objectFit:'fill'}} scrolling="no"  ></iframe> */}
// <div style={{ display: 'flex', justifyContent: 'center' }}>
{/* <div className="fb-post" data-href={"https://www.facebook.com/photo.php?fbid=209603668798591&amp;set=pb.100092468774489.-2207520000&amp;type=3"} data-width="" data-show-text="false"><blockquote cite={"https://www.facebook.com/permalink.php?story_fbid=209603685465256&amp;id=100092468774489"} className="fb-xfbml-parse-ignore"><p>When they trust you so much, they let go of the bar because they know you won&#039;t drop them! I always got you sweet Livi♡</p>Posted by <a href="https://www.facebook.com/people/Minnesota-Academy-of-Tumbling/100092468774489/">Minnesota Academy of Tumbling </a> on&nbsp;<a href={"https://www.facebook.com/permalink.php?story_fbid=209603685465256&amp;id=100092468774489"}>Friday, September 22, 2023</a></blockquote></div> */ }
{/* <div className="fb-page" data-href="https://www.facebook.com/profile.php?id=100092468774489" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/profile.php?id=100092468774489" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/profile.php?id=100092468774489">Minnesota Academy of Tumbling </a></blockquote></div> */ }

{/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0y6CbaxLSEbrcF6K3kLZe31kjGxUhV9MF32STk4aboHQv1tTsuQipJ5KLU9EvCbYBl%26id%3D100092468774489&show_text=false" width="500" height="497" style={{border:'none',overflow:'hidden'}}  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */ }
{/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0y6CbaxLSEbrcF6K3kLZe31kjGxUhV9MF32STk4aboHQv1tTsuQipJ5KLU9EvCbYBl%26id%3D100092468774489&show_text=true" width="500" height="609" style={{ border: 'none', overflow: 'hidden' }} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */ }
{/* </div> */ }


// </div>




// </div> */}

{/* <Carousel
                                swipeable={true}
                                draggable={true}
                                showDots={true}
                                responsive={responsive}
                                // deviceType='tablet'
                                // ssr={false} // means to render carousel on server-side.
                                infinite={false}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                <div className="card has-background-danger">
                                <Image
      src="/logo.jpg"
      alt="Vercel Logo"
      className={styles.vercelLogo}
      width={100}
      height={24}
      priority
    />
                                </div>
                                <div className="card has-background-link">
                                <Image
      src="/logo.jpg"
      alt="Vercel Logo"
      className={styles.vercelLogo}
      width={100}
      height={24}
      priority
    />
                                </div>
                                <div className="card has-background-danger">
                                <Image
      src="/logo.jpg"
      alt="Vercel Logo"
      className={styles.vercelLogo}
      width={100}
      height={24}
      priority
    />
                                </div>
                                <div className="card has-background-link">
                                <Image
      src="/logo.jpg"
      alt="Vercel Logo"
      className={styles.vercelLogo}
      width={100}
      height={24}
      priority
    />
                                </div>
</Carousel>; */}
