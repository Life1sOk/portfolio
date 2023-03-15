import styled from "styled-components";

import planetImage from '../../../../assets/planet3.png';

export const PlanetStyle = styled.div`
    position: absolute;
    top: -40px;
    left: 60px;

    width: 200px;
    aspect-ratio: 1 / 1;
    z-index: 19;

    mask-image: url(${planetImage});
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;

    background: url(${planetImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;