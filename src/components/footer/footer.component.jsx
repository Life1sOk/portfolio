import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './footer.style.scss';
import Input from '../form-input/input.component';

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
            <form className='form-main' ref={form} onSubmit={sendEmail}>
                <div className='footer-left'>
                    <Input label='Name' type='text' name='name' required />
                    
                    <Input label='E-mail' type='email' name='email' required />

                    <Input label='Company/Organization' type='text' name='company' required />
                </div>
                <div className='footer-right'>
                    <div className='message'>
                        <label>Message</label>
                        <textarea name="message" required />
                    </div>
                    
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
}

export default Footer;