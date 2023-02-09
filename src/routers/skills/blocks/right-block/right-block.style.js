import styled from "styled-components";

export const RightContainer = styled.div`
    width: 500px;
    height: 500px;
    padding: 10px 30px;
    border-radius: 40px;
    background-color: rgba(0, 21, 40, .8);

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 871px) {
        width: fit-content;
        height: fit-content;
        gap: 10px;
    };

    @media only screen and (max-width: 805px) {
        width: 100%;
        transform: scale(.8);
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