import React from "react";
import { Link } from "react-scroll/modules";

import { MainContainer, Introduction, Hello, Iam, Position, Mission, MyPrinciple, Buttons, Img, Foto } from './preview.style';
import Animation from "../../components/animation/animation.component";
import Button from "../../components/button/button.component";
import MyFoto from '../../img/foto-preview.png';
import Resume from "../../components/resume/resume.component";

const Preview = () => {

    return (
        <MainContainer name='preview'>
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
                    <Link to='projects' smooth={true} spy={true}>
                        <Button name={'Projects'} type={'type2'} />
                    </Link>
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