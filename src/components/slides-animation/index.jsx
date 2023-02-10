import React from "react";

import {SlidesContainer} from './index.style';
import BusinessSlide from "./components/business-slide/business-slide";
import ECommerce from "./components/e-commerce-slide/e-commerce-slide";
import BlogSlide from "./components/blog-slide/blog-slide";
import PersonalSlide from "./components/personal-slide/personal-slide";

const Slides = () => {
    return(
        <SlidesContainer>
            <BusinessSlide />
            <ECommerce />
            <BlogSlide />
            <PersonalSlide />
        </SlidesContainer>
    )
};

export default Slides;