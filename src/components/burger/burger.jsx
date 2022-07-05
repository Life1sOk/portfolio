import React from 'react';
import { StyledBurger } from './burger.style';

const Burger = ({ openToggle }) => {
    return (
        <StyledBurger className='burger' onClick={openToggle}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

export default Burger;