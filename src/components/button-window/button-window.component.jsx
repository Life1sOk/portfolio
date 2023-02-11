import React, { useState } from "react";

import { ButtonBack, ButtonFront, ButtonWindowContainer, WindowActivator } from './button-window.style';

const ButtonWindow = ({ name, children, type }) => {
    const [ open, setOpen ] = useState(false);

    const toggleHandler = () => setOpen(!open);

    return (
        <ButtonBack type={type}>
            <ButtonFront open={open}>
                <WindowActivator onClick={toggleHandler}/>
                {name}
                {children && <span>&#8595;</span>}
                {open && children &&
                    <ButtonWindowContainer onClick={toggleHandler} type={type}>{children}</ButtonWindowContainer>
                }
            </ButtonFront>
        </ButtonBack>
    );
}

export default ButtonWindow;

