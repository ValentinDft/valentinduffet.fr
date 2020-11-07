import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'


function Competences() {
    return (
        <Container style={{marginTop: "5%"}}>
            <Row>
                <Col>
                    <h2 style={{textAlign: "center", marginTop: "1%", marginBottom: "1%", color: "#dff9fb"}}>COMPETENCES <FontAwesomeIcon icon={faLaptopCode} style={{textAlign: "center", fontSize: "35px"}}></FontAwesomeIcon></h2>
                    <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                </Col>
            </Row>
            <Row>
               <Col sm="12" md="12" lg="12">
               </Col> 
            </Row>
        </Container> 
    );
  }
  
export default Competences;