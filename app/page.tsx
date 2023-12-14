import Image from 'next/image'
import styles from './page.module.css'
import Carousel from './components/swiper'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className='section'>
        <h1>Minnesota Academy of Tumbling</h1>
      </div> */}

      <div className='section is-large has-background-primary'>
        <h1 className='title is-1 is-flex is-align-items-center is-justify-content-center'>Welcome to the Minnesota Academy of Tumbling</h1>
        <h2 className='subtitle is-2 is-flex is-align-items-center is-justify-content-center'>A place to learn about tumbling</h2>
      </div>

      <div className='columns is-multiline is-centered is-gapless'>
        <div className='column is-6' >
          {/* <div className='box has-background-warning' style={{height:'100%', objectFit:'cover', width:'100%'}}> */}
            {/* <div className='image-container'> */}
            <figure className="is-flex is-align-items-center is-justify-content-center image " style={{height:'100%', width:'100%', objectFit:'fill'}}>
              <img src="https://bulma.io/images/placeholders/800x480.png" style={{height:'100%', width:'100%', objectFit:'fill'}}/>
            </figure>
            {/* </div> */}
          {/* </div> */}
        </div>

        <div className='column is-6'>
          <div className='section is-medium has-background-warning ' style={{height:'100%'}}>
          <h1 className='title is-1 is-size-3-mobile'>Welcome to the Minnesota Academy of Tumbling</h1>
            <h2 className='subtitle is-2 is-size-5-mobile'>A place to learn about tumbling</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui officia praesentium, sunt ullam neque dicta molestias distinctio maiores aspernatur tempora blanditiis consequuntur sed? Neque beatae repudiandae qui magnam necessitatibus? Ducimus?
          </div>
        </div>

        <div className='column is-6 is-hidden-tablet' >
        <figure className="is-flex is-align-items-center is-justify-content-center image is-5by3">
              <img src="https://bulma.io/images/placeholders/800x480.png" />
            </figure>
        </div>
   
        <div className='column is-6'>
          <div className='section is-medium has-background-warning ' style={{height:'100%'}}>
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
            <figure className="is-flex is-align-items-center is-justify-content-center image " style={{height:'100%', width:'100%', objectFit:'fill'}}>
              <img src="https://bulma.io/images/placeholders/800x480.png" style={{height:'100%', width:'100%', objectFit:'fill'}}/>
            </figure>
            {/* </div> */}
          {/* </div> */}
        </div>

        <div className='column is-6'>
          <div className='section is-medium has-background-warning ' style={{height:'100%'}}>
          <h1 className='title is-1 is-size-3-mobile'>Welcome to the Minnesota Academy of Tumbling</h1>
            <h2 className='subtitle is-2 is-size-5-mobile'>A place to learn about tumbling</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui officia praesentium, sunt ullam neque dicta molestias distinctio maiores aspernatur tempora blanditiis consequuntur sed? Neque beatae repudiandae qui magnam necessitatibus? Ducimus?
          </div>
        </div>
      </div>


      <h1 className='title is-1 is-size-3-mobile has-text-centered has-text-weight-bold' style={{color:'white'}}>Locations:</h1>
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
