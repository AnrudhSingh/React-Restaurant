import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
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
    <section className="section-spacing bg-dark">
      <Container>
        <Breadcrumb className="mb-3">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Recipe</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="display-4 text-white fw-bold mb-2">Recipe</h1>
      </Container>
    </section>
    <Footer />
  </>
);

export default Recipe; 