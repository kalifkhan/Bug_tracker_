import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import  Dropdown  from 'react-bootstrap/Nav';
import './Header.css'

const Header = (props) => {

    
      const visibleHandle=()=>{

        props.onSubmititing();

      }

    return (
        <div className="container_body" id="nav-bar-container" >

       
        <Nav  className="tabs-custom">
            <Nav.Item className="tab_link">
            <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item >
            <Nav.Item className="tab_link">
            <Nav.Link href="/">Project Bug</Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab_link">
            <Nav.Link href="/">System Bug</Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab_link">
            <Nav.Link href="/">Logic Bug</Nav.Link>
            </Nav.Item>
            <Nav.Link className="nav__button"  > <button  onClick={visibleHandle}> Users </button></Nav.Link>

            
        </Nav>
        </div>
    )
}

export default Header;
