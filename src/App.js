import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from "./routers/navbar/navbar.component";
import ContactIcons from "./components/contact-icons/contact.icons.component";
import Copyright from "./components/copyright/copyright.component";
// import Preview from "./routers/preview";
// import Skills from "./routers/skills";
// import Projects from "./sections/projects/projects.component";
// import About from "./routers/about";
const Preview = lazy(() => import("./routers/preview"));
const Skills = lazy(() => import("./routers/skills/index"));
const Projects = lazy(() => import("./sections/projects/projects.component"));
const About = lazy(() => import("./routers/about"));

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <Routes>
      <Route path='/' element={[<Navbar key='navbar'/>, <ContactIcons key='aside' />, <Copyright key='copyright'/>]}>
        <Route index element={
          <Suspense>
            <Preview />
          </Suspense>
        }/>
        <Route path='skills' element={
          <Suspense>
            <Skills />
          </Suspense>
        }/>
        <Route path='projects' element={
          <Suspense>
            <Projects />
          </Suspense>
        }/>
        <Route path='about' element={
          <Suspense>
            <About />
          </Suspense>
        }/>
      </Route>
    </Routes>
  );
}

export default App;
