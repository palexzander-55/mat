import ContactForm from "./contact_form";


export default function ModalForm({title} : {title: string}) {
  
  

      function closePrivatesModal(){
        document.getElementById('modal-js-example')?.classList.remove('is-active');
    
        
        document.getElementById('form-container')?.classList.remove('is-hidden');
        document.getElementById('success-container')?.classList.add('is-hidden');
    
        (document.getElementById('privates-form') as HTMLFormElement).reset();
        (document.getElementById('childNameField') as HTMLFormElement).classList.add("is-hidden");
      }

    return (
        <div id="modal-js-example" className="modal">
        <div className="modal-background" onClick={closePrivatesModal}></div>

        <div className="modal-content">
          <div className="box">
            <h3 className="title is-5 p-3 has-text-centered ">{title}</h3>
            <ContactForm onCloseModal={closePrivatesModal} />
          </div>
        </div>

        <button className="modal-close is-large" aria-label="close" onClick={closePrivatesModal}></button>
      </div>
    )
}