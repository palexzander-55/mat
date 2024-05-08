'use client'

import Link from "next/link";

import styles from './page.module.css';
import ContactForm from "@/app/components/contact_form";
import ModalForm from "@/app/components/modal_form";

export default function Schedule() {
  function classScheduleByDay(day: string) {
    return (
      <div className="has-text-centered" id={styles.scheduleIframe} data-day={day}>
        <h1 className="title is-3 has-text-primary mb-1 mt-3"  >{day}</h1>
        <iframe className={styles.scheduleIframe} style={{ border: 0, width: '100%', colorScheme:'dark' }} loading="lazy" data-day={day} allowFullScreen src={`https://app.jackrabbitclass.com/jr3.0/Openings/OpeningsDirect?OrgId=551569&ClassDays=${day}`}></iframe>
      </div>
    );
  }

  

  function openPrivatesModal(){
    document.getElementById('modal-js-example')?.classList.add('is-active');
  }

  function closePrivatesModal(){
    document.getElementById('modal-js-example')?.classList.remove('is-active');

    
    document.getElementById('form-container')?.classList.remove('is-hidden');
    document.getElementById('success-container')?.classList.add('is-hidden');

    (document.getElementById('privates-form') as HTMLFormElement).reset();
  }

  return (
    <main>
      <div className="container pb-3">
        <h1 className="title is-1 pt-3" style={{ }}>Class Schedule</h1>

        {/* <Link className="navbar-item" href="/classes/locations/cloquet" >Cloquet</Link>
          <Link className="navbar-item" href="/classes/locations/duluth" >Duluth</Link>
          <Link className="navbar-item" href="/classes/locations/proctor" >Proctor</Link>
          <Link className="navbar-item" href="/classes/locations/twoharbors" >Two Harbors</Link> */}
        <div className="columns is-vcentered">

          <div className="column is-2 has-text-centered ">
            <h3 className="title is-4 pl-3 has-text-link" style={{ wordBreak: 'keep-all' }}>Locations:</h3>
          </div>

          <div className="column is-10">
            <nav className="breadcrumb is-large has-dot-separator" aria-label="breadcrumbs">
              <ul>
                <li ><Link className="button m-3 pl-3" href="/classes/locations/cloquet" >Cloquet</Link></li>
                <li ><Link className="button m-3" href="/classes/locations/cloquet" >St. Lukes</Link></li>
                <li ><Link className="button m-3" href="/classes/locations/cloquet" >Two Harbors</Link></li>
                <li ><Link className="button m-3 " href="/classes/locations/cloquet" >Bayview</Link></li>
                <li ><Link className="button m-3" href="/classes/locations/cloquet" >Silver Bay</Link></li>
                <li ><Link className="button m-3" href="/classes/locations/cloquet" >Hermantown</Link></li>
              </ul>
            </nav>
          </div>

        </div>

        {classScheduleByDay("Monday")}
        {classScheduleByDay("Tuesday")}
        {classScheduleByDay("Wednesday")}
        {classScheduleByDay("Thursday")}
        {classScheduleByDay("Friday")}
        {classScheduleByDay("Saturday")}
        <div className="has-text-centered" id={styles.scheduleIframe} data-day="Sunday">
          <h1 className="title is-3 has-text-primary mb-1 mt-3" style={{ }}>Sunday</h1>
          <div style={{ border: 0, width: '100%', height: '100%', backgroundColor:'white'}}>
            <h1 className="title is-3 pt-4 ">No Class!</h1>
            <p className="has-text-primary p-3 is-size-5">Limited Privates Available</p>
            <button className="button my-2  is-outlined is-link" onClick={openPrivatesModal}>Request Privates</button>
          </div>
        </div>

      </div>
      <ModalForm title="Request privates by filling out the form below:" />
      {/* <div id="modal-js-example" className="modal">
        <div className="modal-background" onClick={closePrivatesModal}></div>

        <div className="modal-content">
          <div className="box">
            <ContactForm/>
          </div>
        </div>

        <button className="modal-close is-large" aria-label="close" onClick={closePrivatesModal}></button>
      </div> */}
    </main>
  );
}