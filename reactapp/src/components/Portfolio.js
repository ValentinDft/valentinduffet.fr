import React from 'react';
import { Tag, Tooltip, Col, Row } from 'antd';
import '../App.css';
import logoShakti from "../captureMassageShakti.png"
import logoPortfolio from "../portfolio.png"

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

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

    const textIconGitHub = <span>Github du projet</span>;
    const textIconSite = <span>Site web</span>

    return (
        
        <div style={{marginTop: "5%", marginLeft: "15%", marginRight: "15%"}}>
            <Row>
                <Col span={24}>
                    <h1 style={{textAlign: "center", marginTop: "1%", marginBottom: "1%", color: "#dff9fb"}}>PORTFOLIO <FontAwesomeIcon icon={faLaptopCode} style={{textAlign: "center", fontSize: "35px"}}></FontAwesomeIcon></h1>
                    <hr style={{borderTop: "8px solid #c23616", borderRadius: "5px", width: "18%", marginBottom: "5%"}}></hr>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
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
                                    <Col xs={16} lg={12} className="card-portfolio">
                                        <img src={logoShakti} style={{width: "85%", borderRadius: "10px"}} className="img-portfolio"></img>
                                        <h2 style={{marginTop: "15px", color: "white", fontFamily: 'Nerko One'}}>Massage Shakti Ardèche</h2>
                                        <h3 style={{fontSize: "15px", marginTop: "15px", color: "#bdc3c7"}}>
                                            Site internet de massage en Ardèche pour un particulier.
                                        </h3>
                                        <Tag style={{marginTop: "15px"}}> 
                                            <FontAwesomeIcon icon={faHtml5} style={{fontSize: "14px"}}></FontAwesomeIcon> Html 
                                            <FontAwesomeIcon icon={faCss3Alt} style={{fontSize: "14px", marginLeft: "2px"}}></FontAwesomeIcon> Css
                                        </Tag>
                                        <Tag>
                                            <FontAwesomeIcon icon={faBootstrap} style={{fontSize: "14px"}}></FontAwesomeIcon> Bootstrap
                                        </Tag>
                                        <Row style={{marginTop: "30px"}}>
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
                                </div>
                            </div>
                            
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <div data-aos="zoom-in" data-aos-duration="1500">
                                <div className="block-portfolio">
                                    <Col xs={10} sm={12} className="card-portfolio">
                                        <img src={logoPortfolio} style={{width: "85%", borderRadius: "10px"}} className="img-portfolio"></img>
                                        <h2 style={{marginTop: "15px", color: "white", fontFamily: 'Nerko One'}}>Portfolio</h2>
                                        <Tag style={{marginTop: "15px"}}> 
                                            <FontAwesomeIcon icon={faReact} style={{fontSize: "14px"}}></FontAwesomeIcon> React JS 
                                        </Tag>
                                        <Tag>
                                            Express JS
                                        </Tag>
                                        <Row style={{marginTop: "30px"}}>
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
                                </div>
                            </div>
                        </TabPanel>
                    </SwipeableViews>
                </Col>
            </Row>
        </div>
        
    
        
    );
  }
  
export default Portfolio;