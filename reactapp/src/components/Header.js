import React from 'react';
import { CardImg } from 'reactstrap';
import { Row, Col } from 'antd';
import '../App.css';
import {Animated} from "react-animated-css";
import imgCard from '../IMG_5395.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import Typical from "react-typical"

function Presentation() {
    return (
        <div>
            <div className="header">
                <Row>
                    <Col span={24} style={{display: "flex", justifyContent:"center", marginTop: "5%", marginBottom: "5%",}}>   
                        <a className="mask mask_type1 mask_type1-a2" >
                            <CardImg src={imgCard} style={{ width: "450px"}} className="img mask__img"/>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{textAlign: "center"}} className="header-title">
                        <Animated animationIn="slideInUp" animationInDuration="1500" isVisible={true}>
                            <h1>Valentin Duffet</h1>
                            <h3 style={{color: "#c23616"}}>
                                <Typical
                                    loop={Infinity}
                                    wrapper="i"
                                    steps={["Développeur Web fullstack Javascript", 2000, "MongoDB, Express, React JS, Node JS", 2000]}
                                />
                            </h3>
                            
                        </Animated>
                    </Col>
                </Row>
                <div className="waves-bottom-header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path fill="white" d="M0,32L60,32C120,32,240,32,360,64C480,96,600,160,720,165.3C840,171,960,117,1080,85.3C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                </div>
                    
            </div>
           

            
        </div>
        
        
    );
  }
  
export default Presentation;