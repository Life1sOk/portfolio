import styled from 'styled-components';

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: auto; 
  z-index: 100;
  
  &:focus {
    outline: none;
  }
  
  & div {
    width: 2rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    ${'' /* position: relative; */}
    transform-origin: 1px;
  }
`;