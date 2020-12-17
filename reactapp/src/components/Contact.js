import React, {useState} from 'react';
import { Col, Row, Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AOS from "aos";
import "aos/dist/aos.css";
  
    

function Contact() {
    const [nom, setNom] = useState("");
    console.log('nom:', nom)
    const [email, setEmail] = useState("");
    console.log('email:', email)
    const [message, setMessage] = useState("");
    console.log('message:', message)

    let clickEnvoyer = async () => {
        let requete = await fetch('/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `nom=${nom}&email=${email}&message=${message}`,
        });
        let response = await requete.json();

        console.log('response:', response);

        // if (response) {
        //     setSuccessMessage(
        //         <Alert color='success'>
        //             {' '}
        //             Success, check your email : {emailSouscription}
        //         </Alert>
        //     );
        // } else {
        //     setSuccessMessage(<Alert color='danger'> Error </Alert>);
        // }
    }

    return (
        <Container style={{marginTop: "5%"}}>
            <h1 style={{textAlign: "center", marginBottom: "1%", color: "#dff9fb"}}>CONTACT</h1>
            <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
            <Row style={{display: "flex", justifyContent: "center"}}>
                <Col style={{display: "flex", justifyContent: "center"}}>
                    <Form style={{width:"50%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <FormGroup>
                            <Label style={{color: "white"}}>Nom et Prénom : </Label>
                            <Input type="text" name="nom" placeholder="Saisir votre nom et votre prénom" onChange={(e) => setNom(e.target.value)} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label style={{color: "white"}}>Email : </Label>
                            <Input type="email" name="email" placeholder="Saisir votre email@" required onChange={(e) => setEmail(e.target.value)}/>
                        </FormGroup>
                        <FormGroup style={{marginBottom:"6%"}}>
                            <Label style={{color: "white"}}>Message : </Label>
                            <Input type="textarea" name="message" placeholder="Saisir votre message" required onChange={(e) => setMessage(e.target.value)}/>
                        </FormGroup>
                        <Button className="button-envoyer" onClick={()=>clickEnvoyer()}>Envoyer</Button>
                    </Form>
                </Col>
            </Row>
        </Container> 
    );
  }
  
export default Contact;