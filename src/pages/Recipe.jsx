import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import HeroBanner from '../assets/recipe_louis_hansel.jpg';
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Recipe" }
];
const Recipe = () => (
  <>
  <InnerHero
      backgroundImage={HeroBanner}
      title="Recipe"
      description="Find easy, delicious recipes for every taste! From quick meals to gourmet dishes, cook like a pro with our step-by-step guides and kitchen tips."
      breadcrumbItems={breadcrumbItems}
    />
    <section className='section-spacing'>
      <Container>
        <Row>
          <Col>
            <p>Recipe page will be displayed here</p>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
  </>
);

export default Recipe; 