import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Spinner, Button, Form } from 'react-bootstrap';
import { fetchProductById } from '../services/api';
import { FaArrowLeft, FaShieldAlt, FaTruck, FaGlobeAmericas, FaWhatsapp } from 'react-icons/fa';
import OrderModal from '../components/OrderModal';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('Kgs');
  const [quantity, setQuantity] = useState(1);
  const [showOrderModal, setShowOrderModal] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Product not found.');
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  if (loading) return <div className="text-center py-5 min-vh-100 d-flex justify-content-center align-items-center"><Spinner animation="border" className="text-secondary-custom" /></div>;
  if (error || !product) return <div className="text-center py-5 min-vh-100 mt-5"><h3 className="text-danger">{error || 'Product not found'}</h3><Link to="/products" className="btn btn-primary mt-3">Back to Products</Link></div>;

  return (
    <div className="fade-in bg-light min-vh-100 pb-5">
      <div className="bg-primary-custom py-4 text-white mb-5">
        <Container>
          <Link to={product.category ? `/products/${encodeURIComponent(product.category)}` : "/products"} className="text-white text-decoration-none d-inline-flex align-items-center opacity-75 custom-hover">
            <FaArrowLeft className="me-2" /> Back to Products
          </Link>
        </Container>
      </div>

      <Container>
        <div className="bg-white rounded-4 shadow-sm overflow-hidden border-0">
          <Row className="g-0">
            <Col lg={6} className="bg-light">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid w-100 h-100"
                style={{ objectFit: 'cover', minHeight: '500px' }}
              />
            </Col>
            <Col lg={6} className="p-5 d-flex flex-column justify-content-center">
              <div className="badge-green mb-3 align-self-start">
                <span>✦</span> Export Quality
              </div>
              <h1 className="fw-bold text-primary-custom mb-3 display-5">{product.name}</h1>

              <div className="mb-4">
                <h5 className="fw-bold">Product Summary:</h5>
                <p className="text-muted lh-lg">{product.description}</p>
              </div>

              {/* Quantity and Unit Selector */}
              <div className="bg-light rounded-4 p-4 mb-4">
                <Row className="gy-3 align-items-end">
                  <Col sm={6}>
                    <Form.Label className="fw-bold small text-uppercase text-muted">Estimated Quantity</Form.Label>
                    <div className="d-flex align-items-center">
                      <Button variant="outline-primary" className="rounded-circle" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
                      <span className="mx-3 fw-bold fs-5">{quantity}</span>
                      <Button variant="outline-primary" className="rounded-circle" onClick={() => setQuantity(quantity + 1)}>+</Button>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <Form.Label className="fw-bold small text-uppercase text-muted">Load Unit</Form.Label>
                    <Form.Select
                      className="rounded-pill border-2"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                    >
                      <option value="Kgs">Kilograms (Kgs)</option>
                      <option value="Tons">Metric Tons</option>
                    </Form.Select>
                  </Col>
                </Row>
              </div>

              <div className="d-flex flex-column gap-3 mb-5 py-3 border-top border-bottom border-light">
                <div className="d-flex align-items-center text-muted">
                  <FaShieldAlt className="text-secondary-custom me-3 fs-5" />
                  <span className="small fw-semibold">Certified Quality Standard</span>
                </div>
                <div className="d-flex align-items-center text-muted">
                  <FaTruck className="text-secondary-custom me-3 fs-5" />
                  <span className="small fw-semibold">Global Distribution Ready</span>
                </div>
                <div className="d-flex align-items-center text-muted">
                  <FaGlobeAmericas className="text-secondary-custom me-3 fs-5" />
                  <span className="small fw-semibold">100% Sustainable Source</span>
                </div>
              </div>

              <div className="d-flex gap-3">
                <Button
                  variant="gold"
                  size="lg"
                  className="btn-gold rounded-pill fw-bold w-100 shadow-sm d-flex justify-content-center align-items-center gap-2"
                  onClick={() => setShowOrderModal(true)}
                >
                  <FaWhatsapp /> Inquire Now / Place Order
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <OrderModal 
        show={showOrderModal} 
        onHide={() => setShowOrderModal(false)} 
        product={product} 
        initialQuantity={quantity}
        initialUnit={unit}
      />

    </div>
  );
};

export default ProductDetails;

