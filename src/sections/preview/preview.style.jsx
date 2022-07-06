import styled from 'styled-components';

export const MainContainer = styled.main`
    position: relative;
    background-color: #06223c;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 170px;
    padding: 40px 40px 0px 40px;
    min-width: 400px;

    ${'' /* & .vr {
        position: absolute;
        left: 650px;
        height: calc(100% - 40px);
        border: 1px solid white;
    }

    & .vr2 {
        position: absolute;
        right: 40px;
        height: calc(100% - 40px);
        border: 1px solid white;
    } */}

    @media only screen and (max-width: 1280px) {
        justify-content: space-around;
        column-gap: 0;
    }

    @media only screen and (max-width: 1068px) {
        ${'' /* justify-content: space-around;
        column-gap: 0; */}
        padding-top: 40px;
    }

    @media only screen and (max-width: 760px) {
        flex-direction: column;
        padding:0px;
    };
`;

export const Introduction = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${'' /* height: 500px; */}
    padding-bottom: 40px;

    @media only screen and (max-width: 1068px) {
        padding-bottom: 0px;
    }

    @media only screen and (max-width: 760px) {
        flex-direction: column;
        padding: 40px 0px;
    };
`;

export const Hello = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Iam = styled.p`
    font-size: 3rem;

    @media only screen and (max-width: 1068px) {
        font-size: 2.7rem;
    }

    @media only screen and (max-width: 760px) { 
        font-size: 2.5rem;
    };
`;

export const Position = styled.p`
    font-size: 1.5rem;

    @media only screen and (max-width: 1068px) {
        font-size: 1.4rem;
    }

    @media only screen and (max-width: 760px) {
        font-size: 1.3rem;
    };
`;

export const Mission = styled.article`
    margin: 30px;
    width: 380px;

    @media only screen and (max-width: 760px) {
        width: 340px;
    };
`;

export const MyPrinciple = styled.p`
    font-size: 1.5rem;

    @media only screen and (max-width: 1068px) {
        font-size: 1.4rem;
    }

    @media only screen and (max-width: 760px) {
        font-size: 1.3rem;
    };
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 50px;
`;

export const Foto = styled.section`
    padding: 0px 100px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    z-index: 0;
    background-color: #041436;
    box-shadow:0px 1px 0px #ccc, 0px 2px 0px #c9c9c9, 0px 3px 0px #bbb, 0px 4px 0px #b9b9b9, 0px 5px 0px #aaa, 0px 6px 1px rgba(0,0,0,0.1), 0px 0px 5px rgba(0,0,0,0.1), 0px 1px 3px rgba(0,0,0,0.3), 0px 3px 5px rgba(0,0,0,0.2), -4px 8px 8px rgba(0,0,0,0.1), -8px 16px 16px rgba(0,0,0,0.37), -16px 32px 32px rgba(0,0,0,0.25), -32px 64px 64px rgba(0,0,0,0.25);

    & .vr {
        position: absolute;
        left: 0px;
        height: 100%;
        border: 10px solid #041436;
        z-index: 2;
    }

    & .vr2 {
        position: absolute;
        right: 0px;
        height: 100%;
        border: 10px solid #041436;
        z-index: 2;
    }

    @media only screen and (max-width: 760px) {
        justify-content: center;
        ${'' /* margin: 20px auto; */}
        padding: 0px 155px;
        order: -1;
    }
`;

export const Img = styled.img`
    width: 400px;
    height: auto;
    margin-right: 30px;
    z-index: 2;

    @media only screen and (max-width: 1068px) {
        width: 300px;
    }

    @media only screen and (max-width: 760px) {
        width: 270px;
    }
`;