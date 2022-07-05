import React from "react";

import { MainContainer, Introduction, Hello, Iam, Position, Mission, MyPrinciple, Buttons, Img, Foto } from './preview.style';
import './preview.style.jsx';
import Button from "../../components/button/button.component";
import MyFoto from '../../img/foto.jpg';

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
                    <Button name={'Hire Me'} type={'type1'} />
                    <Button name={'Projects'} type={'type2'} />
                </Buttons>
            </Introduction>
            <Foto>
                <Img alt="foto" src={MyFoto} />
            </Foto>
        </MainContainer>
    );
}

export default Preview;