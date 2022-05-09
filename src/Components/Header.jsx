
import React , { useState } from 'react';
import  {Routes, Route,Link} from 'react-router-dom';
import fullpagej from '../Fullpage';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Offcanvas,
} from "react-bootstrap";

function Header({getData}) {
  const sendData =() =>{
    getData(2);
  }

    return(
<header>
      <Navbar  expand={false}>
          <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Brand>              
            <img src="/src/static/android-icon-72x72.png" />        
            </Navbar.Brand>
             <h1>언어관련</h1>
             <button onClick={sendData}>asd</button>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  <img src="/src/static/android-icon-144x144.png" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <button onClick={sendData}>asd</button>
                <Nav.Link href="/">Home</Nav.Link>  
                  <Nav.Link href="/direction"> </Nav.Link>   
                            
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
     </header>
    )
}

export default Header;