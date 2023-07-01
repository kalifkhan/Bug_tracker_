import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import  Dropdown  from 'react-bootstrap/Nav';

const Header = (props) => {

    
      const visibleHandle=()=>{

        props.onSubmititing();

      }

    return (
        <div className="container" id="nav-bar-container" >

       
        <Nav fill variant="tabs">
            <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/">Project Bug</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/">System Bug</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/">Logic Bug</Nav.Link>
            </Nav.Item>
            <Nav.Link > <button onClick={visibleHandle}> Users </button></Nav.Link>

            
        </Nav>
        </div>
    )
}

export default Header;
