import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import HeroBanner from '../assets/blog_katie_musial.jpg';
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Blog" }
];
const Blog = () => (
  <>
    <InnerHero
      backgroundImage={HeroBanner}
      title="Blog"
      description="Explore tasty recipes, cooking tips, food trends, and kitchen hacks. Our blog brings flavor, inspiration, and fun to every food lover's day!"
      breadcrumbItems={breadcrumbItems}
    />
    <section className='section-spacing'>
      <Container>
        <Row>
          <Col>
            <p>Blog Post will be displayed here</p>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
  </>
);

export default Blog; 