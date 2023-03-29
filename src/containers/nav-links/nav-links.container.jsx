import React from "react";

import { links } from "../../utils/tools-icons";

import Button from "../../components/button/button.component";

import { NavLinksContainer, SideContainer, LinkWords } from './nav-links.style';

const NavLinks = ({ isAside, scrollHandler, openNavHandler }) => {

    const scrollAndOpenHandler = (link) => {
        if (scrollHandler) scrollHandler(link);
        if (openNavHandler) openNavHandler();
    };

    return (
        <NavLinksContainer isAside={isAside}>
            {
                links.map((link, index) =>
                    <LinkWords key={index} isAside={isAside} onClick={() => scrollAndOpenHandler(link.title)}>
                        <span className="number">{`0${index + 1}. `}</span>
                        <span className="link">{link.title}</span>
                    </LinkWords>
                )
            }
            <SideContainer>
                <Button />
            </SideContainer>
        </NavLinksContainer>
    )
};

export default NavLinks;