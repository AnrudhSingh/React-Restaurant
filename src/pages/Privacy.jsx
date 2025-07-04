import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../component/Title';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import HeroBanner from '../assets/order_johen_redman.jpg';
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy" }
];
const Privacy = () => (
  <>
    <Title title="Privacy Policy" />
    <InnerHero
      backgroundImage={HeroBanner}
      title="Privacy Policy"
      description="Your privacy matters to us. Learn how we collect, use, and protect your personal data to ensure a safe and secure browsing experience."
      breadcrumbItems={breadcrumbItems}
    />
    <section className='section-spacing bg-gradient-darkLight position-relative section-categories'>
      <Container className='position-relative z-1'>
        <Row>
          <Col md={12} className='ContentList text-white'>
            <h1 className='title'>Privacy Policy</h1>
            
            <h3>Introduction</h3>
            <p>We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website or services.-</p>

            <h3>Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <ol>
              <li>Personal Information: Name, email, phone number, delivery address, payment details.</li>
              <li>Technical Data: IP address, browser type, device information, and cookies.</li>
              <li>Usage Data: Pages visited, time spent on the site, and click behavior.</li>
            </ol>

            <h3>How We Use Your Information</h3>
            <p>Your data is used to:</p>
            <ol>
              <li>Process and deliver food orders</li>
              <li>Communicate with you about your order or account</li>
              <li>Improve our website and services</li>
              <li>Send promotional offers (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ol>

            <h3>Cookies & Tracking Technologies</h3>
            <p>We use cookies and similar technologies to personalize your experience, analyze site traffic, and improve service. You can manage your cookie preferences in your browser settings.</p>

            <h3>Data Sharing</h3>
            <p>We do not sell your personal data. We may share information with:</p>
            <ol>
              <li>Payment processors and delivery services</li>
              <li>Third-party analytics tools (e.g., Google Analytics)</li>
              <li>Legal authorities if required by law</li>
            </ol>

            <h3>Data Security</h3>
            <p>We implement appropriate security measures to protect your data from unauthorized access, disclosure, or alteration. However, no system is 100% secure.</p>

            <h3>Your Rights</h3>
            <p>You have the right to:</p>
            <ol>
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent to marketing at any time</li>
            </ol>

            <h3>Children’s Privacy</h3>
            <p>Our services are not directed to children under 13. We do not knowingly collect data from children.</p>

            <h3>Changes to This Policy</h3>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

            <h3>Contact Us</h3>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="d-flex flex-column">
              <div className='d-flex align-items-center me-4'><h2>Email: </h2><a className='text-primary text-decuration-underline ms-3' href="emailto:privacy@example.com">privacy@example.com</a></div>
              <div className='d-flex align-items-center'><h2>Phone: </h2><a className='text-primary text-decuration-underline ms-3' href="tel:+123-456-7890">+123-456-7890</a></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
  </>
);

export default Privacy; 