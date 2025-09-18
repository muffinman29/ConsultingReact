import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar
        className="navbar navbar-expand-lg bg-primary"
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Navbar.Brand as={Link} to="/welcome">
            ACME Consulting
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav className="me-auto">
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/computer-services">
                Computer
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/technology-consulting">
                Technology Consulting
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
      
    </>
  );
}

export default Header;
