import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import HeroBanner from '../assets/menu_mike_bergmann.jpg';
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Menu" }
];
const Menu = () => (
  <>
  <InnerHero
      backgroundImage={HeroBanner}
      title="Menu"
      description="Discover our delicious menu filled with fresh flavors, signature dishes, and tasty treats made to satisfy every craving — there's something for everyone!"
      breadcrumbItems={breadcrumbItems}
    />
    <Footer />
  </>
);

export default Menu; 