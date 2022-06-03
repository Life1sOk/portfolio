import React from "react";
import "aos/dist/aos.css";

import './App.css';
import Navbar from "./components/navbar/navbar.component";
import Preview from "./components/preview/preview.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component";
import Footer from "./components/footer/footer.component";

function App() {
  
  return (
    <div className='wrap-main'>
      <Navbar />
      <Preview />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
