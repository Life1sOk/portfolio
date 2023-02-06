import React from "react";

import { MainContainer, Introduction, Animation } from './preview.style';
// import Animation from "../../components/animation/animation.component";
import Button from "../../components/button/button.component";
import Resume from "../../components/resume/resume.component";

const Preview = ({ preview, projects }) => {

    const handleClick = () => {
        projects.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <MainContainer name='preview' ref={preview}>
            <Introduction>
                <h1 className="welcome">Welcome, I'm <span className="name">Andrey</span></h1>
                    <span className="spec">Front-end Developer </span> 
                <p className="ido">I turn new ideas into products and help people discover new possibilities. 
                <br />My work standards: 
                <span className="stand"> Quality</span>, 
                <span className="stand"> Reliability</span>,
                <span className="stand"> Result</span>!</p>
                <button>Projects --&gt;</button>
            </Introduction>
            <Animation>
            </Animation>
        </MainContainer>
    );
}

export default Preview;