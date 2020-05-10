import {NavLink,Link} from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Figure from "react-bootstrap/Figure";
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Route, Redirect, Switch } from "react-router-dom";


const NavBar = ({ u }) => {
        return(
            <div>
            <nav className="navbar navbar-expand-xl  bg-dark">
              <Link className="navbar-brand" to="/profile">
                <Figure.Image
                  width={50}
                  height={50}
                  alt="300X200"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/38/Hospital_sign.svg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                 
                
                  
      
                  <React.Fragment>
                    <NavLink className="nav-item nav-link" to="/department">
                      Department
                    </NavLink>
                  </React.Fragment>
                </div>
              </div>
      
              {!u && (
                <React.Fragment>
                  <NavLink className="nav-item nav-link  ml-auto " to="/login">
                    Login
                  </NavLink>
                  <NavLink className="nav-item nav-link ml-auto" to="/registration">
                    Registration
                  </NavLink>
                </React.Fragment>
              )}
              
            </nav>
          </div>
           /*  <Navbar bg="primary" expand="lg" >
                <Navbar.Toggle aria-controls-="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav><i>
                    <NavLink className="d-inline p-2 bg-primary text-white" to="/" >Home</NavLink>
                    <NavLink className="d-inline p-2 bg-primary text-white" to="/department" >Department</NavLink>
                    <NavLink className="d-inline p-2 bg-primary text-white" to="/employee" >Employee</NavLink>
                    <NavLink className="d-inline p-2 bg-primary text-white" to="/contact" >Contact</NavLink>
                    
                    </i>
                    </Nav>
                    <Nav className="ml-auto"><i>
                    <NavLink className="d-inline p-2 bg-primary text-white " to="/registration" >Registration</NavLink>
                    <NavLink className="d-inline p-2 bg-primary text-white" to="/login" >Login</NavLink>
                   
                    </i>
                    <i class="fab fa-facebook"></i>
                </Nav>
                </Navbar.Collapse>
            </Navbar> */
        );
    };
  export default NavBar;
