import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Header({insideHome}) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link style={{textDecoration:'none',color:'black'}} to={'/'}>EDUCARE</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link style={{textDecoration:'none',color:'black'}} to={'/'}>HOME</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration:'none',color:'black'}} to={'/'}>SERVICES</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration:'none',color:'black'}} to={'/'}>ABOUT US</Link></Nav.Link>
            <Nav.Link>
              <Link style={{textDecoration:'none',color:'black'}} to={'/'}>CONTACT</Link>
            </Nav.Link>
               <Nav.Link>
              <Link className="btn btn-info" style={{textDecoration:'none',color:'black'}} to={'/studentdetails'}>STUDENTS DETAILS</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;
