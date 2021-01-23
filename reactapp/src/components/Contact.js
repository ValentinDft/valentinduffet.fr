import React, {useState} from 'react';
import { message, Col, Row, Form, Button } from 'antd';
import '../App.css';

import AOS from "aos";
import "aos/dist/aos.css";
  
    

function Contact() {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [messageEmail, setMessageEmail] = useState("");
    const key = 'updatable';

    let clickEnvoyer = async () => {
        let requete = await fetch('/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `nom=${nom}&email=${email}&message=${messageEmail}`,
        });
        let response = await requete.json();

        if (response) {
            const openMessage = () => {
                message.loading({ content: 'Envoie en cours', key });
                setTimeout(() => {
                  message.success({ content: 'Envoyé', key, duration: 2 });
                }, 1500);
                
            };
            openMessage()
        } else {
            const openMessage = () => {
                message.loading({ content: 'Envoie en cours', key });
                setTimeout(() => {
                  message.error({ content: "Erreur d'envoie", key, duration: 2 });
                }, 2000);
                
            };
            openMessage()
        }
    }

    return (
        <div style={{marginTop: "5%"}}>
            <h1 style={{textAlign: "center", marginBottom: "1%", color: "#dff9fb"}}>CONTACT</h1>
            <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
            <Row style={{display: "flex", justifyContent: "center"}}>
                <Col span={20} style={{display: "flex", justifyContent: "center"}}>
                    <Form style={{width:"50%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <Form.Item>
                            
                            <input type="text" name="nom" className="input-text-contact" placeholder="Saisir votre nom et votre prénom" onChange={(e) => setNom(e.target.value)} required/>
                        </Form.Item>
                        <Form.Item>
                            
                            <input type="email" name="email" className="input-text-contact" placeholder="Saisir votre email@" required onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Item>
                        <Form.Item style={{marginBottom:"6%"}}>
        
                            <textarea rows="4" name="message" className="input-text-contact" placeholder="Saisir votre message" required onChange={(e) => setMessageEmail(e.target.value)}/>
                        </Form.Item>
                        <Button className="button-envoyer" onClick={()=>clickEnvoyer()}>Envoyer</Button>
                    </Form>
                </Col>
            </Row>
        </div> 
    );
  }
  
export default Contact;