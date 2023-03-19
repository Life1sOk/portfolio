import styled from "styled-components";

import check from '../../assets/lines/back.png';

export const SlidesContainer = styled.div`
    width: fit-content;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    transform: rotate3d(.1,-.866,0,15deg) rotate(1deg);
    transform-style: preserve-3d;

    background: url(${check});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const SlidesWrapper = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    gap: 20px;
`;