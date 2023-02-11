import styled from "styled-components";

export const MainSkills = styled.div`
    height: 100vh;
    width: 100%;
    min-width: 320px;
    padding-top: 65px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    column-gap: 100px;

    @media only screen and (min-width: 768px) and (max-width: 991.98px) {
        flex-direction: column;
        row-gap: 50px;
    };

    @media only screen and (min-width: 992px) and (max-width: 1199.98px) {
        column-gap: 150px;
    };

    @media only screen and (min-width: 1200px) { 
        column-gap: 300px;
    };
`;

export const LeftContainer = styled.div`
    display: none;

    @media only screen and (min-width: 768px) {
        display: initial;
    };
`;

export const RightContainer = styled.div`
    max-width: 400px;
    min-width: 318px;
    width: 90vw;
    height: 70vh;
    max-height: 450px;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: rgba(0, 21, 40, .8);

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 500px) and (max-width: 767.98px) {
        justify-content: space-between;
    };

    @media only screen and (min-width: 768px) and (max-width: 991.98px) {
        max-width: fit-content;
        height: 300px;
    };
`;

export const BasicsContainer = styled.div`
    width: 100%;

    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;

export const FrameworksLibrariesContainer = styled.div`
    width: 100%;
    padding: 20px 10px;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    align-items: center;
`;