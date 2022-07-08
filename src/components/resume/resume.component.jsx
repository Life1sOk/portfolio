import React, { useState } from "react";
import { FaFilePdf } from 'react-icons/fa';

import ru from '../../img/resume/Andrey_Tsoy_ru.pdf';
import eng from '../../img/resume/Andrey_Tsoy_eng.pdf';
import cz from '../../img/resume/Andrey_Tsoy_cz.pdf';
import { ResumeContainer, InOut, Var } from './resume.style';
import Button from '../button/button.component';

const Resume = () => {
    const [openR, setOpenR] = useState(false)

    const togg = () => {
        setOpenR(!openR);
    }

    return (
        <ResumeContainer>
            <Button open={openR} name={'Resume'} type={'resume'} toggle={() => togg()} />
            <InOut toggle={openR}>
                <Var href={eng} download><span>Eng</span><FaFilePdf /></Var>
                <Var href={cz} download><span>Cz</span><FaFilePdf /></Var>
                <Var href={ru} download><span>Ru</span><FaFilePdf /></Var>
            </InOut>
        </ResumeContainer>
    );
}

export default Resume;