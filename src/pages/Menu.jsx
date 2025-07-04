import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from '../component/SectionTitle';
import ServiceContent from '../component/ServiceContent';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import MenuSection from '../component/MenuSection';
import HeroBanner from '../assets/menu-davide-cantelli-jpkfc5_d-DI-unsplash.jpg';

// Use the full menu list instead of "starters"
import { menuItems } from '../data/menuItems'; // You can move the large array to a separate file for cleaner code

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Our Menu" }
];

// Group items by section
const groupedMenu = menuItems.reduce((acc, item) => {
  const section = item.section;
  if (!acc[section]) {
    acc[section] = {
      title: section,
      description: item.sectionDescription,
      items: []
    };
  }
  acc[section].items.push(item);
  return acc;
}, {});

const Menu = () => (
  <>
    <InnerHero
      backgroundImage={HeroBanner}
      title="Our Menu"
      description="Discover our delicious menu filled with fresh flavors, signature dishes, and tasty treats made to satisfy every craving — there's something for everyone!"
      breadcrumbItems={breadcrumbItems}
    />
    <section className="section-spacing bg-gradient-darkLight section-categories position-relative">
      <div className="position-relative z-1">
        {Object.entries(groupedMenu).map(([key, section]) => (
          <MenuSection
            key={key}
            subtitle={section.description}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </section>
    
    <section className='section-spacing bg-dark'>
      <Container>
        <Row>
          <Col md={6} className='mx-auto text-white text-center'>
            <SectionTitle
              subtitle="FEATURES"
              title="Why people choose us?"
              description="People choose us for fresh ingredients, flavorful dishes, and a warm, welcoming atmosphere that feels just like home."
            />
          </Col>
        </Row>
        <Row className='gy-4'>
          <Col lg={4}>
            <ServiceContent
              title="Menu For Every Taste"
              description="Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem."
            />
          </Col>
          <Col lg={4}>
            <ServiceContent
              title="Always Quality Ingredients"
              description="Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem."
            />
          </Col>
          <Col lg={4}>
            <ServiceContent
              title="Experienced Chefs"
              description="Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem."
            />
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
  </>
);

export default Menu;
