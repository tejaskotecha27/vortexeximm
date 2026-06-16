import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { submitInquiry } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '919428891665';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Save to Database
      await submitInquiry(formData);
      
      // 2. Prepare WhatsApp Message
      let whatsappMessage = `*New Business Inquiry from VortexExim Website:*\n\n`;
      whatsappMessage += `*Details:*\n`;
      whatsappMessage += `- Name: ${formData.firstName} ${formData.lastName}\n`;
      whatsappMessage += `- Email: ${formData.email}\n`;
      whatsappMessage += `- Subject: ${formData.subject}\n\n`;
      whatsappMessage += `*Message:*\n${formData.message}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

      // 3. Success Feedback
      toast.success('Inquiry submitted! Opening WhatsApp...');
      
      // 4. Open WhatsApp directly
      window.open(whatsappUrl, '_blank');

      // 5. Reset
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);

    } catch (error) {
      console.error(error);
      toast.error('Failed to send message. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="fade-in bg-light min-vh-100 pb-5">
      <div className="bg-primary-custom py-5 text-center text-white mb-5">
        <Container>
          <h1 className="fw-bold display-5">Contact <span className="text-secondary-custom">Us</span></h1>
          <p className="lead mt-3 opacity-75 mx-auto" style={{ maxWidth: '600px' }}>
            Get in touch for business inquiries, quotes, or support.
          </p>
        </Container>
      </div>

      <Container>
        <Row className="gy-5">
          <Col lg={5}>
            <div className="pe-lg-4">
              <h2 className="fw-bold mb-4">Let's discuss your trade needs</h2>
              <p className="text-muted mb-5">
                Whether you're looking to source a new product, inquire about bulk pricing, or check shipping availability, our team is ready to assist you.
              </p>
              
              <div className="d-flex flex-column gap-4">
                <Card className="border-0 shadow-sm card-hover">
                  <Card.Body className="d-flex align-items-center p-4">
                    <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-4" style={{ width: '60px', height: '60px' }}>
                      <FaMapMarkerAlt className="text-secondary-custom fs-3" />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Head Office</h5>
                      <p className="text-muted mb-0">Plot No. 564, Phase II, Near Vatva Railway Station, Vatva GIDC, Vatva, Ahmedabad – 382445</p>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm card-hover">
                  <Card.Body className="d-flex align-items-center p-4">
                    <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-4" style={{ width: '60px', height: '60px' }}>
                      <FaPhoneAlt className="text-secondary-custom fs-3" />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Call Us</h5>
                      <p className="text-muted mb-0">+91 94288 91665</p>
                      <p className="text-muted mb-0">+91 94260 38331</p>
                      <p className="text-muted mb-0">+91 98983 72032</p>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm card-hover">
                  <Card.Body className="d-flex align-items-center p-4">
                    <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-4" style={{ width: '60px', height: '60px' }}>
                      <FaEnvelope className="text-secondary-custom fs-3" />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Email Us</h5>
                      <p className="text-muted mb-0">vortexexim.info@gmail.com</p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
          
          <Col lg={7}>
            <Card className="border-0 shadow-sm p-4 p-md-5 rounded-4">
              <h3 className="fw-bold mb-4">Send us a Message</h3>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-medium">First Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="firstName"
                        required 
                        placeholder="John" 
                        className="py-2" 
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-medium">Last Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="lastName"
                        required 
                        placeholder="Doe" 
                        className="py-2" 
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">Email Address</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    required 
                    placeholder="john@example.com" 
                    className="py-2" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">Subject</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="subject"
                    required 
                    placeholder="How can we help you?" 
                    className="py-2" 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="message"
                    rows={5} 
                    required 
                    placeholder="Write your message here..." 
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button 
                  variant="gold" 
                  type="submit" 
                  className="btn-gold rounded-pill px-5 py-2 fw-bold w-100"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message to WhatsApp'}
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
