import styled from 'styled-components';

export const MainContainer = styled.main`
    width: 100%;
    height: 92vh;
    /* min-height: 650px; */
    background-color: #001528;
    /* padding: 40px; */
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 50px;

    @media only screen and (max-width: 1280px) {
    }

    @media only screen and (max-width: 1068px) {
    }
`;

export const Introduction = styled.section`
    width: 500px;
    margin-left: 60px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .welcome {
        font-size: 38px;
    }

    .name {
        font-size: 44px;
        color: #f1a845;
    }
    
    .spec {
        color: #a9c6d9;
        font-size: 24px;
    }

    .ido {
        margin-top: 10px;
        font-size: 18px;
        max-width: 400px;
        line-height: 1.6;
    }

    .stand {
        color: #e55f3f;
    }
`;

export const Animation = styled.section`
    width: 600px;
    height: 650px;
    /* height: 100%; */
    /* border: 1px solid coral; */
    /* margin-top: 100px; */
    perspective: 700px;

    display: flex;
    flex-direction: column;
`;