import styled, { keyframes } from 'styled-components';


//400x600px //
const run = keyframes`
    0% {
        transform: translateY(700px);
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
`;