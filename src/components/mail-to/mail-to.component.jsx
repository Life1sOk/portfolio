import React from "react";

import { MailLink } from "./mail-to.style";

const Mailto = ({ email, children }) => {

    return (
        <MailLink href={`mailto:${email}`}>
            {children}
        </MailLink>
    );
}

export default Mailto;