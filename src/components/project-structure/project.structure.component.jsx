import React from "react";

import './project.structure.style.scss';
import Button from '../button/button.component';

const ProjectStructure = ({project}) => {
    const { title, img, tools, discription, link } = project
    return(
        <div className="project-structure-container">
            <div className="project-left">
                <img alt={`${title}`} src={img}/>
                <div className="tools-container">
                    <h3>Tools:</h3>
                    {tools.map(tool => <>{tool}</>)}
                </div>
            </div>
            <div className="project-right">
                <h2>{title}</h2>
                <div className="discription">{discription}</div>
                <Button type={'point3'} name={'Link'} onClick={link}/>
            </div>
        </div>
    );
}

export default ProjectStructure;