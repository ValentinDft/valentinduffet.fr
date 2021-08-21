import './App.css';
// import NavbarTop from'./components/Navbar';
import Header from'./components/Header';
import Presentation from'./components/Presentation';
import Education from'./components/Education';
import Experience from "./components/Experience/Experience"
import Competences from'./components/Competences';
import Portfolio from'./components/Portfolio';
// import Contact from'./components/Contact';
import Footer from'./components/Footer';
import Loading from './components/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  // const [loader, setLoader] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    // setTimeout(() => {
    //   setLoader(false);
    // }, 2000)

  }, []);

  // let goApp = (etat) => {
  //   setLoader(!etat);
  // }

  // return loader ? (
  //   <Loading />
  // ) : 
  return (
    <div>
      
        {/* <NavbarTop/> */}
        <Header/>

        <Presentation/>
      <div className="bg-gradient">
        <Education/>
        <Experience/>
        <Competences/>
        
        <Portfolio/>

        {/* <Contact/> */}

        <Footer/>
      </div>
    </div>
    
  )
}

export default App;
