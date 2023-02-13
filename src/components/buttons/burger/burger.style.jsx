import styled from 'styled-components';

export const StyledBurger = styled.button`
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0px;
  z-index: 10;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &:focus {
    outline: none;
  }
  
  & div {
    width: 1.7rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    transition: transform 0.4s ease-in-out;
  }

  & .line1 {
    transform: ${({ open }) => open ? 'rotate(57deg)' : 'none'}
  }

  & .line2 {
    transform: ${({ open }) => open ? 'scaleY(0)' : 'none'}
  }

  & .line3 {
    transform: ${({ open }) => open ? 'rotate(-57deg)' : 'none'}
  }

  @media only screen and (min-width: 992px) {
    display: none ;
  };
`;