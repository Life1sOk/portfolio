import React from "react";

import { AboutContainer, AboutMe, JustLine } from './about.style';

const About = () => {
    return (
        <AboutContainer name='about'>
            <JustLine />
            <AboutMe>
                <h2>About</h2>
                <p>Биржа копирайтинга Text.ru — это достойный заработок для копирайтеров и возможность заказать текст у профессиональных авторов. Здесь вы можете реализовать свой творческий потенциал или приобрести уникальные статьи для нужд своего сайта.</p>
            </AboutMe>
        </AboutContainer>
    );
}

export default About;