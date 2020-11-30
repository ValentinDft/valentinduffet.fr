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
                    
                    <h1 style={{textAlign: "center", marginBottom: "1%", color: "#dff9fb"}}>PRESENTATION</h1>
                    <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <h4 style={{marginBottom: "5%", textAlign: "justify", color: "#dff9fb"}}>
                            Jeune développeur, passionné par les technologies du web. 
                            J'ai appris à coder dés le lycée par simple curiosité, pour savoir comment était construit un site web. J'ai vraiment adoré ça. <br></br>
                            Par la suite j'ai effectué un <span style={{color: "#dff9fb", backgroundColor: "#c23616"}}>BTS SNIR (Systèmes Numériques informatique et Réseaux)</span> que j'ai obtenus. <br></br>
                            Et pour solidifier mes connaissances et mes compétences dans le développement web, j'ai effectué une <span style={{color: "#dff9fb", backgroundColor: "#c23616"}}> 
                            formation de développeur web fullstack Javascript à La Capsule,</span> sur la stack MERN (MongoDB, Express, React Js, Node Js)
                        </h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
  }
  
export default Presentation;