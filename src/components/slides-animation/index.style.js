import styled from "styled-components";

export const SlidesContainer = styled.div`
    width: 100%;
    height: 100%;

    /* display: flex;
    flex-wrap: wrap;
    gap: 20px; */

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    transform: rotate3d(.5,-.866,0,15deg) rotate(1deg);
    transform-style: preserve-3d;
`;