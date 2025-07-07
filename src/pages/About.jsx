import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../component/Footer';
import InnerHero from "../component/InnerHero";
import SectionTitle from '../component/SectionTitle';
import OurServices from '../component/OurServices';
import OurBestChef from '../component/OurServices/OurBestChef';
import Testimonials from '../component/Testimonials';
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
    <section className='section-spacing bg-dark position-relative section-categories'>
      <Container className='position-relative z-1'>
        <Row>
          <Col md={8} className='mx-auto text-white text-center'>
            <SectionTitle
              subtitle="Our Services"
              title="From Kitchen to Doorstep"
              description="Discover our wide range of food services crafted for taste and convenience."
            />
          </Col>
        </Row>
      </Container>
      <Container className='position-relative z-1'>
        <Row className='g-4'>
          <OurServices />
        </Row>
      </Container>
    </section>
    <section className='section-spacing bg-dark'>
      <Container className='position-relative z-1'>
        <Row>
          <Col md={8} className='mx-auto text-white text-center'>
            <SectionTitle
              subtitle="Meet Our Best Chef"
              title="The Heart Behind the Kitchen"
              description="Driven by passion and precision, our chef brings bold ideas and fresh ingredients together to create meals that inspire."
            />
          </Col>
        </Row>
      </Container>
      <Container className='position-relative z-1'>
        <Row className='g-4'>
          <OurBestChef />
        </Row>
      </Container>
    </section>
    <section className='section-spacing bg-dark position-relative section-categories'>
        <Container className='position-relative z-1'>
          <Row>
            <Col md={8} className='mx-auto text-white text-center'>
              <SectionTitle
                subtitle="Testimonials"
                title="What Our Customers Say"
                description="Hear from our happy guests about their experiences at our restaurant."
              />
            </Col>
          </Row>
          <Row>
            <Col xl={11} className='mx-auto'>
              <Testimonials
                slides={[
                  {
                    userPic: 'https://randomuser.me/api/portraits/men/32.jpg',
                    userName: 'John Doe',
                    userDesignation: 'Food Blogger',
                    description: 'Absolutely loved the ambiance and the food! The staff was friendly and the coffee was the best I have ever had.',
                    rating: 4.5
                  },
                  {
                    userPic: 'https://randomuser.me/api/portraits/women/44.jpg',
                    userName: 'Jane Smith',
                    userDesignation: 'Chef',
                    description: 'A wonderful place for family dinners. The desserts are to die for and the service is top-notch.',
                    rating: 5
                  },
                  {
                    userPic: 'https://randomuser.me/api/portraits/men/65.jpg',
                    userName: 'Michael Lee',
                    userDesignation: 'Coffee Enthusiast',
                    description: 'The kava beans here are of the highest quality. I always leave with a smile on my face.',
                    rating: 4
                  }
                ]}
              />
            </Col>
          </Row>
        </Container>
      </section>
    <Footer />
  </>
);

export default About; 