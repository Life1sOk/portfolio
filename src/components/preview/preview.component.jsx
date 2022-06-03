import React from "react";

import './preview.style.scss';

const Preview = () => {
    return(
        <div className="preview-container">
            <div className="preview-left">
                <span>Hi, I'm Andrew</span>
                <span>Front-end developer</span>
                <span>------------------------------</span>
                <span>------------------------------</span>
                <div className="preview-buttons">
                    <button>CV</button>
                    <button>Contact</button>
                </div>
            </div>
            <div className="preview-right">
                
            </div>
        </div>
    );
}

export default Preview;