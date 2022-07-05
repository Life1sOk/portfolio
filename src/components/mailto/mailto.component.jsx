import React from "react";

import { MailLink } from "./mailto.style";

const Mailto = ({ email, subject, body, ...props }) => {
    return (
        <MailLink href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
            {props.children}
        </MailLink>
    );
}

export default Mailto;