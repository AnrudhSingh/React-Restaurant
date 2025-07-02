import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
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
    <Footer />
  </>
);

export default About; 