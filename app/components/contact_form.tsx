'use client'

import { get } from "https";


export default function ContactForm({ onCloseModal,  }: { onCloseModal: () => void,  }) {


    // useEffect(() => {
    //     if (typeof document !== 'undefined') {
    //         if (document.getElementById("send")) {
    //             (document.getElementById("send") as HTMLInputElement).addEventListener("click", validateForm);
    //         }
    //     }
    // });
    // function closePrivatesModal() {
    //     document.getElementById('modal-js-example')?.classList.remove('is-active');

    //     document.getElementById('form-container')?.classList.remove('is-hidden');
    //     document.getElementById('success-container')?.classList.add('is-hidden');

    //     (document.getElementById('privates-form') as HTMLFormElement).reset();
    // }

    function validateForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //gets the name
        let name = (document.getElementById("contact-name") as HTMLInputElement).value;
        //gets the email
        let email = (document.getElementById("contact-email") as HTMLInputElement).value;
        //gets the message
        let message = (document.getElementById("contact-message") as HTMLInputElement).value;

        let isMember = (document.getElementById("contact-is-member") as HTMLInputElement).checked;
        let isNotMember = (document.getElementById("contact-is-not-member") as HTMLInputElement).checked;
        console.log(isMember, isNotMember);

        //checks if all fields have been filled before sending message.
        if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
            alert("all fields must be filled");
        } else {
            //send the message
            sendMessage(name, email, message);

            // document.getElementById('form-container')?.classList.add('is-hidden');
            // document.getElementById('success-container')?.classList.remove('is-hidden');
            document.getElementById('send-button')?.classList.add('is-loading');


        }
    }

    //sends information to firebase
    function sendMessage(name: string, email: string, message: string) {
        // sends the name, email and message by passing them as url parameters
        get( "https://us-central1-minnesota-tumbling.cloudfunctions.net/sendMail?name=" +
        name +
        "&email=" +
        email +
        "&message=" +
        message +
        "", (res) => {

            // Declare a variable to store the response chunks
            let data = "";

            // Listen for data events
            res.on('data', (chunk) => {
                // Concatenate the chunks
                data += chunk;
              });

            // Listen for end event
            res.on('end', () => {
                // Log the full response body
                console.log(data);

                if(data == "Message Sent"){
            document.getElementById('form-container')?.classList.add('is-hidden');

            document.getElementById('send-button')?.classList.remove('is-loading');

                    document.getElementById('success-container')?.classList.remove('is-hidden');
                }
            });

        }).on("error", () => {
            console.log("error");
        });
        // window.location.href =
            // "https://us-central1-minnesota-tumbling.cloudfunctions.net/sendMail?name=" +
            // name +
            // "&email=" +
            // email +
            // "&message=" +
            // message +
            // "";
    }

    function onRadioClick() {
       let isMember = (document.getElementById("contact-is-member") as HTMLInputElement).checked;
        if (isMember) {
            (document.getElementById("childNameField") as HTMLInputElement).classList.remove("is-hidden");
        } else {
            if (!(document.getElementById("childNameField") as HTMLInputElement).classList.contains("is-hidden")) {
                (document.getElementById("childNameField") as HTMLInputElement).classList.add("is-hidden");
            }
        }
    }

    function resetForm(event: React.MouseEvent) {
        event.preventDefault();
        (document.getElementById('privates-form') as HTMLFormElement).reset();
        (document.getElementById('childNameField') as HTMLFormElement).classList.add("is-hidden");
    }

    return (
        <div>
            <form id="privates-form" onSubmit={validateForm} onKeyDown={(event) => {if(event.key == 'Enter'){
                event.preventDefault();
                validateForm(event);
            }}} >
                <div className="contact-form">
                    <div className="container-out has-text-centered" id="form-container">
                        <div className="container-in">
                            <div className="contact-form ">
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input id="contact-name" className="input" type="text" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input id="contact-email" className="input" type="text" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Message</label>
                                    <div className="control">
                                        <textarea id="contact-message" className="textarea" placeholder="Message"></textarea>
                                    </div>
                                </div>

                                <div className="field is-horizontal">
                                    <div className="field-label">
                                        <label className="label" style={{whiteSpace:'nowrap'}}>Already a student?</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field is-narrow">
                                            <div className="control " >
                                                <label className="radio">
                                                    <input type="radio" style={{ colorScheme: 'light' }} onClick={onRadioClick} id="contact-is-member" name="member" value={"is-member"} />
                                                    Yes
                                                </label>
                                                <label className="radio">
                                                    <input type="radio" style={{ colorScheme: 'light' }} onClick={onRadioClick} id="contact-is-not-member" name="member" value={"is-not-member"} />
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        <div className="field is-narrow is-hidden" id="childNameField">
                                            <div className="control">
                                                <input id="contact-message" className="input" type="text" placeholder="Student Name" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="field is-grouped is-grouped-centered ">
                                    <div className="control">
                                        <button className="button is-link is-light " onClick={resetForm}>Clear</button>
                                    </div>
                                    <div className="control">
                                        <button className="button is-link" id="send-button">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </form>

            <div className="container-out is-hidden has-text-centered" id="success-container">
                <h1 className="title is-1 pt-3" >Success</h1>

                <button className="button is-primary " id="close" onClick={onCloseModal}>Close</button>
            </div>
        </div>
    );


}