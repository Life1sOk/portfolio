import styled from "styled-components";

export const ProjectBoxStyle = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    max-width: 1000px;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
`;

export const Image = styled.img`
    position: relative;

    width: 100%;
    height: 100%;
    grid-area: 1 / 1 / -1 / 8;
    border-radius: 10px;
`;

export const Description = styled.div`
    position: relative;
    z-index: 1;

    width: 100%;
    grid-area: 1 / 7 / -1 / -1;
    background-color: rgba(255,255,255,.2);
`; 