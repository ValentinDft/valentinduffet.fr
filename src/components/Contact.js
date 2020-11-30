import React from 'react';
import { Col, Row, Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AOS from "aos";
import "aos/dist/aos.css";
  
    

function Contact() {
    return (
        <Container style={{marginTop: "5%"}}>
            <h1 style={{textAlign: "center", marginBottom: "1%", color: "#dff9fb"}}>CONTACT</h1>
            <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
            <Row style={{display: "flex", justifyContent: "center"}}>
                <Col style={{display: "flex", justifyContent: "center"}}>
                    <Form style={{width:"40%"}}>
                        <FormGroup>
                            <Label style={{color: "white"}}>Nom et Prénom : </Label>
                            <Input type="text" name="nom" placeholder="Saisir votre nom et votre prénom" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label style={{color: "white"}}>Email : </Label>
                            <Input type="email" name="email" placeholder="Saisir votre email@" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label style={{color: "white"}}>Message : </Label>
                            <Input type="textarea" name="message" placeholder="Saisir votre message" required/>
                        </FormGroup>
                        <Button>Envoyer</Button>
                    </Form>
                </Col>
            </Row>
        </Container> 
    );
  }
  
export default Contact;