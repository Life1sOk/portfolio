import React from "react";

import { IconSocialStyle } from './icon-social.style';

const IconSocial = ({ data }) => {
    const { icon, url } = data;

    return (
        <IconSocialStyle href={url} target='_blank' rel="noopener noreferrer">
            {icon}
        </IconSocialStyle>
    )
};

export default IconSocial;