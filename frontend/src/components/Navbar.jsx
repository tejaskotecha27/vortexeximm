import { Link } from 'react-router-dom';
import { Container, Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { fetchCategories } from '../services/api';
import logo from '../assets/Vortex logo blue centre.svg';

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(setCategories).catch(console.error);
  }, []);

  return (
    <BootstrapNavbar expand="lg" className="navbar-custom py-3 shadow-sm" sticky="top" variant="dark">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="VortexExim Logo" height="55" className="me-2" style={{ objectFit: 'contain' }} />
          Vortex<span className="text-secondary-custom">Exim</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="px-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="px-3">About Us</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown" className="custom-dropdown px-2 text-white">
              <NavDropdown.Item as={Link} to="/products" className="fw-bold">All Categories</NavDropdown.Item>
              <NavDropdown.Divider />
              {categories.map((cat, idx) => (
                <NavDropdown.Item key={idx} as={Link} to={`/products/${encodeURIComponent(cat)}`}>
                  {cat}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" className="px-3">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;

