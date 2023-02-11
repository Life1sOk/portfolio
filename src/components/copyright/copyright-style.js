import styled from "styled-components";

export const CopyrightContainer = styled.div`
    position: fixed;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);

    width: fit-content;
    font-size: 10px;
    padding: 5px;
    border-radius: 10px 10px 0 0;
    color: rgba(255,255,255, .25);

    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
`;