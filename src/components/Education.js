import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Timeline } from 'antd';
import AOS from "aos";
import "aos/dist/aos.css";


function Education() {
    return (
        <Container fluid={true} style={{marginTop: "5%"}}>
            <Row>
                <Col>
                    <h2 style={{textAlign: "center", marginTop: "1%", marginBottom: "1%", color: "#dff9fb"}}>EDUCATION <FontAwesomeIcon icon={faGraduationCap} style={{textAlign: "center", fontSize: "35px"}}></FontAwesomeIcon></h2>
                    <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Timeline mode="alternate">
                        <Col sm="12" md="12" lg="12"> 
                            <Timeline.Item>
                                <div data-aos="zoom-in-left" data-aos-duration="1500">
                                    <div className="block-education-right">
                                        <FontAwesomeIcon icon={faUniversity} style={{fontSize: "25px"}}></FontAwesomeIcon>
                                        <h6 style={{color: "#c23616"}}><FontAwesomeIcon icon={faClock} style={{fontSize: "20px"}}></FontAwesomeIcon> 09/2020 - 10/2020</h6>
                                        <h4><FontAwesomeIcon icon={faRocket} style={{fontSize: "20px"}}></FontAwesomeIcon> La Capsule Academy - Lyon</h4>
                                        <h5 style={{color: "#c23616"}}>Formation développeur web fullstack Javascript</h5>
                                        <h6>
                                            <FontAwesomeIcon icon={faReact} style={{fontSize: "25px"}}></FontAwesomeIcon> 
                                            React JS <FontAwesomeIcon icon={faReact} style={{fontSize: "25px"}}></FontAwesomeIcon> 
                                            React Native & Redux <FontAwesomeIcon icon={faNodeJs} style={{fontSize: "25px"}}></FontAwesomeIcon> 
                                            Node JS / Express & MongoDB <FontAwesomeIcon icon={faBootstrap} style={{fontSize: "25px"}}></FontAwesomeIcon> 
                                            Boostrap <FontAwesomeIcon icon={faGithub} style={{fontSize: "25px"}}></FontAwesomeIcon> Git
                                        </h6>
                                    </div>
                                </div>
                            </Timeline.Item>
                        </Col>
                        <Col sm="12" md="12" lg="12"> 
                            <Timeline.Item>
                                <div data-aos="zoom-in-right" data-aos-duration="1500">
                                    <div className="block-education-left">
                                        <FontAwesomeIcon icon={faUniversity} style={{fontSize: "25px"}}></FontAwesomeIcon>
                                        <h6 style={{color: "#c23616"}}>
                                            <FontAwesomeIcon icon={faClock} style={{fontSize: "20px"}}></FontAwesomeIcon> 2017 - 2019
                                        </h6>
                                        <h4>Lycée Polyvalent Astier - Aubenas 07200</h4>
                                        <h5 style={{color: "#c23616"}}>BTS SNIR (Systèmes Numériques informatique et Réseaux), admis</h5>
                                        <h6>
                                            <FontAwesomeIcon icon={faJava} style={{fontSize: "25px"}}></FontAwesomeIcon> 
                                            Java <FontAwesomeIcon icon={faHtml5} style={{fontSize: "25px"}}></FontAwesomeIcon> 
                                            HTML <FontAwesomeIcon icon={faCss3Alt} style={{fontSize: "25px"}}></FontAwesomeIcon> 
                                            CSS <FontAwesomeIcon icon={faJs} style={{fontSize: "25px"}}></FontAwesomeIcon> 
                                            Javascript <FontAwesomeIcon icon={faPhp} style={{fontSize: "25px"}}></FontAwesomeIcon> 
                                            Php & MySql & infrastuctures réseaux</h6>
                                    </div>
                                </div>
                            </Timeline.Item>
                        </Col>
                        <Col sm="12" md="12" lg="12"> 
                            <Timeline.Item>
                                <div data-aos="zoom-in-left" data-aos-duration="1500">
                                    <div className="block-education-right">
                                        <FontAwesomeIcon icon={faUniversity} style={{fontSize: "25px"}}></FontAwesomeIcon>
                                        <h6 style={{color: "#c23616"}}><FontAwesomeIcon icon={faClock} style={{fontSize: "20px"}}></FontAwesomeIcon> 2013 - 2016</h6>
                                        <h4>Lycée Polyvalent Astier - Aubenas 07200</h4>
                                        <h5 style={{color: "#c23616"}}>Baccalauréat ELEEC, mention assez bien</h5>
                                        <h6>ELectrotechnique Energie Equipement Communicant</h6>
                                    </div>
                                </div>
                            </Timeline.Item>
                        </Col>
                        
                    </Timeline>
                </Col>
                    
               
            </Row>
                
            
            
        </Container>
        
        
         
    );
  }
  
export default Education;