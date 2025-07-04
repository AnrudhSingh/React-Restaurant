import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import HeroBanner from '../assets/order_johen_redman.jpg';
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Order Delivery" }
];
const Order = () => (
  <>
  <InnerHero
      backgroundImage={HeroBanner}
      title="Order Delivery"
      description="Craving something delicious? Place your order online now! Fast, easy, and fresh — enjoy your favorite food delivered right to your door."
      breadcrumbItems={breadcrumbItems}
    />
    <section className='section-spacing'>
      <Container>
        <Row>
          <Col>
            <p>Order page will be displayed here</p>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
  </>
);

export default Order; 