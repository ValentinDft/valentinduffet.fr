import React from 'react';
import { Col, Row, Container, CardImg } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import logoFront from "../front.png";
import logoBack from "../back.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Competences() {
    return (
        <Container style={{marginTop: "5%"}}>
            <Row>
                <Col>
                    <h1 style={{textAlign: "center", marginTop: "1%", marginBottom: "1%", color: "#dff9fb"}}>COMPETENCES <FontAwesomeIcon icon={faCode} style={{textAlign: "center", fontSize: "35px"}}></FontAwesomeIcon></h1>
                    <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                </Col>
            </Row>
            
            <div data-aos="flip-up" data-aos-duration="1500">
                <Col className="block-competences">
                    <Row>
                        <Col xs="6" sm="6" lg="3">
                            <CardImg src={logoFront} alt="Front-end" style={{borderRadius: "5%", width: "100%", height: "100%"}} className="img-competences"/>
                        </Col> 
                        <Col xs="6" sm="6" lg="9" style={{backgroundColor: "#f5f6fa", borderRadius: "5%", display: "flex", flexDirection: "column", justifyContent: "center"}} className="desc-competences">
                            <div data-aos="fade-down" data-aos-duration="1000" className="texte-competences">
                                <h4>Les languages : </h4>
                                <h5><FontAwesomeIcon icon={faHtml5} style={{fontSize: "25px", color: "#00D172"}} className="icon-competences"></FontAwesomeIcon> 
                                    Html, JSX <FontAwesomeIcon icon={faCss3Alt} style={{fontSize: "25px", color: "#00D172"}} className="icon-competences"></FontAwesomeIcon> 
                                    Css & <FontAwesomeIcon icon={faJs} style={{fontSize: "25px", color: "#00D172"}} className="icon-competences"></FontAwesomeIcon> 
                                    Javascript
                                </h5> <br/>
                                <h4>Frameworks et outils: </h4>
                                <h5><FontAwesomeIcon icon={faReact} style={{fontSize: "25px", color: "#00D172"}} className="icon-competences"></FontAwesomeIcon>
                                    React JS, Redux <FontAwesomeIcon icon={faBootstrap} style={{fontSize: "25px", color: "#00D172"}} className="icon-competences"></FontAwesomeIcon>
                                    Bootstrap & Ant-design
                                </h5>
                            </div>
                        </Col> 
                    </Row>
                </Col>
            </div>

            <div data-aos="flip-down" data-aos-duration="1500">
                <Col className="block-competences" style={{marginTop: "15px"}}>
                    <Row>
                        <Col xs="6" sm="6" md="6" lg="9" style={{backgroundColor: "#f5f6fa", borderRadius: "5%", display: "flex", flexDirection: "column", justifyContent: "center"}} className="desc-competences">
                            <div data-aos="fade-up" data-aos-duration="1000" className="texte-competences">
                                <h4>Les languages : </h4>
                                <h5><FontAwesomeIcon icon={faJs} style={{fontSize: "25px", color: "#0098FF"}} className="icon-competences"></FontAwesomeIcon> 
                                    Javascript
                                </h5> <br/>
                                <h4>Frameworks et Base de donnée: </h4>
                                <h5><FontAwesomeIcon icon={faNodeJs} style={{fontSize: "25px", color: "#0098FF"}} className="icon-competences"></FontAwesomeIcon> 
                                    Node.js, Express.js & MongoDB
                                </h5>
                            </div>
                        </Col> 
                        <Col xs="6" sm="6" md="6" lg="3">
                            <CardImg src={logoBack} alt="Front-end" style={{borderRadius: "5%", width: "100%", height: "100%"}} className="img-competences"/>
                        </Col> 
                    </Row>
                </Col>
            </div>  
        </Container> 
    );
  }
  
export default Competences;