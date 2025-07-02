import React from 'react';
import Title from '../component/Title';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import HeroBanner from '../assets/order_johen_redman.jpg';
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "View Cart" }
];
const Cart = () => {
  return (
    <>
      <Title title="Cart" />
      <InnerHero
        backgroundImage={HeroBanner}
        title="View Cart"
        description="Review your selected items, update quantities, and proceed to checkout. Your favorite flavors are just a few clicks away—ready when you are!"
        breadcrumbItems={breadcrumbItems}
      />
      <div className="container py-5">
        <p>Blog posts will be displayed here</p>
      </div>
      <Footer />
    </>
  );
};

export default Cart; 