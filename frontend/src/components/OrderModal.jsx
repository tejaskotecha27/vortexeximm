import { useState, useEffect } from 'react';
import { Modal, Form, Button, Spinner, Row, Col } from 'react-bootstrap';
import { createOrder } from '../services/api';
import { toast } from 'react-toastify';

const OrderModal = ({ show, onHide, product, initialQuantity = 1, initialUnit = 'Kgs' }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    quantity: initialQuantity,
    unit: initialUnit,
    message: ''
  });

  useEffect(() => {
    if (show) {
      setFormData(prev => ({ 
        ...prev, 
        quantity: initialQuantity, 
        unit: initialUnit 
      }));
    }
  }, [show, initialQuantity, initialUnit]);

  const [loading, setLoading] = useState(false);

  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '919428891665'; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. Save to database
      const orderData = {
        customerName: formData.customerName,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        items: [{
          productName: product.name,
          quantity: formData.quantity,
          unit: formData.unit
        }]
      };
      
      await createOrder(orderData);
      
      toast.success('Inquiry recorded successfully!');
      
      // 2. Format WhatsApp Message
      const message = `New Product Inquiry from VortexExim Website:
Name: ${formData.customerName}
Phone: ${formData.phone}
Email: ${formData.email}
Product: ${product.name}
Quantity: ${formData.quantity} ${formData.unit}
Message: ${formData.message}`;



      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      // 3. Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setLoading(false);
      onHide();
    } catch (error) {
      console.error(error);
      toast.error('Failed to submit order. Please try again.');
      setLoading(false);
    }
  };

  if (!product) return null;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="bg-primary-custom text-white">
        <Modal.Title className="fw-bold">Place Order: {product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-medium">Full Name</Form.Label>
            <Form.Control 
              type="text" 
              name="customerName" 
              required 
              placeholder="e.g. John Doe"
              value={formData.customerName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-medium">Phone Number (with country code)</Form.Label>
            <Form.Control 
              type="text" 
              name="phone" 
              required 
              placeholder="e.g. +91 94288 91665"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-medium">Email Address</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              required 
              placeholder="e.g. john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Row className="mb-3">
            <Col sm={6}>
              <Form.Label className="fw-medium">Quantity</Form.Label>
              <Form.Control 
                type="number" 
                name="quantity" 
                min="1" 
                required 
                value={formData.quantity}
                onChange={handleChange}
              />
            </Col>
            <Col sm={6}>
              <Form.Label className="fw-medium">Unit</Form.Label>
              <Form.Select
                name="unit"
                value={formData.unit}
                onChange={handleChange}
              >
                <option value="Kgs">Kilograms (Kgs)</option>
                <option value="Tons">Metric Tons</option>
              </Form.Select>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label className="fw-medium">Additional Message / Requirements</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              name="message" 
              placeholder="Any specific instructions or port of destination?"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="gold" type="submit" className="btn-gold rounded-pill w-100 py-2 fw-bold" disabled={loading}>
            {loading ? 'Processing...' : 'Send Order to WhatsApp'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default OrderModal;
