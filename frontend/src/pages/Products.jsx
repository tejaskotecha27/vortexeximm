import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner, Badge } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { fetchProductsByCategory } from '../services/api';
import { FaArrowLeft, FaFilter, FaShoppingBag } from 'react-icons/fa';

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProductsByCategory(encodeURIComponent(category));
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load products.');
        setLoading(false);
      }
    };
    getProducts();
  }, [category]);

  return (
    <div className="fade-in bg-light min-vh-100 pb-5">
      <div className="bg-primary-custom py-5 mb-5 shadow-sm">
        <Container>
          <Link to="/products" className="text-secondary-custom text-decoration-none d-inline-flex align-items-center opacity-90 custom-hover mb-4 fw-bold">
            <FaArrowLeft className="me-2" /> Back Home
          </Link>
          <div className="d-flex align-items-center gap-3 mb-2">
            <Badge bg="transparent" className="border border-secondary text-secondary-custom px-3 py-2 rounded-pill">
              <FaFilter className="me-2 small" /> {category}
            </Badge>
          </div>
          <h1 className="fw-bold display-4 text-white">Browse <span className="text-secondary-custom">Collection</span></h1>
        </Container>
      </div>

      <Container>
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" className="text-secondary-custom" />
          </div>
        ) : error ? (
          <div className="alert alert-danger text-center rounded-4">{error}</div>
        ) : products.length === 0 ? (
          <div className="text-center py-5 bg-white rounded-5 shadow-sm">
             <FaShoppingBag className="text-muted fs-1 mb-3 opacity-20" />
             <h4 className="text-muted">No products available in this category yet.</h4>
          </div>
        ) : (
          <Row className="gy-4">
            {products.map(product => (
              <Col lg={4} md={6} key={product._id}>
                <Card className="h-100 card-hover border-0 overflow-hidden shadow-sm">
                  <div className="position-relative" style={{ height: '280px', overflow: 'hidden' }}>
                    <Card.Img 
                      variant="top" 
                      src={product.image || '/imgs/about_logistics.png'} 
                      alt={product.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/imgs/about_logistics.png';
                      }}
                      style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                    <div className="position-absolute top-0 end-0 p-3">
                      <Badge bg="white" text="dark" className="shadow-sm border rounded-pill px-3 py-2">Premium</Badge>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column p-4">
                    <h5 className="fw-bold fs-5 text-primary-custom mb-2">{product.name}</h5>
                    <Card.Text className="text-muted small mb-4 line-clamp">
                      {product.description.length > 90 ? `${product.description.substring(0, 90)}...` : product.description}
                    </Card.Text>
                    <Link to={`/product/${product._id}`} className="btn btn-outline-gold mt-auto fw-bold py-2">
                      View Specification
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      <style>{`
        .line-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Products;
