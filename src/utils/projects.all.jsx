import justImage from '../img/just.jpeg';
import Sio from '../img/projects-img/sio1.png'
import { nextLevel } from './icons.skills';

export const allProjects = [
    {
        title: 'SmAll in One',
        img: `${Sio}`,
        tools: [nextLevel[0].icon, nextLevel[1].icon, nextLevel[3].icon],
        discription: `It is a long established fact that a reader will be distracted by the readable  
        content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using`,
        git: 'https://github.com/Life1sOk/small-projects',
        site: 'https://life1sok.github.io/small-projects/',
    },
    {
        title: 'project2',
        img: `${justImage}`,
        tools: [nextLevel[0].icon, nextLevel[1].icon, nextLevel[3].icon],
        discription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        git: 'link to Github or somewhere...',
        site: '',
    },
    {
        title: 'project3',
        img: `${justImage}`,
        tools: [nextLevel[0].icon, nextLevel[1].icon, nextLevel[3].icon],
        discription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        git: 'link to Github or somewhere...',
        site: '',
    },
    {
        title: 'project4',
        img: `${justImage}`,
        tools: [nextLevel[0].icon, nextLevel[1].icon, nextLevel[3].icon],
        discription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        git: 'link to Github or somewhere...',
        site: '',
    },
];