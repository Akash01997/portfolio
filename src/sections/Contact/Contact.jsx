import styles from './ContactStyles.module.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_32p226f', 'template_bniwhl5', form.current, {
        publicKey: 'ysyXssgzlIcEqVoZW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} action="" onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {submitted && <p className={styles.successMessage}>Form submitted successfully!</p>}
    </section>
  );
}

export default Contact;
