import React from "react"
import { Link } from "gatsby"

import "../App.css"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Landing = () => {
  return (
    <Navbar collapseOnSelect expand="sm" variant="light">
      <Container>
        <Navbar.Brand
          className="font-weight-medium gradient-text"
          as={Link}
          to="/"
        >
          Carlton Osinde
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" style={{ color: "black" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "black" }}>
              About
            </Nav.Link>
            <Nav.Link
              href="https://d1ap993fctyiv.cloudfront.net/CarltonO_-_Resume.pdf"
              target="_blank"
              className="font-weight-medium"
              style={{ color: "black" }}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Landing
