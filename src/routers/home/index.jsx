import React, { useRef, forwardRef, useImperativeHandle } from "react";

import PreviewSection from "../../sections/preview";
import ProjectsSection from "../../sections/projects";
import Skills from "../../sections/skills";
import About from "../../sections/about";
import ContactSection from "../../sections/contact/contact.section";

import FrontContacts from "../../containers/front-contacts/front-contacts.container";

import { HomeContainer } from "./index.style";

const HomePage = forwardRef((_, ref) => {
  const previewRef = useRef(null);
  const aboutRef = useRef(null);
  const toolsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollIntoViewHandler = (section) => {
    const setting = {
      behavior: "smooth",
    };

    if (section === "Preview") previewRef.current.scrollIntoView(setting);
    if (section === "About") aboutRef.current.scrollIntoView(setting);
    if (section === "Tools") toolsRef.current.scrollIntoView(setting);
    if (section === "Projects") projectsRef.current.scrollIntoView(setting);
    if (section === "Contacts") contactRef.current.scrollIntoView(setting);
  };
  console.log("home");
  useImperativeHandle(
    ref,
    () => {
      return {
        scrollToSection(section) {
          scrollIntoViewHandler(section);
        },
      };
    },
    []
  );

  return (
    <HomeContainer>
      <PreviewSection ref={previewRef} />
      <About ref={aboutRef} />
      <Skills ref={toolsRef} />
      <ProjectsSection ref={projectsRef} />
      <ContactSection ref={contactRef} />
      <FrontContacts />
    </HomeContainer>
  );
});

export default HomePage;
