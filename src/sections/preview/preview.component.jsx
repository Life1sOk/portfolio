import React from "react";

import { MainContainer, Introduction, Hello, Iam, Position, Mission, MyPrinciple, Buttons, Img, Foto } from './preview.style';
import Animation from "../../components/animation/animation.component";
import Button from "../../components/button/button.component";
import MyFoto from '../../img/foto-preview.png';

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
                    <Button name={'Resume'} type={'type1'} />
                    <Button name={'Projects'} type={'type2'} />
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