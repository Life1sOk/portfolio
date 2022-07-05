import React from "react";

import { Type1, Type2, TypeMail } from './button.style';

const Button = ({ name, type }) => {
    return (
        <>
            {(type === 'type1') ?
                <Type1>{name}</Type1> : (type === 'type2') ?
                    <Type2>{name}</Type2> :
                    <TypeMail>{name}</TypeMail>
            }
        </>
    );
}

export default Button