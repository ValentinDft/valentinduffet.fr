import React from 'react';
import { Row, Col } from 'antd';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGitlab } from '@fortawesome/free-brands-svg-icons'

function Presentation() {
    return (
        <div style={{marginTop: "5%"}} className="container">
            <Row>
                <Col span={24}>
                    
                    <h1 style={{textAlign: "center", marginBottom: "1%"}}>PRESENTATION</h1>
                    <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <h4 style={{marginBottom: "5%", textAlign: "justify"}} className="texte-presentation">
                            Jeune développeur, passionné par les technologies du web. 
                            J'ai appris à coder dès le lycée par simple curiosité, pour comprendre la réalité du développement d'un site web.
                            Une découverte qui m'a permis de m'épanouir dans un domaine extrênement enrichissant. <br></br>
                            Par la suite j'ai obtenu un <span style={{color: "#dff9fb", backgroundColor: "#c23616"}}>BTS SNIR (Systèmes Numériques informatique et Réseaux).</span> <br></br>
                            Et pour consolider mes connaissances et mes compétences dans le développement web, j'ai effectué une <span style={{color: "#dff9fb", backgroundColor: "#c23616"}}> 
                            formation de développeur web fullstack Javascript à La Capsule,</span> sur la stack MERN (MongoDB, Express, React Js, Node Js)
                        </h4>
                    </div>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <div data-aos="fade-up" data-aos-delay="1500" data-aos-delay="400">
                            <a href="https://www.linkedin.com/in/valentin-duffet/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: "28px", marginRight: "5px", color: "black"}}></FontAwesomeIcon></a>
                        </div>
                        <div data-aos="fade-down" data-aos-delay="1800" data-aos-delay="500">  
                            <a href="https://github.com/ValentinDft" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{fontSize: "28px", color: "black", marginRight: "5px"}}></FontAwesomeIcon></a>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="2100" data-aos-delay="600">  
                            <a href="https://gitlab.com/ValentinDft" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGitlab} style={{fontSize: "28px", color: "black"}}></FontAwesomeIcon></a>
                        </div>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", marginTop:"40px"}} data-aos="fade-up" data-aos-delay="3000" data-aos-delay="500">
                        <div className="flip">
                            <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-8d284.appspot.com/o/CV%20D%C3%A9veloppeur%20web%20junior%20DUFFET%20Valentin.pdf?alt=media&token=2bf0fdfe-93fb-47d3-bbf2-42bdfbe011c7" target="_blank" rel="noopener noreferrer">
                                <div class="front">VOIR</div>
                                <div class="back">MON CV</div>
                            </a>
                        </div>
                    </div>
                    
                    
                </Col>
            </Row>
            <div className="waves-bottom-presentation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill="white" d="M0,32L60,32C120,32,240,32,360,64C480,96,600,160,720,165.3C840,171,960,117,1080,85.3C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>
        </div>
        
        
    );
  }
  
export default Presentation;