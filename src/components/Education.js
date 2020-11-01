import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'


function Education() {
    return (
        <Container fluid={true} style={{backgroundColor: "#c23616", marginTop: "5%"}}>
            <Row>
                <Col>
                    <h2 style={{textAlign: "center", marginTop: "1%", marginBottom: "1%"}}>EDUCATION <FontAwesomeIcon icon={faGraduationCap} style={{textAlign: "center", fontSize: "35px"}}></FontAwesomeIcon></h2>
                    <hr style={{borderTop: "8px solid #636e72", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                    
                </Col>
            </Row>
        </Container>
        
         
    );
  }
  
export default Education;