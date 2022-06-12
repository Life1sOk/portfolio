import React from 'react';


import './footer.style.scss';
import Form from '../form/form.component';
import ContactIcons from '../contact-icons/contact.icons.component';

const Footer = () => {
 
    return(
        <div className="footer-container">
            {/* <Form /> */}
            <ContactIcons />
        </div>
    );
}

export default Footer;