import React, { forwardRef, memo } from "react";

import ContactMe from "../../containers/contact-me/contact-me.container";
import Copyright from "../../components/copyright/copyright.component";

import { ContactStyle, Info } from "./contact.style";

const ContactSection = memo(
  forwardRef((_, ref) => {
    return (
      <ContactStyle ref={ref}>
        <ContactMe />
        <Info>
          <Copyright />
        </Info>
      </ContactStyle>
    );
  })
);

export default ContactSection;
