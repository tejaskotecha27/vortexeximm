import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { fetchSubcategories } from '../services/api';
import { FaArrowLeft } from 'react-icons/fa';

const Subcategories = () => {
  const { category } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getSubcategories = async () => {
      try {
        const data = await fetchSubcategories(encodeURIComponent(category));
        setSubcategories(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load subcategories.');
        setLoading(false);
      }
    };
    getSubcategories();
  }, [category]);

  return (
    <div className="fade-in bg-light min-vh-100 pb-5">
      <div className="bg-primary-custom py-4 text-white mb-5">
        <Container>
          <Link to="/products" className="text-white text-decoration-none d-inline-flex align-items-center opacity-75 custom-hover mb-3">
            <FaArrowLeft className="me-2" /> Back to Categories
          </Link>
          <h1 className="fw-bold display-5">{category} <span className="text-secondary-custom">Subcategories</span></h1>
        </Container>
      </div>

      <Container>
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" className="text-secondary-custom" />
          </div>
        ) : error ? (
          <div className="alert alert-danger text-center">{error}</div>
        ) : subcategories.length === 0 ? (
          <div className="alert alert-info text-center">No subcategories found for this category.</div>
        ) : (
          <Row className="gy-4">
            {subcategories.map((subcategory, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="h-100 card-hover shadow-sm border-0 bg-white p-4 text-center d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
                  <Card.Body className="d-flex flex-column justify-content-center w-100">
                    <Card.Title className="fw-bold fs-4 text-primary-custom mb-4">{subcategory}</Card.Title>
                    <Link to={`/products/${encodeURIComponent(category)}/${encodeURIComponent(subcategory)}`} className="btn btn-gold rounded-pill w-100">
                      View Products
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

export default Subcategories;
