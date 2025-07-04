import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import HeroBanner from '../assets/payment_louis_hansel.jpg';
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Payment & Tax" }
];
const Payment = () => (
  <>
    <InnerHero
      backgroundImage={HeroBanner}
      title="Payment & Tax"
      description="Learn about our secure payment methods, billing process, and applicable taxes. We ensure a smooth and transparent checkout experience every time."
      breadcrumbItems={breadcrumbItems}
    />
    <section className='section-spacing'>
      <Container>
        <Row>
          <Col>
            <p>Payment page will be displayed here</p>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
  </>
);

export default Payment; 