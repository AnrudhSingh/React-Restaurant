import React from 'react';
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
    <Footer />
  </>
);

export default Privacy; 