import React from "react";

import { links } from "../../utils/tools-icons";

import Button from "../../components/button/button.component";

import { NavLinksContainer, SideContainer, LinkWords } from './nav-links.style';

const NavLinks = ({ isAside, scrollHandler }) => {
    return (
        <NavLinksContainer isAside={isAside}>
            {
                links.map((link, index) =>
                    <LinkWords key={index} isAside={isAside} onClick={() => scrollHandler(link.title)}>
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