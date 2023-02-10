import styled from "styled-components";

export const LBoxContainer = styled.div`
    position: relative;
    width: 25px;
    height: 25px;
    margin: ${({position}) => position ? '0 0 15% 0' : '15% 0 0 0'};
    background-color: rgba(255,255,255);
    border-radius: 3px;
    font-size: 12px;

    box-shadow: 0px 0px 2px 2px rgba(229, 95, 63,0.75) inset;
    -webkit-box-shadow: 0px 0px 2px 2px rgba(0,21,40,1) inset;
    -moz-box-shadow: 0px 0px 2px 2px rgba(229, 95, 63,0.75) inset;
`;

export const LBoxFront = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    border-radius: 3px;
    border: 1px solid rgba(255,255,255, .3);
    background-color: rgba(0,21,40, .9);

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        border: 1px solid rgba(255,255,255, .6);
    }
`;