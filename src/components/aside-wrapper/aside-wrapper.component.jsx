import React from "react";

import { BackToCloseMenu, MenuContainer } from './aside-wrapper.style';

const AsideWrapper = ({open, openToggle, children, side}) => {
    return(
        <>
            <BackToCloseMenu onClick={() => openToggle()} open={open} />
            <MenuContainer onClick={() => openToggle()} open={open} side={side}>
                {children}
            </MenuContainer>
        </>
    )
};

export default AsideWrapper;