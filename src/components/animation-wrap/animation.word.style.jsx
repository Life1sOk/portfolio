import styled, { keyframes } from 'styled-components';

const run = keyframes`
    0% {
        transform: translateY(700px);
    }
    100% {
        transform: translateY(0px);
    }
`;

const run2 = keyframes`
    0% {
        transform: translateY(550px);
    }
    100% {
        transform: translateY(0px);
    }
`;

const run3 = keyframes`
    0% {
        transform: translateY(480px);
    }
    100% {
        transform: translateY(0px);
    }
`;

export const AnimationWordContainer = styled.div`
    font-family: 'Shadows Into Light', cursive;
    opacity: 0.2;
    font-size: 2rem;
    z-index: 1;
    position: absolute;
    top: -100px;
    left: ${props => props.left};
    animation: ${run} 20s linear infinite;
    animation-delay: ${props => props.delay || 0};

    @media only screen and (max-width: 1068px) {
        ${'' /* left: ${props => `calc(${props.left} / 2)`}; */}
        animation: ${run2} 15s linear infinite;
        animation-delay: ${props => props.delay || 0};
    }

    @media only screen and (max-width: 760px) {
        left: ${props => `calc(${props.left} / 1.2)`};
        animation: ${run3} 10s linear infinite;
        animation-delay: ${props => `calc(${props.delay} / 1.3)` || 0};
    }

    @media only screen and (max-width: 600px) {
        left: ${props => `calc(${props.left} / 2)`};
        animation: ${run3} 10s linear infinite;
        animation-delay: ${props => `calc(${props.delay} / 2)` || 0};
    }
`;