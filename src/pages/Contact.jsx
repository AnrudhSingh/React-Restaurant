import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import HeroBanner from '../assets/contact_anima_visual.jpg';
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Contact Us" }
];
const Contact = () => (
  <>
  <InnerHero
      backgroundImage={HeroBanner}
      title="Contact Us"
      description="Have questions or feedback? We'd love to hear from you! Reach out for orders, support, or just to say hi — we're always here to help."
      breadcrumbItems={breadcrumbItems}
    />
    <section className='section-spacing'>
      <Container>
        <Row>
          <Col md={12}>
            <p>Contact page will be displayed here</p>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
  </>
);

export default Contact; 