import styled, { keyframes } from 'styled-components';

const run = keyframes`
    0% {
        transform: translateX(710px);
    }

    100% {
        transform: translateX(0px);
    }
`;


export const AnimationWordContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 150px;
    border-radius: 20px;
    background-color: #06223c;
    position: absolute;
    top: ${props => props.top || 0};
    left: -200px;
    animation: ${run} 10s linear infinite;
    animation-delay: ${props => props.delay || 0};
`;