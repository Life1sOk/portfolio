import styled from "styled-components";

export const SlidesContainer = styled.div`
    /* width: 100%;s */
    /* height: 100%; */
    /* margin-top: 40px; */

    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    /* transform: rotate3d(0, 10, 0, -10deg); */
    transform: rotate3d(.5,-.866,0,15deg) rotate(1deg);
    transform-style: preserve-3d;
`;