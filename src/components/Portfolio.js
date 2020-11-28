import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import '../App.css';
import logoShakti from "../captureMassageShakti.png"
import { Tag } from 'antd';


// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

// Import Material UI
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import AOS from "aos";
import "aos/dist/aos.css";

// -------------------------------------- Fonction pour le tab material UI ----------------------------------------------
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}

// -----------------constante de style du tab --------------------
const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "theme.palette.background.paper",
      width: 300,
    },
    indicator: {
        backgroundColor: "#c23616",
        height: "2px",
        top: "45px"
    },
    flexContainer: {
        height: "45px",
        background: "#f5f6fa"
    },
    tab: {
        '& .MuiBox-root': {
            padding: '0px',
        },
    },
}));


function Portfolio() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        
        <Container style={{marginTop: "5%"}}>
            <Row>
                <Col>
                    <h2 style={{textAlign: "center", marginTop: "1%", marginBottom: "1%", color: "#dff9fb"}}>PORTFOLIO <FontAwesomeIcon icon={faLaptopCode} style={{textAlign: "center", fontSize: "35px"}}></FontAwesomeIcon></h2>
                    <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AppBar position="static" color="default">
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        classes={{
                            flexContainer: classes.flexContainer,
                            indicator: classes.indicator,
                        }}
                        >
                            <Tab label="Html/Css" {...a11yProps(0)} />
                            <Tab label="React JS" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                        style={{padding: "0px"}}
                    >
                        <TabPanel classes={{ root: classes.tab }} value={value} index={0} dir={theme.direction}>
                            <div data-aos="zoom-in" data-aos-duration="1500">
                                <div className="block-portfolio">
                                    <Col sm="12" lg="6" className="card-portfolio">
                                        <img src={logoShakti} style={{width: "85%", borderRadius: "10px"}} className="img-portfolio"></img>
                                        <h3 style={{marginTop: "15px"}}>Massage Shakti Ardèche</h3>
                                        <h5 style={{fontSize: "15px", marginTop: "15px", color: "#585858"}}>
                                            Site internet de massage en Ardèche pour un particulier.
                                        </h5>
                                        <Tag style={{marginTop: "15px"}}> 
                                            <FontAwesomeIcon icon={faHtml5} style={{fontSize: "14px"}}></FontAwesomeIcon> Html 
                                            <FontAwesomeIcon icon={faCss3Alt} style={{fontSize: "14px", marginLeft: "2px"}}></FontAwesomeIcon> Css
                                        </Tag>
                                        <Tag>
                                            <FontAwesomeIcon icon={faBootstrap} style={{fontSize: "14px"}}></FontAwesomeIcon> Bootstrap
                                        </Tag>
                                        <Row style={{marginTop: "30px"}}>
                                            <Col xs="6">
                                                <a href="https://github.com/ValentinDft/Massage-Shakti" target="_blank"><FontAwesomeIcon icon={faGithub} style={{fontSize: "25px", color: "#565656"}}></FontAwesomeIcon></a>
                                            </Col>
                                            <Col xs="6">
                                                <a href="https://massageshaktiardeche.fr/" target="_blank"><FontAwesomeIcon icon={faLink} style={{fontSize: "25px", color: "#565656"}}></FontAwesomeIcon></a>
                                            </Col>
                                        </Row>
                                    </Col>
                                </div>
                            </div>
                            
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <div data-aos="zoom-in" data-aos-duration="1500">
                                <div className="block-portfolio">
                                    <Col sm="12" lg="6" className="card-portfolio">
                                        <h5 style={{fontSize: "15px", marginTop: "15px", color: "#585858"}}>
                                            Bientot...
                                        </h5>
                                    </Col>
                                </div>
                            </div>
                        </TabPanel>
                    </SwipeableViews>
                </Col>
            </Row>
        </Container>
        
    
        
    );
  }
  
export default Portfolio;