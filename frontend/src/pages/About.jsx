import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className="fade-in">
      <div className="bg-primary-custom py-5 text-center text-white">
        <Container>
          <h1 className="fw-bold display-5">About <span className="text-secondary-custom">VortexExim</span></h1>
          <p className="lead mt-3 opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
            We are dedicated to bridging markets and opening new horizons for businesses globally.
          </p>
        </Container>
      </div>

      <section className="section-padding bg-white">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6}>
              <img 
                src="/imgs/about_logistics.png" 
                alt="Logistics container" 
                className="img-fluid rounded-4 shadow-lg"
              />
            </Col>
            <Col lg={6} className="ps-lg-5">
              <h2 className="fw-bold mb-4"><span className="green-accent">Our Story</span></h2>
              <p className="text-muted mb-4">
                Founded with a vision to streamline global commerce, VortexExim has grown into a leading export-import firm. We specialize in sourcing high-quality commodities and delivering them across global markets efficiently and securely.
              </p>
              <p className="text-muted mb-4">
                Our expertise lies in understanding international trade dynamics, ensuring compliance, and optimizing supply chain logistics. We act as a reliable bridge between manufacturers and global buyers.
              </p>
              <div className="d-flex flex-column gap-2 mb-4">
                <div className="d-flex align-items-center gap-2">
                  <FaCheckCircle className="text-secondary-custom fs-5" />
                  <span className="fw-medium">Premium Quality Commodities</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FaCheckCircle className="text-secondary-custom fs-5" />
                  <span className="fw-medium">End-to-End Logistics Management</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FaCheckCircle className="text-secondary-custom fs-5" />
                  <span className="fw-medium">Global Network & Compliance</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold"><span className="green-accent">Our Core Values</span></h2>
          </div>
          <Row className="gy-4 text-center">
            <Col md={4}>
              <Card className="h-100 card-hover p-4 shadow-sm">
                <Card.Body>
                  <h4 className="fw-bold text-primary-custom mb-3">Integrity</h4>
                  <Card.Text className="text-muted">
                    We conduct our business with the highest standards of transparency and honesty.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 card-hover p-4 shadow-sm bg-primary-custom text-white">
                <Card.Body>
                  <h4 className="fw-bold text-secondary-custom mb-3">Excellence</h4>
                  <Card.Text className="opacity-75">
                    We strive for excellence in every transaction, ensuring premium quality.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 card-hover p-4 shadow-sm">
                <Card.Body>
                  <h4 className="fw-bold text-primary-custom mb-3">Reliability</h4>
                  <Card.Text className="text-muted">
                    Dependable operations, ensuring your cargo reaches its destination on time.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
