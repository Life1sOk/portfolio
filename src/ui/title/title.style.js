import styled from "styled-components";

export const TitleStyle = styled.h2`
    width: 100%;
    font-family: 'Tilt Warp', cursive;
    font-style: normal;
    font-size: 33px;
    color: var(--light-yellow);
    white-space: nowrap;

    display: flex;
    align-items: center;
    gap: 10px;

    ::after {
        content: '';
        width: 100%;
        height: 1.5px;
        background-color: var(--blue);
        margin-top: 5px;
    }
`;

export const TitleNumber = styled.h2`
    width: fit-content;
    color: var(--blue);
    font-size: 25px;
    margin-top: 5px;
`;