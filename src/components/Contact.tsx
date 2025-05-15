import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;
        emailjs.sendForm(
            'service_tt1edhq',      // 🔁 Replace with your EmailJS Service ID
            'template_tjxyie7',     // 🔁 Replace with your EmailJS Template ID
            form.current,
            'QB9jCjBHXJvbbga1j'       // 🔁 Replace with your EmailJS Public Key
        ).then(
            () => {
                alert("Message sent successfully!");
                form.current?.reset();
            },
            (error) => {
                alert("Failed to send message. Try again.");
                console.error(error);
            }
        );
    };

    return (
        <section className="section" id="contact">
            <div className="container text-center">
                <p className="section-subtitle">How can you communicate?</p>
                <h6 className="section-title mb-5">Contact Me</h6>
                <form ref={form} onSubmit={sendEmail} className="contact-form col-md-10 col-lg-8 m-auto">
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <input type="text" name="user_name" className="form-control" placeholder="Your Name" required />
                        </div>
                        <div className="form-group col-sm-6">
                            <input type="email" name="user_email" className="form-control" placeholder="Enter Email" required />
                        </div>
                        <div className="form-group col-sm-12">
                            <textarea name="message" rows={6} className="form-control" placeholder="Write Something" required></textarea>
                        </div>
                        <div className="form-group col-sm-12 mt-3">
                            <input type="submit" value="Send Message" className="btn btn-outline-primary rounded" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;




// service_tt1edhq
// public key QB9jCjBHXJvbbga1j