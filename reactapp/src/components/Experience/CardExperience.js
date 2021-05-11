import React, {useState} from 'react'
import { Row, Col, Tag } from 'antd';

export default function CardExperience() {

    const [dataExperience] = useState([
        { titre: "Stage BTS SNIR", description: "Modification du front-end, ajout de contenu sur le site internet",
            date: "Mai 2018 - Juillet 2018", entreprise: "Base Nautique du Pont d'Arc", tag: ["#html", "#css", "#Wordpress", "#php"]
        },
        { titre: "Formateur assistant", description: "J'interviens auprès des étudiants faisant face à des problèmes techniques, ainsi que dans l'approfondissement de certains aspects du cours.",
            date: "Janvier 2021 - Février 2021", entreprise: "La Capsule Academy", tag: ["#html", "#css", "#javascript", "#react.js", "#mongoDB"]
        },
        { titre: "Stage développeur React.js", description: "Site web fournissant des outils pour animer des ateliers interactifs pour les coachs d'entreprise",
            date: "Mars 2021 - Juillet 2021", entreprise: "Butterfly&Co", tag: ["#html", "#css", "#javascript", "#react.js", "#firebase"]
        }
    ])

    let listeExperience = dataExperience.reverse().map((exp, i) => {
        let listeTag = exp.tag.map((tag, i) => {
            return(
                <Tag style={{marginTop: "3%"}}>
                    <span>{tag}</span>
                </Tag>
            )
        })
        return(
            <Col xs={20} sm={10} md={9} lg={7} xl={7} data-aos="zoom-in" data-aos-duration="1000" style={{backgroundColor: "white", padding: "3%", borderRadius: "20px", width: "28%", alignItems: "center", display: "flex", flexDirection: "column", marginTop: "2%"}}>
                <h4 style={{textAlign: "center", marginTop: "20px"}}>{exp.titre}</h4>
                <h5 className="ruban-title">{exp.entreprise}</h5>
                <Col style={{minHeight: "80px", display: "flex", alignItems: "center"}}>
                    <h6 style={{marginTop: "3%", textAlign: "justify"}}>{exp.description}</h6>
                </Col>
                <span style={{padding: "2%", backgroundColor: "#c23516e0", color: "whitesmoke", borderRadius: "15px"}}>{exp.date}</span>
                <Row style={{display: "flex", justifyContent: "space-evenly"}}>
                    {listeTag}
                </Row>
                
            </Col>
        )
    })

    return (
        <React.Fragment>
            {listeExperience}
        </React.Fragment>
        
    )
}
