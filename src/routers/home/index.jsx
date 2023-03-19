import React from "react";

import PreviewSection from "../../sections/preview";
import ProjectsSection from "../../sections/projects";
import Skills from "../../sections/skills";
import About from "../../sections/about";

import { HomeWrapper, HomeContainer } from './index.style';

const HomePage = () => {
    return (
        <HomeContainer>
            <PreviewSection />
            <ProjectsSection />
            <Skills />
            <About />
        </HomeContainer>
    )
};

export default HomePage;