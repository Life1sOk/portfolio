import React from "react";

import './projects.style.scss';
import ProjectStructure from "../../components/project-structure/project.structure.component";
// import { ReactComponent as JsLogo } from '../../icons/icons8-javascript.svg';
// import { ReactComponent as ReactLogo } from '../../icons/icons8-react.svg';

const allProjects = [
    {
        title: 'project1',
        img: 'https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg?w=2000',
        tools: [],
        discription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        link: 'link to Github or somewhere...',
    },
    {
        title: 'project2',
        img: 'https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg?w=2000',
        tools: [],
        discription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        link: 'link to Github or somewhere...',
    },
];

const Projects = () => {
    return (
        <main className="projects-container">
            {
                allProjects.map(project => {
                    return <ProjectStructure key={project.title} project={project} />
                })
            }
        </main>
    );
}

export default Projects