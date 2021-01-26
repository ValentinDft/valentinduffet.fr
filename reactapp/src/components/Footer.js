import React from 'react';
import { Col, Row } from 'antd';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import AOS from "aos";
import "aos/dist/aos.css";
  
    

function Footer() {
    return (
        <div style={{marginTop: "5%"}}>
            <Row>
                <Col span={24} style={{display: "flex", justifyContent: "center"}}>
                    <div data-aos="fade-down" data-aos-delay="1500" data-aos-delay="400">
                        <a href="https://www.linkedin.com/in/valentin-duffet/" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: "25px", marginRight: "5px", color: "#dff9fb"}}></FontAwesomeIcon></a>
                        
                    </div>
                    <div data-aos="fade-down" data-aos-delay="1800" data-aos-delay="500">
                        
                        <a href="https://github.com/ValentinDft" target="_blank"><FontAwesomeIcon icon={faGithub} style={{fontSize: "25px", color: "#dff9fb"}}></FontAwesomeIcon></a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{display: "flex", justifyContent: "center"}}>
                    <h6 style={{color: "white", marginTop: "1%", marginBottom: "4%"}}>© 2021 Valentin Duffet</h6>
                </Col>
            </Row>
        </div> 
    );
  }
  
export default Footer;