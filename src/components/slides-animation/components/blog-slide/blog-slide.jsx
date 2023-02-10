import React from "react";

import { Left, Right } from './blog.style';
import { SlideContainerLayout, MainRawLayout, TitleLayout } from "../../layouts";

import Figur from "../figur/figur.component";

const left = [
    {
        width: '65px',
        height: '65px',
        radius: '50%',
        color: 'lightblue',
        type: 'box'
    },
    {
        width: '65px',
        height: '25px',
        color: 'lightblue',
        type: 'line'
    },
    {
        width: '65px',
        height: '25px',
        color: 'lightblue',
        type: 'line'
    },
    {
        width: '65px',
        height: '25px',
        color: 'lightblue',
        type: 'line'
    },
    {
        width: '65px',
        height: '25px',
        color: 'lightblue',
        type: 'line'
    },
];

const right = [
    {
        width: '100%',
        height: '20%',
        color: 'lightblue',
        type: 'box'
    },
    {
        width: '100%',
        height: '20%',
        color: 'lightblue',
        type: 'box'
    },
    {
        width: '100%',
        height: '20%',
        color: 'lightblue',
        type: 'box'
    },
    {
        width: '100%',
        height: '20%',
        color: 'lightblue',
        type: 'box'
    },
];

const BlogSlide = () => {
    return(
        <SlideContainerLayout duration='2s'>
            <TitleLayout>Blog</TitleLayout>
            <MainRawLayout>
                <Left>
                    {
                        left.map((box, index) => <Figur key={index} datas={box}/>)
                    }
                </Left>
                <Right>
                    {
                        right.map((box, index) => <Figur key={index} datas={box}/>)
                    }
                </Right>
            </MainRawLayout>
        </SlideContainerLayout>
    )
};

export default BlogSlide;