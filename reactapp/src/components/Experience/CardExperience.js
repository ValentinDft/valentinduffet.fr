import React, {useState} from 'react'
import { Row, Col } from 'antd';

export default function CardExperience() {

    const [dataExperience] = useState([
        { titre: "Stage BTS SNIR", description: "Modification du front-end, ajout de contenu sur le site internet #Wordpress #php #html #css",
            date: "Mai 2018 - Juillet 2018", entreprise: "Base Nautique du Pont d'Arc"
        },
        { titre: "Formateur assistant", description: "J'interviens auprès des étudiants faisant face à des problèmes techniques, ainsi que dans l'approfondissement de certains aspects du cours.",
            date: "Janvier 2021 - Février 2021", entreprise: "La Capsule Academy"
        },
        { titre: "Stage développeur React.js", description: "Site web fournissant des outils pour animer des ateliers interactifs pour les coachs d'entreprise. #html #css #javascript #react.js #firebase",
            date: "Mars 2021 - Juillet 2021", entreprise: "Butterfly&Co"
        }
    ])

    let listeExperience = dataExperience.reverse().map((exp, i) => {
        return(
            <Col style={{backgroundColor: "white", padding: "3%", borderRadius: "20px", width: "28%", alignItems: "center", display: "flex", flexDirection: "column"}}>
                <h4 style={{textAlign: "center", marginTop: "15px"}}>{exp.titre}</h4>
                <span className="ruban-title ruban-date">{exp.date}</span>
                <h5 className="ruban-title">{exp.entreprise}</h5>
                <h6 style={{marginTop: "3%", textAlign: "justify"}}>{exp.description}</h6>
                
            </Col>
        )
    })

    return (
        <React.Fragment>
            {listeExperience}
        </React.Fragment>
        
    )
}
