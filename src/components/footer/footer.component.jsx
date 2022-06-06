import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './footer.style.scss';

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_6ifzczz","template_x4pwhcs", e.target, process.env.REACT_APP_API_KEY_EMAILJS)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    //   console.log(process.env.REACT_APP_API_KEY_EMAILJS)

    return(
        <div className="footer-container">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" required />
                <label>Email</label>
                <input type="email" name="email" required />
                <label>Company/Organization</label>
                <input type="text" name="name" required />
                <label>Message</label>
                <textarea name="message" required />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Footer;