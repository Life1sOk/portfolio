import styled from 'styled-components';

export const MainContainer = styled.main`
    background-color: #06223c;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 170px;
    padding: 40px 40px 0px 40px;
    min-width: 400px;

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