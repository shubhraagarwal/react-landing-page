import React from 'react';
import {Navbar, Button} from 'react-bootstrap' ;  
function Nav() {
  return (
    <div className="Navbar">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2020%2F09%2FFood-Network-Logo.png&f=1&nofb=1"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Food Network 
      <Button variant="light" className='button ml-5' >Login</Button>
      <Button variant ="danger" className="button ml-1">Cart</Button> 
    </Navbar.Brand>
  </Navbar>
    </div>
  );
}

export default Nav;