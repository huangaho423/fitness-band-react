import React from 'react'
// import { Link } from 'react-dom'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <>
      <Navbar bg="light" expand="md" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Fitness Band</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto align-items-center">
              <Nav.Link href="#intro">介紹</Nav.Link>
              <Nav.Link href="#album">圖集</Nav.Link>
              <Nav.Link href="#spec">規格</Nav.Link>
              <Nav.Link href="#link">
                <Button className="btn btn-primary d-inline-block px-2">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
                  購物車
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
