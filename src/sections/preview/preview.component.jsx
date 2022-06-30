import React from "react";

import './preview.style.scss';
import Button from "../../components/button/button.component";

const Preview = () => {

    return (
        <header className="preview-container">
            <section className="preview-left">
                <span>Hi, I'm Andrew</span>
                <span>Front-end developer</span>
                <span>------------------------------</span>
                <span>------------------------------</span>
                <div className="preview-buttons">
                    <Button name={'Hire Me'} type={'point1'} />
                    <Button name={'Projects'} type={'point2'} />
                </div>
            </section>
            {/* <section className="preview-right">
            </section> */}
        </header>
    );
}

export default Preview;