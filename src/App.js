import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import './App.css';

import Navbar from './components/nav-bar/nav-bar';
import Home from './components/Home/home.component';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const alphabet = {
    a:'a', b:'b', c:'c', d:'d', e:'e', f:'f', g:'g',
    h:'h', i:'i', j:'j', k:'k', l:'l', m:'m', n:'n',
    o:'o', p:'p', q:'q', r:'r',s:'s', t:'t', u:'u',
    v:'v', w:'w', x:'x', y:'y', z:'z'
   }
  
  return (
    <div className='wrap-main'>
      <Navbar />
      <Home alphabet={alphabet}/>
    </div>
  );
}

export default App;
