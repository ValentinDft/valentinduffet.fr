import React from 'react';
import { Row, Col } from 'antd';
import { Controller, Scene } from 'react-scrollmagic';

import Card from "./CardExperience"

export default function Experience() {
    return (
        <div fluid={true} style={{marginTop: "5%"}}>
            <Row>
                <Col span={24}>
                <Controller>
                    <Scene duration={200} pin>
                        <div>
                            <h1 style={{textAlign: "center", marginTop: "1%", marginBottom: "1%", color: "#dff9fb", mixBlendMode : "overlay"}} className="titre-education">EXPERIENCE</h1>
                            <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "2%"}}></hr>
                        </div>
                    </Scene>
                </Controller>
                    
                </Col>
            </Row>
            <Row style={{display: "flex", justifyContent: "space-around"}}>
                <Card/>
            </Row>
        </div>
    )
}
