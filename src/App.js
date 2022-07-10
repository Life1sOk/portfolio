import React, { useRef } from "react";

import './App.css';
import Navbar from "./sections/navbar/navbar.component";
import Preview from "./sections/preview/preview.component";
import Skills from "./sections/skills/skills.component";
import Projects from "./sections/projects/projects.component";
import About from "./sections/about/about.component";
import Footer from "./sections/footer/footer.component";

function App() {
  const nav = useRef(null);
  const preview = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const about = useRef(null);
  const footer = useRef(null);

  return (
    <div className='wrap-main'>
      <Navbar nav={nav} preview={preview} skills={skills} projects={projects} about={about} />
      <Preview preview={preview} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <About about={about} />
      <Footer footer={footer} nav={nav} projects={projects} skills={skills} />
    </div>
  );
}

export default App;
