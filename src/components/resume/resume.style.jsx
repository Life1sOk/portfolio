import styled from "styled-components";

export const ResumeContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InOut = styled.div`
    overflow: hidden;
    position: absolute;
    top: 40px;
    right: 5%;
    width: 90%;
    display: flex;
    flex-direction: column;
    border: 1px solid #fa6400;
    border-bottom-right-radius: 10%;
    border-top-left-radius: 10%;
    transition: transform .5s ease-in-out;
    transform: ${({ toggle }) => toggle ? 'translateY(5px)' : 'translateY(-150%)'};
`;

export const Var = styled.a`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 5px;
    background-color: aliceblue;
    color: #fa6400;

    &:link {
        text-decoration: inherit;
    }

    &:visited {
        text-decoration: inherit;
    }

    &:hover {
        background-color: #fb8332;
        color: aliceblue;
    }

    &:active {
        background-color: #c85000;
        color: aliceblue;
    }

    span {
        width: 50px;
    }
`;