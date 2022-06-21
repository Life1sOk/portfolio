import React from "react";

import './preview.style.scss';
// import picture from '../../img/cute-programmer.webp';
import Button from "../button/button.component";
// import Animation from "../animation/animation.component";
import Canvas from "../canvas/canvas";

const Preview = () => {

    return(
        <div className="preview-container">
            <div className="preview-left">
                <span>Hi, I'm Andrew</span>
                <span>Front-end developer</span>
                <span>------------------------------</span>
                <span>------------------------------</span>
                <div className="preview-buttons">
                    <Button name={'Hire Me'} type={'point1'}/>
                    <Button name={'Projects'} type={'point2'}/>
                </div>
            </div>
            <div className="preview-right">
                {/* <img alt={picture} src={picture}/> */}
                {/* <Animation /> */}
                <Canvas />
            </div>
        </div>
    );
}

export default Preview;