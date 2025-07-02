import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import HeroBanner from '../assets/contact_anima_visual.jpg';
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Contact Us" }
];
const Contact = () => (
  <>
  <InnerHero
      backgroundImage={HeroBanner}
      title="Contact Us"
      description="Have questions or feedback? We'd love to hear from you! Reach out for orders, support, or just to say hi — we're always here to help."
      breadcrumbItems={breadcrumbItems}
    />
    <Footer />
  </>
);

export default Contact; 