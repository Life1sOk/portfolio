import styled from 'styled-components';

export const AboutContainer = styled.section`
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #0b3a66;
    min-width: 400px;
    height: 500px;
`;

export const JustLine = styled.div`
    width: 840px;
    border-top: 2px solid #0b3a66;

    @media only screen and (max-width: 940px) {
        width: 500px;
    }

    @media only screen and (max-width: 717px) {
        width: 350px;
    }

    @media only screen and (max-width: 562px) {
        display: none;
    }
`;

export const AboutMe = styled.div`
    padding-top: 30px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: end;
`;