import React from 'react';
import { StyledBurger } from './burger.style';

const Burger = ({ openToggle, open }) => {
    return (
        <StyledBurger open={open} className='burger' onClick={openToggle} title='burger'>
            <div className='line1' />
            <div className='line2' />
            <div className='line3' />
        </StyledBurger>
    )
}

export default Burger;