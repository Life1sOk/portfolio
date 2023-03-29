import styled from "styled-components";

export const ButtonWrapper = styled.div`
    position: relative;
    z-index: 7;

    width: 100%;
    height: 100%;
    min-width: 120px;
    min-height: 44px;
    background-color: rgba(255,255,255);
    border-radius: 5px;
    flex-shrink: 0;

    box-shadow: 0px 0px 8px 2px rgba(229, 95, 63,0.75) inset;
    -webkit-box-shadow: 0px 0px 2px 4px rgba(0,21,40,1) inset;
    -moz-box-shadow: 0px 0px 8px 2px rgba(229, 95, 63,0.75) inset;
`;

export const ButtonStyle = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 100%;
    background-color: rgba(0,21,40, .9);
    border: 1px solid rgba(136, 146, 222, .3);
    border-radius: 5px;

    color: rgba(136, 146, 244, .8);
    font-family: 'Tilt Warp', cursive;
    font-size: inherit;

    &:hover {
        cursor: pointer;
        color: rgba(136, 146, 244);
        border: 1px solid rgba(136, 146, 222, .6);
    };

    &:active {
        background-color: rgba(0,21,40);
    };
`;