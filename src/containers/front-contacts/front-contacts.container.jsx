import React, { memo } from "react";

import { locationBasics, socialMedia } from "../../utils/social-media";

import Mailto from "../../components/mail-to/mail-to.component";
import IconSocial from "../../components/icon-social/icon-social.component";

import { SocialContacts, EmailLink, StartLine, Email } from "./front-contacts.style";

const FrontContacts = memo(() => {
  return (
    <>
      <SocialContacts>
        {socialMedia.map((social, index) => (
          <IconSocial key={index} data={social} />
        ))}
        <StartLine />
      </SocialContacts>
      <EmailLink>
        <Mailto email={locationBasics.email}>
          <Email>andreytsoy.webdev@gmail.com</Email>
        </Mailto>
        <StartLine />
      </EmailLink>
    </>
  );
});

export default FrontContacts;
