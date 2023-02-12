import styled from "styled-components";

export const ButtonBack = styled.div`
    position: relative;

    width: 145px;
    height: 50px;
    min-width: 120px;
    min-height: 44px;
    background-color: white;
    border-radius: 5px;

    box-shadow: 0px 0px 8px 2px rgba(229, 95, 63,0.75) inset;
    -webkit-box-shadow: 0px 0px 2px 4px rgba(0,21,40,1) inset;
    -moz-box-shadow: 0px 0px 8px 2px rgba(229, 95, 63,0.75) inset;
`;

export const ButtonFront = styled.span`
    position: absolute;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 100%;
    color: white;
    background-color: rgba(0,21,40, .9);
    border: none;
    border: 1px solid rgba(255,255,255, .3);
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;

    &:hover {
        cursor: pointer;
        border: 1px solid rgba(255,255,255, .6);
    }

    &:active {
        background-color: rgba(0,21,40);
    }

    svg {
        width: 25px;
        height: 25px;
    }

    span {
        font-size: 14px;
    }
`;