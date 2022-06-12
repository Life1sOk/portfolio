import React from "react";

import './App.css';
import Navbar from "./components/navbar/navbar.component";
import Preview from "./components/preview/preview.component";
import About from "./components/about/about.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component";
import Footer from "./components/footer/footer.component";

function App() {

  return (
    <div className='wrap-main'>
      <Navbar />
      <Preview />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
