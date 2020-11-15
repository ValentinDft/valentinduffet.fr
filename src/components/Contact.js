import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    return (
        <Container style={{marginTop: "5%"}}>
            <h2 style={{textAlign: "center", marginBottom: "1%", color: "#dff9fb"}}>CONTACT</h2>
            <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
            <Row style={{display: "flex", justifyContent: "center"}}>
                <Col className="card-contact">
                    <h5>to</h5>
                </Col>
            </Row>
        </Container> 
    );
  }
  
export default Contact;