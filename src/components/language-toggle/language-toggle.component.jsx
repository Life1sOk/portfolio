import React from "react";

import { ToggleContainer } from './language-toggle.style';
import LBox from "../language-box/language-box.component";

const languages = ['en', 'ru', 'cz'];

const LanguageToggle = () => {

    return(
        <ToggleContainer>
            {
                languages.map((lang, index) => <LBox lang={lang} position={(index + 1) % 2} key={index}/>)
            }
        </ToggleContainer>
    )
};

export default LanguageToggle;