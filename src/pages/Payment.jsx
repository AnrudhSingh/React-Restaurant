import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import HeroBanner from '../assets/payment_louis_hansel.jpg';
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Payment & Tax" }
];
const Payment = () => (
  <>
    <InnerHero
      backgroundImage={HeroBanner}
      title="Payment & Tax"
      description="Learn about our secure payment methods, billing process, and applicable taxes. We ensure a smooth and transparent checkout experience every time."
      breadcrumbItems={breadcrumbItems}
    />
    <Footer />
  </>
);

export default Payment; 