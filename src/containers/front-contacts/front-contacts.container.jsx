import React, { memo } from "react";

import { socialMedia } from "../../utils/social-media";

import IconSocial from "../../components/icon-social/icon-social.component";

import {
  SocialContacts,
  EmailLink,
  StartLine,
  Email,
} from "./front-contacts.style";

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
        <Email>andreytsoy.webdev@gmail.com</Email>
        <StartLine />
      </EmailLink>
    </>
  );
});

export default FrontContacts;
