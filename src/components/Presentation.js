import React from 'react';
import { Col } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

function Presentation() {
    return (
        <Col>
            <h1 style={{textAlign: "center"}}>Valentin Duffet</h1>
            <h3 style={{textAlign: "center"}}>Développeur web React JS <FontAwesomeIcon icon={faReact} style={{color: "#0984e3"}}/></h3>
        </Col> 
    
    );
  }
  
export default Presentation;