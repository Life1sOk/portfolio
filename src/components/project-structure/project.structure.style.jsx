import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: cetner;
    align-items: center; 
`;

export const ProjectStructureContainer = styled.section`
    position: relative;
    display: flex;
    ${'' /* flex-direction: ${props => (props.side % 2 === 0) ? 'row' : 'row-reverse'}; */}
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    ${'' /* gap: 130px; */}
    gap: 40px;
    padding: 40px 20px;
    margin: 40px auto;
    z-index: 0;
    box-shadow: 0px 0px 26px 7px rgba(0,0,0,0.25);

    @media only screen and (max-width: 1366px) {
        gap: 100px;
        justify-content: space-around;
    }

    @media only screen and (max-width: 1069px) {
        gap: 23px;
        flex-direction: column;
        align-items: center;
        padding-top: 80px;
    }

    @media only screen and (max-width: 562px) {
        gap: 10px;
        padding-bottom: 20px;
    }
`;

export const ProjectImage = styled.img`
    border-radius: 10%;
    width: 400px;
    height: 350px;
    ${'' /* min-height: 250px; */}

    @media only screen and (max-width: 1069px) {
        ${'' /* width: 80%; */}
    }

    @media only screen and (max-width: 562px) {
        width: 270px;
        height: 260px;
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
        top: 10px;
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
        width: 150px;
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
        gap: 23px;
        ${'' /* padding-bottom: 40px; */}
        ${'' /* border-bottom: 2px solid #0b3a66; */}
    }

    @media only screen and (max-width: 400px) {
        column-gap: 10px;

        & button {
            width: 7rem;
        }
    }
`;