import React from 'react';
import { CardImg } from 'reactstrap';
import { Row, Col } from 'antd';
import {Animated} from "react-animated-css";
import imgCard from '../IMG_5395.jpg';
import Typical from "react-typical"
import wave from "../wave-header.svg"

function Presentation() {
    return (
        <div>
            <div className="header">
                <Row>
                    <Col span={24} style={{display: "flex", justifyContent:"center", marginTop: "2%", marginBottom: "5%",}}>   
                        {/* <div className="mask mask_type1 mask_type1-a2" > */}
                            <CardImg src={imgCard} style={{ width: "450px", borderRadius: "30px"}} className="img-header"/>
                        {/* </div> */}
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{textAlign: "center"}} className="header-title">
                        <Animated animationIn="slideInUp" animationInDuration="1500" isVisible={true}>
                            <h1>Valentin Duffet</h1>
                            <h3 style={{color: "#c23616"}}>
                                <Typical
                                    loop={Infinity}
                                    wrapper="i"
                                    steps={["Développeur Web fullstack Javascript", 2000, "MongoDB, Express, React JS, Node JS", 2000]}
                                />
                            </h3>
                            
                        </Animated>
                    </Col>
                </Row>
                <Row>
                    <Col className="waves-bottom-header">
                        <img src={wave} style={{width: "100%"}}/>
                    </Col>
                </Row>
                    
            </div>
           

            
        </div>
        
        
    );
  }
  
export default Presentation;