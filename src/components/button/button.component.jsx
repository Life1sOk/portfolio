import React from "react";

import { Type1, Type2, TypeMail } from './button.style';
import Mailto from "../mailto/mailto.component";

const Button = ({ name, type }) => {
    return (
        <>
            {(type === 'type1') ?
                <Type1>{name}</Type1> : (type === 'type2') ?
                    <Type2>{name}</Type2> :
                    <TypeMail><Mailto email='andreytsoy.webdev@gmail.com'>{name}</Mailto></TypeMail>
            }
        </>
    );
}

export default Button