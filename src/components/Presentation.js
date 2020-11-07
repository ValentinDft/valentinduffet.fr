import React from 'react';
import { Col, CardImg, Container, Row } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import {Animated} from "react-animated-css";
import imgCard from '../IMG_5395.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

function Presentation() {
    return (
        <div>
            <Container fluid={true}>
                <Row>
                    <Col sm="12" md="12" lg="12">   
                        <CardImg src={imgCard} style={{marginTop: "3%", marginBottom: "5%", borderRadius: "5%", width: "450px", display: "block", marginLeft: "auto", marginRight: "auto"}}/>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Animated animationIn="slideInUp" animationInDuration="1500" isVisible={true}>
                            <h1 style={{textAlign: "center", color: "#dff9fb"}}>Valentin Duffet</h1>
                            <h3 style={{textAlign: "center", color: "#c23616"}}>Développeur Web fullstack Javascript <FontAwesomeIcon icon={faJs} style={{color: "#dff9fb"}}/> </h3>
                        </Animated>
                    </Col>
                </Row>
            </Container> 
            <Container style={{marginTop: "5%"}}>
                <Row>
                    <Col sm="12" md="12" lg="12">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <h2 style={{textAlign: "center", marginBottom: "1%", color: "#dff9fb"}}>PRESENTATION</h2>
                            <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                            <h4 style={{marginBottom: "5%", textAlign: "justify", color: "#dff9fb"}}>
                                Jeune développeur, passionné par les technologies du web. 
                                J'ai appris à coder dés le lycée par simple curiosité, pour savoir comment était construit un site web. J'ai vraiment adoré ça. <br></br>
                                Par la suite j'ai effectué un <span style={{color: "#dff9fb", backgroundColor: "#c23616"}}>BTS SNIR (Systèmes Numériques informatique et Réseaux)</span> que j'ai obtenus. <br></br>
                                Et pour solidifier mes connaissances et mes compétences dans le développement web, j'ai effectué une <span style={{color: "#dff9fb", backgroundColor: "#c23616"}}> 
                                formation de développeur web fullstack Javascript à La Capsule.</span>  
                            </h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
  }
  
export default Presentation;