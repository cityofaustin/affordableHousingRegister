import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
    }
    
    render() {
        
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
            </ul>
        )

        return (

            <Navbar variant="dark" bg="dark" expand="lg">
                <Navbar.Brand href="/">Austin Affordable Housing Data Portal Registration</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {loginRegLink}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(NavBar)