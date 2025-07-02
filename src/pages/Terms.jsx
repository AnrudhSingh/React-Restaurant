import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import HeroBanner from '../assets/order_johen_redman.jpg';
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Terms of Services" }
];
const Terms = () => (
  <>
  <InnerHero
        backgroundImage={HeroBanner}
        title="Terms of Services"
        description="Review our terms and conditions to understand your rights, responsibilities, and how we ensure a safe, fair, and reliable service for all users."
        breadcrumbItems={breadcrumbItems}
      />
    <section className="section-spacing bg-dark">
      <Container>
        <Breadcrumb className="mb-3">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Terms of Services</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="display-4 text-white fw-bold mb-2">Terms of Services</h1>
      </Container>
    </section>
    <Footer />
  </>
);

export default Terms; 