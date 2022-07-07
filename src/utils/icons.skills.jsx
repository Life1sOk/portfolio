import React from 'react';

import html from '../img/icons-img/html5.svg';
import css from '../img/icons-img/css3.svg';
import js from '../img/icons-img/javascript.svg';
import react from '../img/icons-img/react.svg';
import sass from '../img/icons-img/sass.svg';
import redux from '../img/icons-img/redux.svg';
import ts from '../img/icons-img/typescript.svg';

export const basicLevel = [
    {
        name: 'HTML5',
        icon: <img alt='html' src={html} />,
    },
    {
        name: 'CSS3',
        icon: <img alt='css' src={css} />,
    },
    {
        name: 'JavaScript',
        icon: <img alt='js' src={js} />,
    },
];

export const nextLevel = [
    {
        id: 0,
        name: 'React.js',
        icon: <img alt='react' src={react} />,
    },
    {
        id: 1,
        name: 'Sass',
        icon: <img alt='sass' src={sass} />,
    },
    {
        id: 2,
        name: 'Redux',
        icon: <img alt='redux' src={redux} />,
    },
    {
        id: 3,
        name: 'TypeScript',
        icon: <img alt='ts' src={ts} />,
    },
];
