import React from 'react';
import { Navbar,NavItem,NavLink, Nav } from 'reactstrap';
import '../style/navbar.css';

function NavbarTop() {
    return (
        <Navbar color="dark" expand="md" className="menu" fixedTop>
            <Nav>
                <NavItem>
                    <NavLink>Education</NavLink>  
                </NavItem>
                <NavItem>
                    <NavLink>Compétences</NavLink>  
                </NavItem>
                <NavItem>
                    <NavLink>Expériences</NavLink>  
                </NavItem>
                <NavItem>
                    <NavLink>Mes Réalisations</NavLink>  
                </NavItem>
                <NavItem>
                    <NavLink>Contact</NavLink>  
                </NavItem>
            </Nav> 
        </Navbar>
    
    );
  }
  
export default NavbarTop;
