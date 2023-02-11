import React from "react";
import { FaFilePdf } from 'react-icons/fa';

import ru from '../../assets/resume/Andrey_Tsoy_ru.pdf';
import eng from '../../assets/resume/Andrey_Tsoy_eng.pdf';
import cz from '../../assets/resume/Andrey_Tsoy_cz.pdf';

import { ResumeWrapper, ResumeContainer, Var, InfoFooter } from './resume.style';

const Resume = () => {

    return (
        <ResumeWrapper>
            <ResumeContainer>
                <Var href={eng} download>
                    <span>en</span>
                    <FaFilePdf />
                </Var>
                <Var href={cz} download>
                    <span>cz</span>
                    <FaFilePdf />
                </Var>
                <Var href={ru} download>
                    <span>ru</span>
                    <FaFilePdf />
                </Var>
            </ResumeContainer>
            <InfoFooter>Download file</InfoFooter>
        </ResumeWrapper>
    );
}

export default Resume;