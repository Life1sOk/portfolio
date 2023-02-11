import React from "react";

import {SlidesContainer} from './index.style';
import BusinessSlide from "./components/business-slide/business-slide";
import ECommerce from "./components/e-commerce-slide/e-commerce-slide";

const SmallSlides = () => {
    return(
        <SlidesContainer>
            <BusinessSlide />
            <ECommerce />
        </SlidesContainer>
    )
};

export default SmallSlides;