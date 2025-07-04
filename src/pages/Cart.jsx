import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../component/Title';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import HeroBanner from '../assets/order_johen_redman.jpg';
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "View Cart" }
];
const Cart = () => {
  return (
    <>
      <Title title="Cart" />
      <InnerHero
        backgroundImage={HeroBanner}
        title="View Cart"
        description="Review your selected items, update quantities, and proceed to checkout. Your favorite flavors are just a few clicks away—ready when you are!"
        breadcrumbItems={breadcrumbItems}
      />
      <section className='section-spacing'>
        <Container>
          <Row>
            <Col md={12}>
              <p>Cart page will be displayed here</p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Cart; 