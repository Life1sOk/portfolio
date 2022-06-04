import React from "react";

import './skills.style.scss';
import {ReactComponent as HtmlLogo} from '../../icons/icons8-html-5-48.svg';
import {ReactComponent as CssLogo} from '../../icons/icons8-css3.svg';
import {ReactComponent as JsLogo} from '../../icons/icons8-javascript.svg';
import {ReactComponent as ReactLogo} from '../../icons/icons8-react.svg';
import {ReactComponent as GitLogo} from '../../icons/icons8-git.svg';
import {ReactComponent as GithubLogo} from '../../icons/icons8-github.svg';

const Skills = () => {
    return(
        <div className="skills-container">
            <div className="already">
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
                            <GithubLogo />
                        </div>
                    </div>
                </div>
                <div className="skill-container">
                    <span>React.js</span>
                    <ReactLogo />
                </div>
            </div>
            <div className="in-scope">
                <h2>In process</h2>
                <div>Type Script</div>
                <div>GraphQl</div>
                <div>Redux</div>
            </div>
        </div>
    );
}

export default Skills;