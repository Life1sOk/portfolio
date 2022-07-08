import styled from 'styled-components';

export const ProjectStructureContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: ${props => (props.side % 2 === 0) ? 'row' : 'row-reverse'};
    justify-content: center;
    gap: 170px;
    padding: 80px 20px;
    margin: 0 20px;
    z-index: 0;

    @media only screen and (max-width: 1366px) {
        gap: 0;
        justify-content: space-around;
    }

    @media only screen and (max-width: 1069px) {
        flex-direction: column;
        align-items: center;
    }

    @media only screen and (max-width: 562px) {
        padding-bottom: 20px;
    }
`;

export const ProjectImage = styled.img`
    border-radius: 10%;
    width: 350px;
    height: auto;
    ${'' /* height: 350px; */}

    @media only screen and (max-width: 1069px) {
        width: 300px;
        height: 300px;
    }
`;

export const ProjectAbout = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: larger;

    @media only screen and (max-width: 1069px) {
        justify-content: center;
        height: auto;
        gap: 20px;
    }

    @media only screen and (max-width: 562px) {
        gap: 0;
    }
`;

export const Title = styled.span`
    font-size: 2rem;

    @media only screen and (max-width: 1069px) {
        position: absolute;
        top: 15px;
    }
`;

export const Tools = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 1.5rem;

    & .tool {
        padding-right: 10px;
    }

    & .icon {
        display: flex;
        height: 50px;
    }
`;

export const Discription = styled.div`
    max-width: 500px;
    font-size: 1.3rem;
    
    @media only screen and (max-width: 562px) {
        display: none;
    }
`;

export const ProjectButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;

    @media only screen and (max-width: 562px) {
        padding-bottom: 40px;
        border-bottom: 2px solid #0b3a66;
    }
`;

export const JustLine = styled.div`
    height: 350px;
    border-left: 2px solid #0b3a66;

    @media only screen and (max-width: 1069px) {
        height: 650px;
        position: absolute;
        top: 80;
        left: ${props => (props.side) === 'left' ? -30 : 0};
        right: ${props => (props.side) === 'right' ? -30 : 0};
    }

    @media only screen and (max-width: 716px) {
        display: none;
    }
`;