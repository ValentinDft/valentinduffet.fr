import React from 'react';
import { Col, Row, Container, CardImg } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import logoFront from "../front.png";


function Competences() {
    return (
        <Container fluid={true} style={{marginTop: "5%"}}>
            <Row>
                <Col>
                    <h2 style={{textAlign: "center", marginTop: "1%", marginBottom: "1%", color: "#dff9fb"}}>COMPETENCES <FontAwesomeIcon icon={faLaptopCode} style={{textAlign: "center", fontSize: "35px"}}></FontAwesomeIcon></h2>
                    <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                </Col>
            </Row>
            
            <Col className="block-competences">
                <Row>
                    <Col sm="12" md="6" lg="3">
                        <CardImg src={logoFront} alt="Front-end" style={{borderRadius: "5%", width: "100%", height: "100%"}}/>
                    </Col> 
                    <Col sm="12" md="6" lg="9" style={{backgroundColor: "#f5f6fa", borderRadius: "5%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <h4>Les languages : </h4>
                        <h5>Html/Css & Javascript</h5> <br/>
                        <h4>Frameworks et outils: </h4>
                        <h5>React JS, Bootstrap, Ant-design</h5>
                    </Col> 
                </Row>
            </Col>
                
               
        </Container> 
    );
  }
  
export default Competences;