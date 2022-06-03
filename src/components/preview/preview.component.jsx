import React from "react";
import {ReactComponent as HtmlLogo} from '../../icons/icons8-html-5-48.svg';
import {ReactComponent as CssLogo} from '../../icons/icons8-css3.svg';
import {ReactComponent as JsLogo} from '../../icons/icons8-javascript.svg';
import {ReactComponent as ReactLogo} from '../../icons/icons8-react.svg';
import {ReactComponent as GitLogo} from '../../icons/icons8-git.svg';
import {ReactComponent as GithubtLogo} from '../../icons/icons8-github.svg';

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
                <h2>Skills</h2>
                <div className="basic-skills">
                    <div className="skill-container">
                        <span>HTML5</span>
                        <HtmlLogo />
                    </div>
                    <div className="skill-container">
                        <span>CSS3</span>
                        <CssLogo />
                    </div>
                    <div className="skill-container">
                        <span>Java Script</span>
                        <JsLogo />
                    </div>
                    <div className="skill-container">
                        <span>Git / Github</span>
                        <div className="git-container">
                            <GitLogo />
                            <GithubtLogo />
                        </div>
                    </div>
                </div>
                <div className="skill-container">
                    <span>React.js</span>
                    <ReactLogo />
                </div>
            </div>
        </div>
    );
}

export default Preview;