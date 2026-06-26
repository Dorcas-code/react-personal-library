import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { HashRouter, Routes, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeToggleButton from './ThemeToggleButton';

export default function Navigation() {
  return (

<Navbar expand="lg" className="bg-body-tertiary">
      <Container> 
        <Navbar.Brand href="/">My React-Library</Navbar.Brand>
           {/* <ThemeToggleButton /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link  variant="primary" href="/react-personal-library/" style={{ color: '#000000'}} >Home</Nav.Link>
            <Nav.Link  variant="primary" href="/react-personal-library/FavoriteBookPage">My Favorite Books</Nav.Link>

          </Nav>
       
        </Navbar.Collapse>
   
      </Container>
      
    </Navbar>
     
  
    
  );
}
