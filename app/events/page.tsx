'use client'
import CoverflowSwiper from '../components/coverflow_swiper';
// iframe.contentWindow.document.body.style.backgroundColor  = 'white';

import styles from './page.module.css'

export default function Event() {
  const handleOnClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Summer Performance",
          text: "Summer PerformanceSummer PerformanceSummer Performance",
          url: document.location.href,
        })
        .then(() => {
          console.log('Successfully shared');
        })
        .catch(error => {
          console.error('Something went wrong sharing the blog', error);
        });
    }
  };

  return (
    <main >


      <div className="container is-fluid" >
        <h1 className="title is-3 pt-3" style={{ }}>Events, Camps, Performances, and more!</h1>


        <div className="columns is-vcentered">
          <div className="column is-half has-text-centered">
            <iframe style={{ maxWidth: '1000px', width: '100%', height: '650px', alignContent: 'center', backgroundColor: 'black', }} loading="lazy" allowFullScreen src="https://app.jackrabbitclass.com/eventcalendar.asp?orgid=551569"></iframe>
          </div>
          <div className="column is-half ">
            <h1 className="title is-3" style={{ }}>Upcoming Events</h1>
            <ul>
              <li>
                <div className="box m-3" >
                  <h1 className="title is-3" >Spring Performance</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem aliquid aspernatur vitae natus? Maiores ipsa molestiae nisi accusamus alias aspernatur, perferendis ratione ut dolores, voluptatum, molestias maxime perspiciatis fuga?</p>
                  <div className="buttons is-right" >
                    <button className="button is-primary is-light" onClick={handleOnClick}>Share</button>
                    <button className="button is-dark">Order Tickets</button>
                  </div>
                </div>
              </li>
              <li>
                <div className="box m-3" >
                  <h1 className="title is-3" >Summer Camp</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem aliquid aspernatur vitae natus? Maiores ipsa molestiae nisi accusamus alias aspernatur, perferendis ratione ut dolores, voluptatum, molestias maxime perspiciatis fuga? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate consectetur consequuntur officia accusantium, assumenda quae? Totam fuga itaque, numquam voluptatum quisquam reiciendis. Nesciunt ex minus nam aliquid, modi exercitationem nostrum?</p>
                  <div className="buttons is-right" >
                    <button className="button is-primary is-light">Share</button>
                    <button className="button is-dark">Register Now</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>


        </div>
        <h1 className="title is-3 has-text-centered" >Past Events</h1>
        <ul>
          <li>
            <div className="box m-3 " >
              <div className="columns is-vcentered">
                <div className="column ">
                  <h1 className="title is-3" >Winter Performance 2023</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, enim nam neque qui atque delectus consectetur! Obcaecati, quos repellat, voluptates maxime sed atque laudantium nulla quaerat deleniti vel commodi praesentium.</p>
                </div>
                <div className="column  is-two-thirds-tablet is-two-thirds-desktop is-half-widescreen is-half-fullhd">
                  <CoverflowSwiper />
                </div>
              </div>
            </div>
          </li>
        </ul>

      </div>

      {/* <div className="container is-fluid" style={{height:800, justifyContent:'center', display:'flex'}}>
          <iframe  style={{border:0, width:800, height:'100%', alignContent:'center', backgroundColor:'black'}} loading="lazy" allowFullScreen src="https://app.jackrabbitclass.com/eventcalendar.asp?orgid=551569"></iframe>
      </div> */}
    </main>
  );
}