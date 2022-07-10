import React from "react";

import { AboutContainer, AboutMe, JustLine } from './about.style';

const About = ({ about }) => {
    return (
        <AboutContainer name='about' ref={about}>
            <JustLine />
            <AboutMe>
                <span>About</span>
                <p>Биржа копирайтинга Text.ru — это достойный заработок для копирайтеров и возможность заказать текст у профессиональных авторов. Здесь вы можете реализовать свой творческий потенциал или приобрести уникальные статьи для нужд своего сайта.</p>
            </AboutMe>
        </AboutContainer>
    );
}

export default About;