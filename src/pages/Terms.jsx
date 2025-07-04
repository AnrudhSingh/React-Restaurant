import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    <section className='section-spacing bg-gradient-darkLight position-relative section-categories'>
      <Container className='position-relative z-1'>
        <Row>
          <Col md={12} className='ContentList text-white'>
            <h1 className='title'>Terms of Service</h1>
            <h3>Acceptance of Terms</h3>
            <p>By accessing or using our website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our site.</p>
            <h3>Services Provided</h3>
            <p>We offer food ordering, delivery, and reservation services through our website. All services are subject to availability and may be changed without prior notice.</p>
            <h3>User Responsibilities</h3>
            <p>You agree to provide accurate and complete information during account registration or ordering. You are responsible for maintaining the confidentiality of your account credentials.</p>
            <h3>Orders and Payments</h3>
            <p>All prices are listed in your local currency and include applicable taxes unless stated otherwise. Orders are confirmed once payment is processed successfully.</p>
            <h3>Cancellations & Refunds</h3>
            <p>Order cancellations must be made within a specific time frame (e.g., 15 minutes after placing an order). Refunds are issued based on our Refund Policy and are subject to approval.</p>
            <h3>Delivery Terms</h3>
            <p>We aim to deliver within the estimated timeframe; however, delays may occur due to traffic, weather, or high demand. We are not liable for delays outside our control.</p>
            <h3>Prohibited Activities</h3>
            <p>You agree not to misuse our services, including engaging in fraudulent activities, disrupting servers, or violating any laws.</p>
            <h3>Intellectual Property</h3>
            <p>All content, trademarks, logos, and images on our website are the property of the company or its licensors and are protected by copyright laws.</p>
            <h3>Limitation of Liability</h3>
            <p>We are not liable for any damages arising from the use or inability to use our services, except as required by applicable law.</p>
            <h3>Changes to Terms</h3>
            <p>We may update these terms at any time. Continued use of the site after changes constitutes your acceptance of the new terms.</p>
            <h3>Contact Information</h3>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <div className="d-flex flex-column">
              <div className='d-flex align-items-center me-4'><h2>Email: </h2><a className='text-primary text-decuration-underline ms-3' href="emailto:support@example.co">support@example.co</a></div>
              <div className='d-flex align-items-center'><h2>Phone: </h2><a className='text-primary text-decuration-underline ms-3' href="tel:+123-456-7890">+123-456-7890</a></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
  </>
);

export default Terms; 