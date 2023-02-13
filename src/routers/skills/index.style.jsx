import styled from "styled-components";

export const MainSkills = styled.div`
    width: 100%;
    height: calc(var(--vh, 1vh) * 100 - 65.5px);
    max-width: 1117px;
    min-width: 320px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 992px) {
        justify-content: space-around;
    };
`;

export const LeftContainer = styled.div`
    display: none;

    @media only screen and (min-width: 992px) {
        display: initial;
    };
`;

export const RightContainer = styled.div`
    max-width: 400px;
    width: 90%;
    padding: 20px 30px 0px 30px;
    border-radius: 10px;
    background-color: rgba(0, 21, 40, .8);

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const BasicsContainer = styled.div`
    width: 100%;
    margin: 20px 0;

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    flex-wrap: wrap;
`;

export const FrameworksLibrariesContainer = styled.div`
    width: 100%;
    padding: 20px 0px;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
`;