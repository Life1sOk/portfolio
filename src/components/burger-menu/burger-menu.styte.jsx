import styled from 'styled-components';

export const BurgerMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 44%;
    align-items: flex-start;
    padding: 2rem;
    position: fixed;
    background-color: #06223c;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-200%)'};
    z-index: 3;

    @media(max-width: 560px) {
        width: 100 %;
    }

    & span {
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: 0.5rem;
        margin: 37px auto;
        width: auto;
        cursor: pointer;

        &:hover {
            color: rgb(211, 96, 96);
            border-bottom: 2px solid rgb(211, 96, 96);
        }
    }
`;