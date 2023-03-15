import React from "react";

import { Top, Middle, BoxContainer, BoxContainerBot, BoxWrapper, Aside } from './e-commerce.style';
import { SlideContainerLayout, MainColumnLayout, TitleLayout } from "../../layouts";

import Figur from "../figur/figur.component";

const top = [
    {
        width: '100%',
        height: '12px',
        color: 'lightblue',
        type: 'box',
    },
    {
        width: '100%',
        height: '12px',
        color: 'lightblue',
        type: 'box',
    },
    {
        width: '100%',
        height: '12px',
        color: 'lightblue',
        type: 'box',
    },
    {
        width: '100%',
        height: '12px',
        color: 'lightblue',
        type: 'box',
    },
];

const box = [
    {
        width: '100%',
        height: '40%',
        color: 'lightblue',
        type: 'box',
    },
    {
        width: '100%',
        height: '40%',
        color: 'lightblue',
        type: 'box',
    }
];

const middle = [1,2,3,4,5,6];

const ECommerce = () => {
    return(
        <SlideContainerLayout duration='1s'>
            <TitleLayout>eCommerce</TitleLayout>
            <MainColumnLayout>
                <Top>
                    {
                        top.map((line, index) => <Figur key={index} datas={line}/>)
                    }
                </Top>
                <Middle>
                    <Aside>
                        {
                            box.map((box, index) => <Figur key={index} datas={box}/>)
                        }
                    </Aside>
                    <BoxWrapper>
                        {
                            middle.map(num => 
                            <BoxContainer key={num}>
                                <Figur datas={{type: 'line', width: '100%', height: '80%', color: 'lightblue',}}/>
                                <BoxContainerBot>
                                    <Figur datas={{type: 'line', width: '100%', height: '100%', color: 'lightblue',}}/>
                                    <Figur datas={{type: 'line', width: '100%', height: '100%', color: 'lightblue',}}/>
                                </BoxContainerBot>
                            </BoxContainer>)
                        }
                    </BoxWrapper>
                </Middle>
            </MainColumnLayout>
        </SlideContainerLayout>
    )
};

export default ECommerce;