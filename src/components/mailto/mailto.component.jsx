import React from "react";

import { MailLink } from "./mailto.style";

const Mailto = ({ email, subject, body, ...props }) => {

    return (
        <MailLink href={`mailto:${email}`}>
            {props.children}
        </MailLink>
    );
}

export default Mailto;