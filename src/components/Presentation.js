import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../App.css';

import AOS from "aos";
import "aos/dist/aos.css";

function Presentation() {
    return (
        <Container style={{marginTop: "5%"}} className="container">
            <Row>
                <Col sm="12" md="12" lg="12">
                    
                    <h1 style={{textAlign: "center", marginBottom: "1%"}}>PRESENTATION</h1>
                    <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <h4 style={{marginBottom: "5%", textAlign: "justify"}}>
                            Jeune développeur, passionné par les technologies du web. 
                            J'ai appris à coder dés le lycée par simple curiosité, pour savoir comment était construit un site web. J'ai vraiment adoré ça. <br></br>
                            Par la suite j'ai effectué un <span style={{color: "#dff9fb", backgroundColor: "#c23616"}}>BTS SNIR (Systèmes Numériques informatique et Réseaux)</span> que j'ai obtenus. <br></br>
                            Et pour solidifier mes connaissances et mes compétences dans le développement web, j'ai effectué une <span style={{color: "#dff9fb", backgroundColor: "#c23616"}}> 
                            formation de développeur web fullstack Javascript à La Capsule,</span> sur la stack MERN (MongoDB, Express, React Js, Node Js)
                        </h4>
                    </div>
                </Col>
            </Row>
            <div className="waves-bottom-presentation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill="white" d="M0,32L60,32C120,32,240,32,360,64C480,96,600,160,720,165.3C840,171,960,117,1080,85.3C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>
        </Container>
        
        
    );
  }
  
export default Presentation;