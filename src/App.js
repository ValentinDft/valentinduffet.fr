import './App.css';
import NavbarTop from'./components/Navbar';
import Presentation from'./components/Presentation';
import Education from'./components/Education';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <NavbarTop/>

      <Presentation/>

    <div data-aos="flip-up">
      <Education/>
    </div>
      
        
       
      
    </div>
  );
}

export default App;
