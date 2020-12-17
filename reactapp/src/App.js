import './App.css';
import NavbarTop from'./components/Navbar';
import Header from'./components/Header';
import Presentation from'./components/Presentation';
import Education from'./components/Education';
import Competences from'./components/Competences';
import Portfolio from'./components/Portfolio';
import Contact from'./components/Contact';
import Footer from'./components/Footer';
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
      
        {/* <NavbarTop/> */}

        <Header/>

        <Presentation/>
      <div className="bg-gradient">
        <Education/>
        
        <Competences/>
        
        <Portfolio/>

        <Contact/>

        <Footer/>
      </div>
    </div>
    
  );
}

export default App;
