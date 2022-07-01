import React from "react";

import './App.css';
import Navbar from "./sections/navbar/navbar.component";
import Preview from "./sections/preview/preview.component";
// import About from "./sections/about/about.component";
// import Skills from "./sections/skills/skills.component";
// import Projects from "./sections/projects/projects.component";
// import Footer from "./sections/footer/footer.component";

function App() {

  return (
    <div className='wrap-main'>
      <Navbar />
      <Preview />
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <About /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
