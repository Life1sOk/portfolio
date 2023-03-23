import React from "react";

import ButtonWindow from "../../components/buttons/window/window.component";

import { WelcomeStyle, HelloTitle, TextStyle, MyName, MyProf, AboutStyle } from './welcome.style';

const WelcomeContainer = () => {
    return (
        <WelcomeStyle>
            <HelloTitle>Hi, my name is</HelloTitle>
            <TextStyle>
                <MyName>Andrey Tsoy.</MyName>
                <MyProf>I build the frontend part of the web.</MyProf>
            </TextStyle>
            <AboutStyle>
                As a front-end web developer, I'm passionate about creating innovative digital experiences. I work closely with clients to bring their visions to life and deliver exceptional results with a focus on user experience.<br />
                <span className="acc">Let's build something great together</span>!
            </AboutStyle>
            <ButtonWindow />
        </WelcomeStyle>
    )
};

export default WelcomeContainer;