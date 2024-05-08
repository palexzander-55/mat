'use client'

import Link from "next/link";
import FAQ, { FaqProps } from "../components/faq";
import ModalForm from "../components/modal_form";

const questions: FaqProps = {
  questions: [
    ["What is TypeScript?", "TypeScript is a superset of JavaScript."],
    ["Why use TypeScript?", "TypeScript helps you write safer and more maintainable code."],
  ],
};

export default function Classes() {
  function openPrivatesModal(){
    document.getElementById('modal-js-example')?.classList.add('is-active');
  }

  return (
    <main>
      <div className="container px-2">
        <h1 className="title is-1 pt-3" style={{ }}>General Class Information</h1>

        <div className="section">
          <div className="content ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis nulla quia explicabo blanditiis quae, impedit ipsa repellat harum consequatur, dolore laborum corporis in? Eligendi explicabo ducimus aut sunt harum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis nulla quia explicabo blanditiis quae, impedit ipsa repellat harum consequatur, dolore laborum corporis in? Eligendi explicabo ducimus aut sunt harum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis nulla quia explicabo blanditiis quae, impedit ipsa repellat harum consequatur, dolore laborum corporis in? Eligendi explicabo ducimus aut sunt harum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis nulla quia explicabo blanditiis quae, impedit ipsa repellat harum consequatur, dolore laborum corporis in? Eligendi explicabo ducimus aut sunt harum?</p>
          </div>
          <div className="buttons is-centered ">
            <Link href="/classes/locations" >
              <button className="button is-dark is-medium ">
                <span>See our Locations</span>
              </button>
            </Link>
            <Link href="/classes/schedule" >
              <button className="button is-primary is-medium ">
                <span>Class Schedule</span>
              </button>
            </Link>
          </div>
        </div>


      </div>
      <section className="hero is-small is-info" style={{ backgroundColor: '#55A8DD' }} >
        <div className="hero-body">
            <div className="columns is-vcentered ">
              <div className='column is-6 has-text-centered'>
                <p className="title">
                  Limited Privates Available!
                </p>
              </div>
              <div className='column is-6 has-text-centered'>
                <Link className="button is-primary  is-large is-responsive is-rounded" href="/classes/locations/cloquet" > <strong>Request Privates</strong></Link>
              </div>
            </div>
        </div>
      </section>

      <FAQ faqProp={questions} />
      <ModalForm title="Request privates by filling out the form below:" />

    </main>
  );
}