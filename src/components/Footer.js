import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import AOS from "aos";
import "aos/dist/aos.css";
  
    

function Footer() {
    return (
        <Container fluid={true} style={{marginTop: "5%", backgroundColor: "#333333"}}>
            <Row>
                <Col style={{display: "flex", justifyContent: "center"}}>
                    <FontAwesomeIcon icon={faChevronUp} style={{fontSize: "23px", color: "c23616", marginTop: "1%"}}></FontAwesomeIcon>
                </Col>
            </Row>
            <Row>
                <Col style={{display: "flex", justifyContent: "center"}}>
                    <h6 style={{color: "white", marginTop: "1%"}}>© 2020 Valentin Duffet</h6>
                </Col>
            </Row>
        </Container> 
    );
  }
  
export default Footer;