import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../component/Title';
import ProductSlider from '../component/ProductSlider';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import HeroBanner from '../assets/shop_emanuel_ekstrom.jpg';
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Shop" }
];
const Shop = () => {
  const products = [
    {
      title: "Beef Fried",
      description: "Handmade pasta with our secret sauce recipe.",
      image: "https://images.unsplash.com/photo-1669907366240-365f02ceaf44",
      rating: 4.5,
      reviewCount: 128,
      price: 24.99,
      oldPrice: 29.99,
      link: "/menu/pasta"
    },
    {
      title: "Hamburger",
      description: "Fresh Atlantic salmon with seasonal vegetables.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      rating: 4.8,
      reviewCount: 95,
      price: 32.99,
      link: "/menu/seafood"
    },
    {
      title: "Apple Pie",
      description: "Angus beef patty with special sauce.",
      image: "https://plus.unsplash.com/premium_photo-1694336203192-c9e7f2891b95",
      rating: 4.3,
      reviewCount: 156,
      price: 18.99,
      link: "/menu/burgers"
    },
    {
      title: "Buffalo Wings",
      description: "Rich chocolate cake with ganache.",
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d",
      rating: 4.7,
      reviewCount: 82,
      price: 12.99,
      link: "/menu/desserts"
    },
    {
      title: "Macaroni and Cheese",
      description: "A creamy, comforting dish made from cooked.",
      image: "https://plus.unsplash.com/premium_photo-1661677825991-caa232fea9da",
      rating: 4.7,
      reviewCount: 82,
      price: 12.99,
      link: "/menu/desserts"
    },
    {
      title: "Beef",
      description: "Discover our menu and order delivery.",
      image: "https://images.unsplash.com/photo-1690983322025-aab4f95a0269",
      rating: 4.7,
      reviewCount: 82,
      price: 12.99,
      link: "/menu/desserts"
    },
    {
      title: "Salmon",
      description: "Get the freshest salmon and ocean trout.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
      rating: 4.7,
      reviewCount: 82,
      price: 12.99,
      link: "/menu/desserts"
    }
  ];

  return (
    <>
      <Title title="Shop" />
      <InnerHero
        backgroundImage={HeroBanner}
        title="Shop"
        description="Browse our shop for tasty treats, kitchen essentials, and more. Quality ingredients and food products delivered fresh to your door—shop now!"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="bg-primary section-spacing section-product position-relative">
        <Container fluid className='position-relative z-1'>
          <Row>
            <Col md={12}>
              <h2 className="section-title text-center text-white mb-4">Featured Dishes</h2>
              <ProductSlider products={products} />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Shop; 