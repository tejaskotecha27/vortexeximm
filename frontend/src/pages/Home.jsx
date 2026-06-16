import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShip, FaHandshake, FaGlobe, FaChevronRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <Container className="position-relative z-1">
          <Row className="align-items-center">
            <Col lg={7} xl={6}>
              <div className="badge-green mb-4">
                <span className="me-2">✦</span> Trusted Global Trade Partner
              </div>
              <h1 className="display-2 fw-extrabold mb-4" style={{ lineHeight: 1.1 }}>
                Pioneering the Future of <span className="text-secondary-custom">Global Trade</span>
              </h1>
              <p className="lead mb-5 text-white opacity-90 fs-5" style={{ maxWidth: '90%' }}>
                VortexExim bridges the gap between premium global manufacturers and international markets with sustainable, tech-driven export-import solutions.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/products" className="btn btn-gold btn-lg">
                  Explore Catalog <FaChevronRight className="ms-2 small" />
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg rounded-pill px-5">
                  Get a Quote
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white overflow-hidden">
        <Container>
          <div className="text-center mb-5 pb-lg-4">
            <h2 className="display-4 fw-bold"><span className="green-accent">Why VortexExim?</span></h2>
            <p className="text-muted mt-3 fs-5 mx-auto" style={{ maxWidth: '700px' }}>
              We merge traditional trade values with modern logistics to ensure your business grows without borders.
            </p>
          </div>
          <Row className="gy-4">
            <Col md={4}>
              <Card className="h-100 card-hover text-center p-4 border-0">
                <Card.Body className="py-5">
                  <div className="rounded-circle d-inline-flex p-4 mb-4" style={{ background: 'rgba(0, 74, 173, 0.1)', color: 'var(--secondary-color)' }}>
                    <FaGlobe className="fs-1" />
                  </div>
                  <h3 className="fw-bold mb-3 h4">Global Connectivity</h3>
                  <Card.Text className="text-muted px-lg-3">
                    Leverage our robust supply chain network spanning across Asia, Europe, and the Americas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 card-hover text-center p-4 border-0">
                <Card.Body className="py-5">
                  <div className="rounded-circle d-inline-flex p-4 mb-4" style={{ background: 'rgba(0, 74, 173, 0.1)', color: 'var(--secondary-color)' }}>
                    <FaHandshake className="fs-1" />
                  </div>
                  <h3 className="fw-bold mb-3 h4">Integrity & Trust</h3>
                  <Card.Text className="text-muted px-lg-3">
                    Transparent operations and certified quality standards that foster long-term global partnerships.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 card-hover text-center p-4 border-0">
                <Card.Body className="py-5">
                  <div className="rounded-circle d-inline-flex p-4 mb-4" style={{ background: 'rgba(0, 74, 173, 0.1)', color: 'var(--secondary-color)' }}>
                    <FaShip className="fs-1" />
                  </div>
                  <h3 className="fw-bold mb-3 h4">Smart Logistics</h3>
                  <Card.Text className="text-muted px-lg-3">
                    Real-time tracking and optimized shipping or storage routes to reduce your operational overhead.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding" style={{ background: 'rgba(0, 74, 173, 0.05)' }}>
        <Container>
          <div className="bg-primary-custom rounded-5 p-5 text-center text-white shadow-lg overflow-hidden position-relative">
            <div className="position-relative z-1 py-4">
              <h2 className="display-5 fw-bold mb-4 text-white">Scale Your Business Globally Today</h2>
              <p className="mb-5 opacity-75 w-75 mx-auto fs-5">
                Join hundreds of businesses that rely on VortexExim for premium commodities and hassle-free international logistics.
              </p>
              <Link to="/contact" className="btn btn-gold btn-lg px-5">
                Start Trading Today
              </Link>
            </div>
            {/* Subtle decorative circles */}
            <div className="position-absolute translate-middle-y start-0 top-50" style={{ width: '200px', height: '200px', background: 'white', opacity: 0.03, borderRadius: '50%', transform: 'translateX(-50%)' }}></div>
            <div className="position-absolute translate-middle-y end-0 top-50" style={{ width: '300px', height: '300px', background: 'var(--secondary-color)', opacity: 0.05, borderRadius: '50%', transform: 'translateX(50%)' }}></div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
