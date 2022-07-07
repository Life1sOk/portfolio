import React, { useState } from "react";

import { ResumeContainer, Desk, InOut, Var } from './resume.style';
import Button from '../button/button.component';

const Resume = () => {
    const [openR, setOpenR] = useState(false)

    const togg = () => {
        setOpenR(!openR)
        console.log(openR)
    }

    return (
        <ResumeContainer>
            <Button name={'Resume'} type={'resume'} toggle={() => togg()} />
            <InOut toggle={openR}>
                <Var>Eng</Var>
                <Var>Cz</Var>
                <Var>Ru</Var>
            </InOut>
        </ResumeContainer>
    );
}

export default Resume;