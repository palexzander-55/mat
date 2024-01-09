'use client'

import FAQ, { FaqProps } from '../components/faq';
import ModalForm from '../components/modal_form';
import styles from './page.module.css'

const questions: FaqProps = {
  questions: [
    ["What is TypeScript?", "TypeScript is a superset of JavaScript."],
    ["Why use TypeScript?", "TypeScript helps you write safer and more maintainable code."],
  ],
};

function openPrivatesModal() {
  document.getElementById('modal-js-example')?.classList.add('is-active');
}


export default function Team() {


  return (
    <main>
      <div className="container">

        <h1 className="title is-size-1-desktop pt-3 px-3" style={{}}>Competitive Tumbling</h1>

        <div className={`columns ${styles.customColumns}`}>
          <div className="column is-4">
            <figure className="image is-5by3" >
              <img src='/cloquet_high_school.png' />
            </figure>
          </div>



          <div className="column is-8">
            <h3 className="subtitle is-3 is-size-3-desktop pt-3 has-text-centered" style={{}}>Meet Our Team</h3>
            <div className='columns'>
              <div className='column is-5 has-text-right is-size-5'>
                <ul style={{ listStyleType: 'disc', display: 'inline-block', textAlign: 'left' }}>
                  <li>Amos Johnson</li>
                  <li>Naomi Richards</li>
                  <li>Alex Henderson</li>
                  <li>Amos Johnson</li>
                  <li>Naomi Richards</li>
                  <li>Alex Henderson</li>
                </ul>
              </div>
              <div className="column is-2 has-text-centered">
                <div style={{width:2, backgroundColor: '#55A8DC', height:'100%', display: 'inline-block'}}></div>
              </div>
              <div className='column is-5 has-text-left is-size-5'>
                <ul style={{ listStyleType: 'disc', display: 'inline-block', textAlign: 'left' }}>
                  <li>Amos Johnson</li>
                  <li>Naomi Richards</li>
                  <li>Alex Henderson</li>
                  <li>Amos Johnson</li>
                  <li>Naomi Richards</li>
                  <li>Alex Henderson</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="hero is-small is-primary has-text-centered-mobile mt-6">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered ">
              <div className='column is-9 '>
                <p className="title is-4 ">
                  Want to join our team?
                </p>
              </div>
              <div className='column is-2 '>
                <button className="button is-info  is-large is-responsive is-rounded" onClick={openPrivatesModal}> <strong>Request Info</strong></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-4">
        <h3 className="title is-3 pt-3 " style={{}}>Upcoming USTA Meets</h3>
        <ul>
          <li>
            <div className="box m-3" >
              <p className="title is-3" >Marshaltown, Iowa</p>
              <p className="subtitle is-3" >03/21/2024</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem aliquid aspernatur vitae natus? Maiores ipsa molestiae nisi accusamus alias aspernatur, perferendis ratione ut dolores, voluptatum, molestias maxime perspiciatis fuga?</p>
              <div className="buttons is-right" >
                <button className="button is-dark ">Directions</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <FAQ faqProp={questions} />
      <ModalForm title="Request info about joining team by filling out the form below:" />
    </main>
  );
}


