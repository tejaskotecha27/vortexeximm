import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../services/api';
import { FaLayerGroup, FaArrowRight } from 'react-icons/fa';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load categories.');
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  const categoryImages = {
    'Peanut Butter': 'https://images.unsplash.com/photo-1599596489445-568ea4abcb6d?q=80&w=2000',
    'Agriculture': 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2000',
    'Biodegradable Items': 'https://images.unsplash.com/photo-1629837943588-348615c0e0b3?q=80&w=2000'
  };

  return (
    <div className="fade-in bg-light min-vh-100 pb-5">
      <div className="bg-primary-custom py-5 mb-5 overflow-hidden position-relative">
        <Container className="position-relative z-1 py-4">
          <div className="badge-green mb-3" style={{ color: 'white', background: 'rgba(255,255,255,0.1)' }}>
            <FaLayerGroup className="me-2" /> Premium Exports
          </div>
          <h1 className="fw-bold display-4 text-white">Our Product <span className="text-secondary-custom">Portfolio</span></h1>
          <p className="lead mt-3 text-white opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
            Explore our diverse range of globally traded commodities, sourced and processed for excellence.
          </p>
        </Container>
        {/* Decorative element */}
        <div className="position-absolute end-0 top-0 h-100 w-25" style={{ background: 'linear-gradient(to right, transparent, rgba(0, 74, 173, 0.1))' }}></div>
      </div>

      <Container>
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" className="text-secondary-custom" />
          </div>
        ) : error ? (
          <div className="alert alert-danger text-center rounded-4">{error}</div>
        ) : (
          <Row className="gy-4">
            {categories.map((category, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="h-100 card-hover border-0 overflow-hidden">
                  <div className="position-relative" style={{ height: '260px', overflow: 'hidden' }}>
                    <Card.Img 
                      variant="top" 
                      src={categoryImages[category] || 'https://images.unsplash.com/photo-1586528116311-ad8ed3c84a0f?q=80&w=2000'} 
                      alt={category}
                      style={{ objectFit: 'cover', height: '100%', width: '100%', transition: 'transform 0.5s ease' }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(10, 25, 47, 0.4))' }}></div>
                  </div>
                  <Card.Body className="d-flex flex-column p-4">
                    <h3 className="fw-bold fs-4 mb-3" style={{ color: 'var(--primary-color)' }}>{category}</h3>
                    <p className="text-muted small mb-4">High-quality export grade {category} sourced from verified sustainable farmers and manufacturers.</p>
                    <Link to={`/products/${encodeURIComponent(category)}`} className="btn btn-outline-gold mt-auto d-flex align-items-center justify-content-center gap-2">
                      Browse Full Catalog <FaArrowRight className="small" />
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Categories;
