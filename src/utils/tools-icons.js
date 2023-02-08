import { FaCss3Alt, FaReact, FaSass } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiTypescript, SiStyledcomponents, SiFirebase, SiHtml5 } from 'react-icons/si';

export const basicLevel = [
    {
        id: 3,
        name: 'HTML5',
        icon: <SiHtml5 />,
        color: '#FF6D00',
        left: '0',
        top: '0',
        rotate: 0,
        duration: 0.5,
    },
    {
        id: 2,
        name: 'CSS3',
        icon: <FaCss3Alt />,
        color: '#039BE5',
        left: 43,
        top: '0',
        rotate: 0,
        duration: 0.8,
    },
    {
        id: 1,
        name: 'JavaScript',
        icon: <SiJavascript />,
        color: '#FFD600',
        left: 96,
        top: '',
        rotate: 0,
        duration: 1.1,
    },
];

export const secondLevel = [
    {
        id: 2,
        name: 'React.js',
        icon: <FaReact />,
        color: '#80DEEA',
        left: 24,
        top: -50,
        rotate: 25,
        duration: 1.4,
    },
    {
        id: 1,
        name: 'Redux',
        icon: <SiRedux />,
        color: '#7E57C2',
        left: 72,
        top: -50,
        rotate: 25,
        duration: 1.7,
    },
];

export const topLevel = {
    id: 1,
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: '#1976D2',
    left: 48,
    top: -100,
    rotate: 25,
    duration: 2,
};

export const tierOne = [
    {
        name: 'HTML5',
        icon: <SiHtml5 />,
        time: 0.3,
    },
    {
        name: 'CSS3',
        icon: <FaCss3Alt />,
        time: 0.6,
    },
    {
        name: 'JavaScript',
        icon: <SiJavascript />,
        time: 0.9,
    },
];

export const tierTwo = [
    {
        id: 0,
        name: 'React.js',
        icon: <FaReact />,
        time: 1.2,
    },
    {
        id: 2,
        name: 'Redux',
        icon: <SiRedux />,
        time: 1.5,
    },
    {
        id: 1,
        name: 'Sass',
        icon: <FaSass />,
        time: 1.8,
    },
    {
        id: 3,
        name: 'TypeScript',
        icon: <SiTypescript />,
        time: 2.1,
    },
    {
        id: 4,
        name: 'Styled comp.',
        icon: <SiStyledcomponents />,
        time: 2.4,
    }
];

export const tierThree = [
    {
        id: 1,
        name: 'Firebase',
        icon: <SiFirebase />,
        time: 2.7,
    }
];