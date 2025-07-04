import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import SectionTitle from '../component/SectionTitle';
import HeroBanner from '../assets/about_paul_einerhand.jpg';

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About Us" }
];

const About = () => (
  <>
    <InnerHero
      backgroundImage={HeroBanner}
      title="About Us"
      description="We serve delicious, fresh, and locally inspired food with love. Passionate about taste, quality, and bringing people together around every meal."
      breadcrumbItems={breadcrumbItems}
    />
    <section className='section-spacing bg-dark position-relative section-categories'>
        <Container className='position-relative z-1'>
          <Row>
            <Col md={8} className='mx-auto text-white text-center'>
              <SectionTitle
                subtitle="Testimonials"
                title="What Our Customers Say"
                description="Hear from our happy guests about their experiences at our restaurant."
              />
            </Col>
          </Row>
        </Container>
      </section>
    <Footer />
  </>
);

export default About; 