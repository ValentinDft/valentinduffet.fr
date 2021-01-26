import React from 'react';
import { Tag, Tooltip, Col, Row } from 'antd';
import '../App.css';
import logoShakti from "../captureMassageShakti.png"
import logoPortfolio from "../portfolio.png"
import logoWeWorkHome from "../weworkhome.png"

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
    const textIconGitHub = <span>Github du projet</span>;
    const textIconSite = <span>Site web</span>

    return (
        
        <div style={{marginTop: "5%", marginLeft: "10%", marginRight: "10%"}}>
            <Row>
                <Col span={24}>
                    <h1 style={{textAlign: "center", marginTop: "1%", marginBottom: "1%", color: "#dff9fb"}}>PORTFOLIO <FontAwesomeIcon icon={faLaptopCode} style={{textAlign: "center", fontSize: "35px"}}></FontAwesomeIcon></h1>
                    <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                </Col>
            </Row>
            <Row className="block-portfolio">
                
                
                <Col xs={18} md={11} lg={10} xl={7} className="card-portfolio" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="500">
                    <img src={logoShakti} style={{width: "85%", borderRadius: "10px"}} className="img-portfolio"></img>
                    <h2 style={{marginTop: "15px", color: "white", fontFamily: 'Nerko One', padding: "0px 5px"}}>Massage Shakti Ardèche</h2>
                    <h3 style={{fontSize: "15px", marginTop: "25px", color: "#bdc3c7", padding: "0px 20px", textAlign: "justify"}}>
                        Site web de massage en Ardèche pour un particulier, avec les prestations ainsi qu'un formulaire de contact.
                    </h3>
                    <Tag style={{marginTop: "25px"}}> 
                        <FontAwesomeIcon icon={faHtml5} style={{fontSize: "14px"}}></FontAwesomeIcon> Html 
                        <FontAwesomeIcon icon={faCss3Alt} style={{fontSize: "14px", marginLeft: "2px"}}></FontAwesomeIcon> Css
                    </Tag>
                    <Tag>
                        <FontAwesomeIcon icon={faBootstrap} style={{fontSize: "14px"}}></FontAwesomeIcon> Bootstrap
                    </Tag>
                    <Row style={{marginTop: "45px"}}>
                        <Col xs={12}>
                            <Tooltip placement="bottom" title={textIconGitHub}>
                                <a href="https://github.com/ValentinDft/Massage-Shakti" target="_blank"><FontAwesomeIcon icon={faGithub} style={{fontSize: "25px", color: "white"}}></FontAwesomeIcon></a>
                            </Tooltip>
                        </Col>
                        <Col xs={12}>
                            <Tooltip placement="bottom" title={textIconSite}>
                            <a href="https://massageshaktiardeche.fr/" target="_blank"><FontAwesomeIcon icon={faLink} style={{fontSize: "25px", color: "white"}}></FontAwesomeIcon></a>
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>
            
                <Col xs={18} md={11} lg={10} xl={7} className="card-portfolio" data-aos="zoom-in-down" data-aos-duration="1500" data-aos-delay="700">
                    <img src={logoPortfolio} style={{width: "85%", borderRadius: "10px"}} className="img-portfolio"></img>
                    <h2 style={{marginTop: "15px", color: "white", fontFamily: 'Nerko One'}}>Portfolio</h2>
                    <h3 style={{fontSize: "15px", marginTop: "25px", color: "#bdc3c7", padding:"0px 20px" , textAlign: "justify"}}>
                        Portfolio en ligne réalisé avec React JS. Présentation de mon parcours, mes études ainsi que mes compétences acquises. 
                    </h3>
                    <Tag style={{marginTop: "25px"}}> 
                        <FontAwesomeIcon icon={faReact} style={{fontSize: "14px"}}></FontAwesomeIcon> React JS 
                    </Tag>
                    <Tag>
                        Express JS
                    </Tag>
                    <Tag>
                        Ant Design
                    </Tag>
                    <Tag>
                        Firebase Hosting
                    </Tag>
                    <Row style={{marginTop: "45px"}}>
                        <Col xs={12}>
                            <Tooltip placement="bottom" title={textIconGitHub}>
                                <a href="https://github.com/ValentinDft/mon_portfolio" target="_blank"><FontAwesomeIcon icon={faGithub} style={{fontSize: "25px", color: "white"}}></FontAwesomeIcon></a>
                            </Tooltip>
                        </Col>
                        <Col xs={12}>
                            <Tooltip placement="bottom" title={textIconSite}>
                            <a href="https://valentinduffet.fr/" target="_blank"><FontAwesomeIcon icon={faLink} style={{fontSize: "25px", color: "white"}}></FontAwesomeIcon></a>
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>
                                   
                <Col xs={18} md={11} lg={10} xl={7} className="card-portfolio" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="900">
                    <img src={logoWeWorkHome} style={{width: "85%", borderRadius: "10px"}} className="img-portfolio"></img>
                    <h2 style={{marginTop: "15px", color: "white", fontFamily: 'Nerko One'}}>WeWorkHome</h2>
                    <h3 style={{fontSize: "15px", marginTop: "15px", color: "#bdc3c7", padding:"0px 20px", textAlign: "justify"}}>
                        Développeur front-end, projet avec trois développeurs. JobBoard spécialisé dans le télétravail, recherche d'emploi pour les candidats et poste d'annonce pour les recruteurs.
                    </h3>
                    <Tag style={{marginTop: "15px"}}> 
                        <FontAwesomeIcon icon={faReact} style={{fontSize: "14px"}}></FontAwesomeIcon> React JS 
                    </Tag>
                    <Tag>
                        Express JS
                    </Tag>
                    <Tag>
                        Ant Design
                    </Tag>
                    <br></br>
                    <Tag>
                        Stripe
                    </Tag>
                    <Tag>
                        Heroku Hosting
                    </Tag>
                    <Row style={{marginTop: "50px"}}>
                        <Col xs={24}>
                            <Tooltip placement="bottom" title={textIconSite}>
                            <a href="https://www.weworkhome.io/" target="_blank"><FontAwesomeIcon icon={faLink} style={{fontSize: "25px", color: "white"}}></FontAwesomeIcon></a>
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>
                            
                      
               
            </Row>
        </div>
        
    
        
    );
  }
  
export default Portfolio;