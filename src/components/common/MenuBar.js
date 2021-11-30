import React from "react"
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap"
import logo from "../../assets/img/logo.png"
import {
  RiHeadphoneLine,
  RiHome5Line,
  RiInformationLine,
  RiShape2Fill,
} from "react-icons/ri"

const MenuBar = () => {
  return (
    <Navbar expand="lg" className="menubar">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <RiHome5Line /> Home
            </Nav.Link>
            <Nav.Link href="#link">
              <RiShape2Fill /> Services
            </Nav.Link>
            <Nav.Link href="#link">
              <RiInformationLine /> About Us
            </Nav.Link>
            <Nav.Link href="#link">
              <RiHeadphoneLine /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MenuBar
