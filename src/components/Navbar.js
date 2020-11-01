import React from 'react';
import { Navbar,NavItem,NavLink, Nav } from 'reactstrap';
import '../style/navbar.css';
import {Animated} from "react-animated-css";

function NavbarTop() {
    return (

        
        <Navbar color="dark" expand="md" className="menu" fixedTop>
            <Nav>
                <Animated animationIn="bounceInDown" animationInDuration="1500" isVisible={true}>
                    <NavItem>
                        <NavLink>Education</NavLink>  
                    </NavItem>
                </Animated>
                <Animated animationIn="bounceInDown" animationInDuration="1500" isVisible={true}>
                    <NavItem>
                        <NavLink>Compétences</NavLink>  
                    </NavItem>
                </Animated><Animated animationIn="bounceInDown" animationInDuration="1500" isVisible={true}>
                    <NavItem>
                        <NavLink>Expèriences</NavLink>  
                    </NavItem>
                </Animated><Animated animationIn="bounceInDown" animationInDuration="1500" isVisible={true}>
                    <NavItem>
                        <NavLink>Mes Réalisations</NavLink>  
                    </NavItem>
                </Animated><Animated animationIn="bounceInDown" animationInDuration="1500" isVisible={true}>
                    <NavItem>
                        <NavLink>Contact</NavLink>  
                    </NavItem>
                </Animated>
                
            </Nav> 
        </Navbar>
    
        
    );
  }
  
export default NavbarTop;
