import styled from "styled-components";

export const ButtonFront = styled.button`
    width: 32px;
    height: 32px;
    color: white;
    background-color: rgba(0,21,40, .9);
    border: none;
    border: 1px solid rgba(255,255,255, .3);
    border-radius: 5px;
    font-size: 14px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border: 1px solid rgba(255,255,255, .6);
    };

    &:active {
        background-color: rgba(0,21,40);
    };

    svg {
        width: 32px;
        height: 32px;
    };
`;