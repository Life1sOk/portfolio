import React from "react";

import { MainContainer, Introduction, Hello, Iam, Position, Mission, MyPrinciple, Buttons, Img, Foto } from './preview.style';
import Animation from "../../components/animation/animation.component";
import Button from "../../components/button/button.component";
import MyFoto from '../../img/foto-preview.png';
import Resume from "../../components/resume/resume.component";

const Preview = ({ preview, projects }) => {

    const handleClick = () => {
        projects.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <MainContainer name='preview' ref={preview}>
            <Introduction>
                <Hello>
                    <Iam>Hello, I'm Andrey</Iam>
                    <Position>Front End Developer</Position>
                </Hello>
                <Mission>
                    <MyPrinciple>I always try to be one step ahead in my work
                        and exceed your expectations.</MyPrinciple>
                </Mission>
                <Buttons>
                    <Resume />
                    <Button handleClick={handleClick} name={'Projects'} type={'type2'} />
                </Buttons>
            </Introduction>
            <Foto>
                <Animation />
                <Img alt="foto" src={MyFoto} />
            </Foto>
        </MainContainer>
    );
}

export default Preview;