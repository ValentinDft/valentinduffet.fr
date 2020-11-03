import React from 'react';
import { Col, CardImg, Container, Row } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import {Animated} from "react-animated-css";
import imgCard from '../IMG_5395.jpg';

function Presentation() {
    return (
        <Container>
            <Row>
                <Col sm="12" md="12" lg="6">
                    <Animated animationIn="fadeInLeftBig" animationInDuration="1500" isVisible={true}>
                        <CardImg src={imgCard} style={{marginTop: "8%", marginBottom: "15%", borderRadius: "5%", width: "450px"}}/>
                    </Animated>
                </Col>
                <Col sm="12" md="12" lg="6">
                    <Animated animationIn="fadeInRightBig" animationInDuration="1500" isVisible={true}>
                        <h2 style={{textAlign: "center", marginTop: "5%", marginBottom: "3%"}}>PRESENTATION</h2>
                        <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                        <h4 style={{marginTop: "3%", marginBottom: "10%", textAlign: "justify"}}>
                            Jeune développeur, passioné par les technologies du web. 
                            J'ai appris à coder dés le lycée par simple curiosité, pour savoir comment était fait un site web. J'ai vraiment adoré ça. <br></br>
                            Par la suite j'ai effectué un <span style={{color: "#c23616"}}>BTS SNIR (Systèmes Numériques informatique et Réseaux)</span> que j'ai obtenus. <br></br>
                            Et pour solidifier mes connaissances et mes compétences dans le développement web, j'ai effectué une 
                            <span style={{color: "#c23616"}}> formation de développeur web fullstack Javascript à La Capsule.</span></h4>
                    </Animated> 
                </Col>
            </Row>
            <Row>
                <Col sm="12">
                    <h1 style={{textAlign: "center"}}>Valentin Duffet</h1>
                    <h3 style={{textAlign: "center", color: "#636e72"}}>Développeur Web fullstack Javascript <FontAwesomeIcon icon={faJs} style={{color: "#c23616"}}/> </h3>
                </Col>
            </Row>
                
            
        </Container> 
    );
  }
  
export default Presentation;