import React from "react";

import './preview.style.scss';
import Button from "../../components/button/button.component";
import Animation from "../../components/animation/animation.component";

const Preview = () => {

    return (
        <header className="preview-container">
            <section className="preview-left">
                <div className="article">
                    <p className="bigg">Hello, I'm Andrey,</p>
                    <p className="small">Front End Developer</p>
                </div>
                <div className="middle">
                    <p className="phrase">I always try to be one step ahead in my work and exceed your expectations.</p>
                </div>
                <div className="preview-buttons">
                    <Button name={'Hire Me'} type={'point1'} />
                    <Button name={'Projects'} type={'point2'} />
                </div>
            </section>
            <section className="preview-right">
            </section>
        </header>
    );
}

export default Preview;