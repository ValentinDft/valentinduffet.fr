import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { Timeline } from 'antd';
import AOS from "aos";
import "aos/dist/aos.css";


function Education() {
    return (
        <Container fluid={true} style={{marginTop: "5%"}}>
            <Row>
                <Col>
                    <h2 style={{textAlign: "center", marginTop: "1%", marginBottom: "1%"}}>EDUCATION <FontAwesomeIcon icon={faGraduationCap} style={{textAlign: "center", fontSize: "35px"}}></FontAwesomeIcon></h2>
                    <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Timeline mode="alternate">
                        <Col> 
                            <div data-aos="fade-up">
                                <Timeline.Item>
                                    <div className="block">
                                        <FontAwesomeIcon icon={faUniversity} style={{fontSize: "25px"}}></FontAwesomeIcon>
                                        <h6 className="block"><FontAwesomeIcon icon={faClock} style={{fontSize: "20px"}}></FontAwesomeIcon> 2013 - 2016</h6>
                                        <h4 className="block">Lycée Polyvalent Astier - Aubenas 07200</h4>
                                        <h5 className="block">Baccalauréat ELEEC, mention assez bien</h5>
                                        <h6 className="block">ELectrotechnique Energie Equipement Communicant</h6>
                                    </div>
                                </Timeline.Item>
                            </div>
                        </Col>
                        <Col> 
                            <div data-aos="fade-up">
                                <Timeline.Item>
                                    <div className="block">
                                        <h6><small class="far fa-clock"> 2013 - 2016</small> </h6>
                                        <h4>Lycée Polyvalent Astier - Aubenas 07200</h4>
                                        <h5>Baccalauréat ELEEC, mention assez bien</h5>
                                        <h6>ELectrotechnique Energie Equipement Communicant</h6>
                                    </div>
                                </Timeline.Item>
                            </div>
                        </Col>
                        <Col> 
                            <div data-aos="fade-up">
                                <Timeline.Item>
                                    <div className="block">
                                        <h6><small class="far fa-clock"> 2013 - 2016</small> </h6>
                                        <h4>Lycée Polyvalent Astier - Aubenas 07200</h4>
                                        <h5>Baccalauréat ELEEC, mention assez bien</h5>
                                        <h6>ELectrotechnique Energie Equipement Communicant</h6>
                                    </div>
                                </Timeline.Item>
                            </div>
                        </Col>
                        
                    </Timeline>
                </Col>
                    
               
            </Row>
                
            
            
        </Container>
        
        
         
    );
  }
  
export default Education;