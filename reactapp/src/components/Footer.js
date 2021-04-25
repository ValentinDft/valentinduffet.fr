import React from 'react';
import { Col, Row } from 'antd';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'

// import img
import up from '../up.png'  

function Footer() {
    return (
        <div style={{marginTop: "3%"}}>
            <Row>
                <Col span={24} style={{display: "flex", justifyContent: "flex-end", padding: "20px"}}>
                    <div data-aos="fade-up" data-aos-delay="1800" data-aos-delay="500">
                        <FontAwesomeIcon icon={faChevronCircleUp} style={{fontSize: "35px", cursor: "pointer", color: "#dff9fb"}} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}></FontAwesomeIcon>
                    </div>
                    
                </Col> 
            </Row> 
            <Row>
                <Col span={24} style={{display: "flex", justifyContent: "center"}}>
                    <div data-aos="fade-down" data-aos-delay="1500" data-aos-delay="400">
                        <a href="https://www.linkedin.com/in/valentin-duffet/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: "25px", marginRight: "5px", color: "#dff9fb"}}></FontAwesomeIcon></a>
                        
                    </div>
                    <div data-aos="fade-down" data-aos-delay="1800" data-aos-delay="500">
                        
                        <a href="https://github.com/ValentinDft" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{fontSize: "25px", color: "#dff9fb", marginRight: "5px"}}></FontAwesomeIcon></a>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="2100" data-aos-delay="600">
                        
                        <a href="https://gitlab.com/ValentinDft" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGitlab} style={{fontSize: "25px", color: "#dff9fb"}}></FontAwesomeIcon></a>
                    </div>
                </Col>
                
            </Row>
            <Row>
                <Col span={24} style={{display: "flex", justifyContent: "center"}}>
                    <h6 style={{color: "white", marginTop: "1%", marginBottom: "5%", mixBlendMode : "overlay"}}>© 2021 Valentin Duffet</h6>
                </Col>
            </Row>
           
            
        </div> 
    );
  }
  
export default Footer;