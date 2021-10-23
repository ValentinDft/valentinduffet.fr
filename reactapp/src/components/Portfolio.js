import React from 'react';
import { Tag, Tooltip, Col, Row } from 'antd';
import { Controller, Scene } from 'react-scrollmagic';

// import img
import logoShakti from "../captureMassageShakti.png"
import logoPortfolio from "../portfolio.png"
import logoWeWorkHome from "../weworkhome.png"
import logoMovieCollection from "../movie_collection.png"
import captureTooDoList from "../captureTooDoList.gif"
import captureSneakersApp from "../captureSneakersApp.gif"
import captureMorningNews from "../captureMorningNews.PNG"

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

function Portfolio() {
    const textIconGitHub = <span>Github du projet</span>;
    const textIconSite = <span>Site web</span>

    return (
        
        <div style={{marginTop: "5%", marginLeft: "8%", marginRight: "8%"}}>
            <Row>
                <Col span={24}>
                <Controller>
                    <Scene duration={200} pin>
                        <div>
                            <h1 style={{textAlign: "center", marginTop: "1%", marginBottom: "1%", color: "#dff9fb", mixBlendMode : "overlay"}}>PORTFOLIO <FontAwesomeIcon icon={faLaptopCode} style={{textAlign: "center", fontSize: "35px"}}></FontAwesomeIcon></h1>
                            <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                        </div>
                    </Scene>
                </Controller>
                    
                </Col>
            </Row>
            <Row className="block-portfolio">
                <Col xs={24} md={11} lg={11} xl={11} className="card-portfolio grp1" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="300">
                    <div className="header-card-portfolio">
                        <span className="btn-bullet" style={{backgroundColor:"#df7065"}}></span>
                        <span className="btn-bullet" style={{backgroundColor:"#e6bb46"}}></span>
                        <span className="btn-bullet" style={{backgroundColor:"#5bcc8b"}}></span>
                        
                        <span className="url-projet">
                            
                            <Tooltip placement="top" title={textIconSite}>
                                <a href="http://massage-ayurardeche.fr/" target="_blank" rel="noopener noreferrer" style={{color: "black", textDecoration: "none"}}> http://massage-ayurardeche.fr/</a>
                            </Tooltip>
                        </span>
                    </div>

                    <div style={{overflow: "hidden"}}>
                        <img src={logoShakti} style={{width: "100%", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px"}} className="img-portfolio" alt="logoShakti"></img>
                    </div>
                    
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
                        <Col xs={24}>
                            <Tooltip placement="right" title={textIconGitHub}>
                                <a href="https://github.com/ValentinDft/Massage-Shakti" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{fontSize: "25px", color: "white"}}></FontAwesomeIcon></a>
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>

                <Col xs={24} md={11} lg={11} xl={11} className="card-portfolio grp1" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="600">
                    <div className="header-card-portfolio">
                        <span className="btn-bullet" style={{backgroundColor:"#df7065"}}></span>
                        <span className="btn-bullet" style={{backgroundColor:"#e6bb46"}}></span>
                        <span className="btn-bullet" style={{backgroundColor:"#5bcc8b"}}></span>
                        
                        <span className="url-projet">
                            
                            <Tooltip placement="top" title={textIconSite}>
                                <a href="https://valentinduffet.fr/" target="_blank" rel="noopener noreferrer" style={{color: "black", textDecoration: "none"}}>https://valentinduffet.fr/</a>
                            </Tooltip>
                        </span>
                    </div>
                    <div style={{overflow: "hidden"}}>
                    <img src={logoPortfolio} style={{width: "100%", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px"}} className="img-portfolio" alt="logoPortfolio"></img>
                    </div>
                    <h2 style={{marginTop: "15px", color: "white", fontFamily: 'Nerko One'}}>Portfolio</h2>
                    <h3 style={{fontSize: "15px", marginTop: "25px", color: "#bdc3c7", padding:"0px 20px" , textAlign: "justify"}}>
                        Portfolio en ligne réalisé avec React JS. Présentation de mon parcours, mes études ainsi que mes compétences acquises. 
                    </h3>
                    <Tag style={{marginTop: "25px"}}> 
                        <FontAwesomeIcon icon={faReact} style={{fontSize: "14px"}}></FontAwesomeIcon> React.js
                    </Tag>
                    <Tag>
                        Express
                    </Tag>
                    <Tag>
                        Ant Design
                    </Tag>
                    <Tag>
                        Firebase Hosting
                    </Tag>
                    <Row style={{marginTop: "45px"}}>
                        <Col xs={24}>
                            <Tooltip placement="right" title={textIconGitHub}>
                                <a href="https://github.com/ValentinDft/mon_portfolio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{fontSize: "25px", color: "white"}}></FontAwesomeIcon></a>
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>

                <Col xs={24} md={11} lg={11} xl={11} className="card-portfolio grp2" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="300">
                    <div className="header-card-portfolio">
                        <span className="btn-bullet" style={{backgroundColor:"#df7065"}}></span>
                        <span className="btn-bullet" style={{backgroundColor:"#e6bb46"}}></span>
                        <span className="btn-bullet" style={{backgroundColor:"#5bcc8b"}}></span>
                        
                        <span className="url-projet">
                            
                            <Tooltip placement="right" title={textIconSite}>
                                <a href="https://www.weworkhome.io/" target="_blank"  rel="noopener noreferrer" style={{color: "black", textDecoration: "none"}}>https://www.weworkhome.io/</a>
                            </Tooltip>
                        </span>
                    </div>
                    <div style={{overflow: "hidden"}}>
                    <img src={logoWeWorkHome} style={{width: "100%", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px"}} className="img-portfolio" alt="logoWeWorkHome"></img>
                    </div>
                    <h2 style={{marginTop: "15px", color: "white", fontFamily: 'Nerko One'}}>WeWorkHome / Co-fondateur</h2>
                    <h3 style={{fontSize: "15px", marginTop: "15px", color: "#bdc3c7", padding:"0px 20px", textAlign: "justify"}}>
                        Développeur front-end, projet avec trois développeurs. JobBoard spécialisé dans le télétravail, recherche d'emploi pour les candidats et poste d'annonce pour les recruteurs.
                    </h3>
                    <Tag style={{marginTop: "15px"}}> 
                        <FontAwesomeIcon icon={faReact} style={{fontSize: "14px"}}></FontAwesomeIcon> React.js 
                    </Tag>
                    <Tag>
                        Redux
                    </Tag>
                    <Tag>
                        Express
                    </Tag>
                    <Tag>
                        Ant Design
                    </Tag>
                    <Tag>
                        Stripe
                    </Tag>
                    <Tag>
                        Heroku Hosting
                    </Tag>
                    <Row style={{marginTop: "45px"}}>
                        <Col xs={24}>
                            <Tooltip placement="right" title="Github privé">
                                <FontAwesomeIcon icon={faGithub} style={{fontSize: "25px", color: "white"}}></FontAwesomeIcon>
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>
               
                <Col xs={24} md={11} lg={11} xl={11} className="card-portfolio grp2" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="600">
                    <div className="header-card-portfolio">
                        <span className="btn-bullet" style={{backgroundColor:"#df7065"}}></span>
                        <span className="btn-bullet" style={{backgroundColor:"#e6bb46"}}></span>
                        <span className="btn-bullet" style={{backgroundColor:"#5bcc8b"}}></span>
                        
                        <span className="url-projet">
                            
                            <Tooltip placement="right" title={textIconSite}>
                                <a href="https://movie-collection.valentinduffet.fr/" target="_blank" rel="noopener noreferrer" style={{color: "black", textDecoration: "none"}}>https://movie-collection.valentinduffet.fr/</a>
                            </Tooltip>
                        </span>
                    </div>
                    <div style={{overflow: "hidden"}}>
                    <img src={logoMovieCollection} style={{width: "100%", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px"}} className="img-portfolio" alt="logoMovieCollection"></img>
                    </div>
                    <h2 style={{marginTop: "15px", color: "white", fontFamily: 'Nerko One'}}>The Movies Collection</h2>
                    <h3 style={{fontSize: "15px", marginTop: "15px", color: "#bdc3c7", padding:"0px 20px", textAlign: "justify"}}>
                        Web App de collection de films et de séries. Utilisation de l'api MovieDB pour récupérer les informations des films et séries les plus populaires actuellement et exploitation des données reçues de l'api.
                    </h3>
                    <Tag style={{marginTop: "15px"}}> 
                        <FontAwesomeIcon icon={faReact} style={{fontSize: "14px"}}></FontAwesomeIcon> React.js 
                    </Tag>
                    <Tag>
                        Redux
                    </Tag>
                    <Tag>
                        Express
                    </Tag>
                    <Tag>
                        Ant Design
                    </Tag>
                    <Tag>
                        MovieDB API
                    </Tag>
                    <Row style={{marginTop: "45px"}}>
                        <Col xs={24}>
                            <Tooltip placement="right" title={textIconGitHub}>
                                <a href="https://github.com/ValentinDft/the_movies_collection" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{fontSize: "25px", color: "white"}}></FontAwesomeIcon></a>
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>

                <Col xs={24} md={11} lg={9} xl={7} className="card-portfolio grp2" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="300">
                    
                    <img src={captureTooDoList} style={{width: "100%", height: "730px", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px"}} className="img-portfolio-alt" alt="too do list"></img>
                    
                    <h2 style={{marginTop: "15px", color: "white", fontFamily: 'Nerko One'}}>Too Do List</h2>
                    <h3 style={{fontSize: "15px", marginTop: "15px", color: "#bdc3c7", padding:"0px 20px", textAlign: "justify"}}>
                        Application React Native de gestion de tâche simple. Ajout et suppression des tâches de la journée.
                    </h3>
                    <Tag style={{marginTop: "15px"}}> 
                        <FontAwesomeIcon icon={faReact} style={{fontSize: "14px"}}></FontAwesomeIcon> React Native 
                    </Tag>
                    <Tag>
                        Expo
                    </Tag>
                    <Row style={{marginTop: "45px"}}>
                        <Col xs={24}>
                            <Tooltip placement="right" title={textIconGitHub}>
                                <a href="https://github.com/ValentinDft/tooDoList_ReactNative" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{fontSize: "25px", color: "white"}}></FontAwesomeIcon></a>
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>

                <Col xs={24} md={11} lg={9} xl={7} className="card-portfolio grp2" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="600">
                    
                    <img src={captureSneakersApp} style={{width: "100%", height: "730px", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px"}} className="img-portfolio-alt" alt="sneakers app"></img>
                    
                    <h2 style={{marginTop: "15px", color: "white", fontFamily: 'Nerko One'}}>Shop My Sneakers</h2>
                    <h3 style={{fontSize: "15px", marginTop: "15px", color: "#bdc3c7", padding:"0px 20px", textAlign: "justify"}}>
                        Application React Native. Front-end d'une app de Sneakers, affichage des données en liste et navigation vers la page de détail du produit.
                    </h3>
                    <Tag style={{marginTop: "15px"}}> 
                        <FontAwesomeIcon icon={faReact} style={{fontSize: "14px"}}></FontAwesomeIcon> React Native 
                    </Tag>
                    <Tag>
                        Expo
                    </Tag>
                    <Row style={{marginTop: "45px"}}>
                        <Col xs={24}>
                            <Tooltip placement="right" title={textIconGitHub}>
                                <a href="https://github.com/ValentinDft/sneakersApp_React-Native" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{fontSize: "25px", color: "white"}}></FontAwesomeIcon></a>
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>

                <Col xs={24} md={11} lg={11} xl={11} className="card-portfolio grp2" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="600">
                    <div className="header-card-portfolio">
                        <span className="btn-bullet" style={{backgroundColor:"#df7065"}}></span>
                        <span className="btn-bullet" style={{backgroundColor:"#e6bb46"}}></span>
                        <span className="btn-bullet" style={{backgroundColor:"#5bcc8b"}}></span>
                        
                        <span className="url-projet">
                            
                            <Tooltip placement="right" title="Soon">
                                <a target="_blank" rel="noopener noreferrer" style={{color: "black", textDecoration: "none"}}>https://morning-news.valentinduffet.fr/</a>
                            </Tooltip>
                        </span>
                    </div>
                    <div style={{overflow: "hidden"}}>
                    <img src={captureMorningNews} style={{width: "100%", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px"}} className="img-portfolio" alt="logoMovieCollection"></img>
                    </div>
                    <h2 style={{marginTop: "15px", color: "white", fontFamily: 'Nerko One'}}>Morning News</h2>
                    <h3 style={{fontSize: "15px", marginTop: "15px", color: "#bdc3c7", padding:"0px 20px", textAlign: "justify"}}>
                        Web app dévelopée avec le framework Next.js. Collection de plusieurs journaux et articles, pour avoir les actualités les plus récentes condensées sur une seule plateforme. Récupération des données depuis News API.
                    </h3>
                    <Tag style={{marginTop: "15px"}}> 
                        Next.js 
                    </Tag>
                    {/* <Tag>
                        Redux
                    </Tag> */}
                    <Tag>
                        Styled Component
                    </Tag>
                    <Tag>
                        News API
                    </Tag>
                    <Row style={{marginTop: "45px"}}>
                        <Col xs={24}>
                            <Tooltip placement="right" title={textIconGitHub}>
                                <a href="https://github.com/ValentinDft/Morning-News" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{fontSize: "25px", color: "white"}}></FontAwesomeIcon></a>
                            </Tooltip>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
        </div>
        
    
        
    );
  }
  
export default Portfolio;