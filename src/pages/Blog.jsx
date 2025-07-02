import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import PageTitle from '../component/PageTitle';
import Title from '../component/Title';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import HeroBanner from '../assets/blog_katie_musial.jpg';
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Blog" }
];
const Blog = () => (
  <>
    <InnerHero
      backgroundImage={HeroBanner}
      title="Blog"
      description="Explore tasty recipes, cooking tips, food trends, and kitchen hacks. Our blog brings flavor, inspiration, and fun to every food lover's day!"
      breadcrumbItems={breadcrumbItems}
    />
    <Footer />
  </>
);

export default Blog; 