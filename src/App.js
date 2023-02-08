import React, { useRef } from "react";

import { Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from "./routers/navbar/navbar.component";
import Preview from "./routers/preview/preview.component";
import Skills from "./routers/skills/skills.component";
import Projects from "./sections/projects/projects.component";
import About from "./sections/about/about.component";
import Footer from "./sections/footer/footer.component";

function App() {

  return (
    <Routes>
      <Route path='/portfolio' element={<Navbar />}>
        <Route index element={<Preview />}/>
        <Route path='portfolio/skills' element={<Skills />}/>
        <Route path='portfolio/projects' element={<Projects />}/>
        <Route path='portfolio/about' element={<About />}/>
      </Route>
      {/* <Skills skills={skills} />
      <Projects projects={projects} />
      <About about={about} />
      <Footer footer={footer} nav={nav} projects={projects} skills={skills} /> */}
    </Routes>
  );
}

export default App;
