import styled from "styled-components";

export const PlanetStyle = styled.div`
    position: absolute;
    top: 90px;
    left: 40px;

    display: flex;
    flex-direction: column;
`;

export const DiskStyle = styled.div`
    position: absolute;
    /* top: -90px;
    left: 10px; */
    top: -115px;
    left: -15px;

    width: 350px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    z-index: 10;

    box-shadow: 0px 0px 15px 11px rgba(0,0,255,0.75) inset;
    -webkit-box-shadow: 0px 0px 15px 11px rgba(51,153,255,0.45) inset;
    -moz-box-shadow: 0px 0px 15px 11px rgba(0,0,255,0.75) inset;
`;