import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/Vortex logo blue centre.svg';

const Footer = () => {
  return (
    <footer className="bg-primary-custom text-light pt-5 pb-3 mt-auto">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className="mb-3 d-flex align-items-center fs-4 fw-bold">
              <img src={logo} alt="VortexExim Logo" height="48" className="me-2" style={{ objectFit: 'contain' }} />
              Vortex<span className="text-secondary-custom">Exim</span>
            </div>
            <p className="text-light opacity-75">
              Connecting global markets with premium quality export and import services. Your trusted partner in international trade.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-light fs-5"><FaFacebook /></a>
              <a href="#" className="text-light fs-5"><FaTwitter /></a>
              <a href="#" className="text-light fs-5"><FaLinkedin /></a>
              <a href="#" className="text-light fs-5"><FaInstagram /></a>
            </div>
          </Col>
          <Col lg={2} md={6}>
            <h5 className="text-secondary-custom mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-light text-decoration-none opacity-75 custom-hover">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-light text-decoration-none opacity-75 custom-hover">About Us</Link></li>
              <li className="mb-2"><Link to="/products" className="text-light text-decoration-none opacity-75 custom-hover">Products</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-light text-decoration-none opacity-75 custom-hover">Contact</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="text-secondary-custom mb-3">Contact Info</h5>
            <ul className="list-unstyled text-light opacity-75">
              <li className="mb-2">📍 Plot No. 564, Phase II, Near Vatva Railway Station, Vatva GIDC, Vatva, Ahmedabad – 382445</li>
              <li className="mb-2">📞 +91 94288 91665</li>
              <li className="mb-2">📞 +91 94260 38331</li>
              <li className="mb-2">📞 +91 98983 72032</li>
              <li className="mb-2">✉️ vortexexim.info@gmail.com</li>
            </ul>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="text-secondary-custom mb-3">Newsletter</h5>
            <p className="text-light opacity-75">Subscribe to get updates on new products and trading news.</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Email Address" />
              <button className="btn btn-gold" type="button">Subscribe</button>
            </div>
          </Col>
        </Row>
        <hr className="mt-5 mb-4 border-secondary border-opacity-50" />
        <Row>
          <Col className="text-center text-light opacity-75">
            <small>&copy; {new Date().getFullYear()} VortexExim. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
