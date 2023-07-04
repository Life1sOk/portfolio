import React from "react";

import BusinessSlide from "./components/business-slide/business-slide";
import ECommerce from "./components/e-commerce-slide/e-commerce-slide";
import BlogSlide from "./components/blog-slide/blog-slide";
import PersonalSlide from "./components/personal-slide/personal-slide";

import { SlidesContainer, SlidesWrapper, BackCheck } from "./index.style";

const Slides = () => {
  return (
    <SlidesContainer>
      <BackCheck />
      <SlidesWrapper>
        <BusinessSlide />
        <ECommerce />
      </SlidesWrapper>
      <SlidesWrapper>
        <BlogSlide />
        <PersonalSlide />
      </SlidesWrapper>
    </SlidesContainer>
  );
};

export default Slides;
