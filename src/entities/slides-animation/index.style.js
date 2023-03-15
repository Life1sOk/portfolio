import styled from "styled-components";

export const SlidesContainer = styled.div`
    /* width: 100%; */
    width: fit-content;
    height: fit-content;

    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    /* transform: rotate3d(.5,-.866,0,15deg) rotate(1deg); */
    /* transform: rotateY(-10deg); */
    transform: rotate3d(.1,-.866,0,15deg) rotate(1deg);
    transform-style: preserve-3d;
`;

export const SlidesWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    gap: 20px;
`;