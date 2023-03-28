import React from "react";

import PreviewSection from "../../sections/preview";
import ProjectsSection from "../../sections/projects";
import Skills from "../../sections/skills";
import About from "../../sections/about";
import ContactSection from "../../sections/contact/contact.section";

import { HomeContainer } from './index.style';

const HomePage = () => {
    return (
        <HomeContainer>
            <PreviewSection />
            {/* <About />
            <Skills />
            <ProjectsSection />
            <ContactSection /> */}
        </HomeContainer>
    )
};

export default HomePage;