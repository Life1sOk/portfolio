import React from "react";

import { Top, Middle, Bottom } from "./business.style";
import { SlideContainerLayout, MainColumnLayout, TitleLayout } from "../../layouts";

import Figur from "../figur/figur.component";

const top = [
    {
        width: '40%',
        color: 'lightblue',
        type: 'line'
    },
    {
        width: '75%',
        color: 'lightblue',
        type: 'line'
    },
    {
        width: '60%',
        color: 'lightblue',
        type: 'line'
    },
    {
        width: '30%',
        color: 'lightblue',
        type: 'line'
    },
];

const middle = [
    {
        width: '100%',
        height: '100%',
        color: 'lightblue',
        type: 'box',
    },
    {
        width: '100%',
        height: '100%',
        color: 'lightblue',
        type: 'box',
    },
    {
        width: '100%',
        height: '100%',
        color: 'lightblue',
        type: 'box',
    },
];

export const BusinessSlide = () => {
    return(
        <SlideContainerLayout duration='0.5s'>
            <TitleLayout>Business</TitleLayout>
            <MainColumnLayout>
                <Top>
                    { top.map((line, index) => <Figur key={index} datas={line}/>) }
                </Top>
                <Middle>
                    { middle.map((box, index) => <Figur key={index} datas={box}/>) }
                </Middle>
                <Bottom>
                    <Figur datas={{width: '100%', height: '100%', color: 'lightblue', type:'line'}}/>
                </Bottom>
            </MainColumnLayout>
        </SlideContainerLayout>
    )
};

export default BusinessSlide;