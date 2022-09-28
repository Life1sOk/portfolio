import styled from 'styled-components';

export const MainContainer = styled.main`
    position: relative;
    background-color: #06223c;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 50px;
    padding: 40px 40px 40px 40px;
    min-width: 300px;
    z-index: 2;

    @media only screen and (max-width: 1280px) {
        justify-content: space-around;
        column-gap: 50px;
    }

    @media only screen and (max-width: 1068px) {
        padding-top: 40px;
        flex-direction: column-reverse;
        padding: auto;
    }
`;

export const Introduction = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #06223c;
    padding-bottom: 40px;
    
    @media only screen and (max-width: 1068px) {
        padding-bottom: 0px;
        flex-direction: column;
        padding: 40px 0px;
    }
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

    @media only screen and (max-width: 400px) {
        font-size: 2rem;
    }
`;

export const Position = styled.p`
    font-size: 1.5rem;

    @media only screen and (max-width: 1068px) {
        font-size: 1.4rem;
    }

    @media only screen and (max-width: 760px) {
        font-size: 1.3rem;
    };

    @media only screen and (max-width: 400px) {
        font-size: 1rem;
    }
`;

export const Mission = styled.article`
    background-color: #06223c;
    padding: 30px;
    max-width: 600px;
    min-height: 115px;
    z-index: 1;
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
    align-items: start;
    column-gap: 50px;

    & a {
        z-index: 2;
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 400px) {
        column-gap: 10px;

        & button {
            width: 7rem;
        }
    }
`;

export const Foto = styled.section`
    width: 300px;
    ${'' /* padding: 0px 100px; */}
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    z-index: 0;
    background-color: #041436;
    ${'' /* border-radius: 50% 50% 0 0; */}
    -webkit-box-shadow: 6px 6px 11px 4px rgba(0,0,0,0.74); 
    box-shadow: 6px 6px 11px 4px rgba(0,0,0,0.74);

    @media only screen and (max-width: 760px) {
        justify-content: center;
        margin-top: 30px;
        padding: 0px 50px;
    }

    @media only screen and (max-width: 500px) {
        padding: 0px 30px;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
    ${'' /* margin-right: 30px; */}
    z-index: 2;

    @media only screen and (max-width: 1068px) {
        width: 300px;
    }

    @media only screen and (max-width: 760px) {
        width: 270px;
    }

    @media only screen and (max-width: 400px) {
        width: 180px;
    }
`;