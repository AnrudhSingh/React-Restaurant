import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import angleRight from '../../assets/angle-right.svg';
import {FaCoffee,  FaUtensils,  FaDrumstickBite,  FaConciergeBell,  FaIceCream,  FaCocktail} from 'react-icons/fa';

const services = [
  {
    title: 'Breakfast',
    description: 'Start your day right with our fresh and hearty breakfast options.',
    icon: FaCoffee,
  },
  {
    title: 'Lunch',
    description: 'Delicious mid-day meals to keep you energized and satisfied.',
    icon: FaUtensils,
  },
  {
    title: 'Dinner',
    description: 'Indulgent and comforting dinners perfect for winding down.',
    icon: FaDrumstickBite,
  },
  {
    title: 'Custom',
    description: 'Custom meal plans tailored to your taste and dietary needs.',
    icon: FaConciergeBell,
  },
  {
    title: 'Dessert',
    description: 'Sweet treats and indulgent finishes to complete your meal.',
    icon: FaIceCream,
  },
  {
    title: 'Drinks',
    description: 'From artisan coffee to fine wines, we\'ve got your thirst covered.',
    icon: FaCocktail,
  }
];

const OurServices = ({ buttonText = "Explore More", buttonLink = "#" }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const showMore = () => setVisibleCount(services.length);

  return (
    <>
      <Row className="g-4">
        {services.slice(0, visibleCount).map((service) => {
          const Icon = service.icon;
          return (
            <Col md={6} key={service.title}>
              <div className="testimonial-card p-4 h-100 rounded-4 d-flex flex-column align-items-start justify-content-between">
                <div className="w-100">
                    <div className="d-flex align-items-center gap-3 mb-3">
                        <Icon className='text-primary me-3' size={54} />
                        <h3 className="text-white mb-0">{service.title}</h3>
                    </div>
                    <p className="mb-4">{service.description}</p>
                </div>
                {buttonText && (
                  <a href={buttonLink} className="btn btn-primary rounded-pill px-4 py-2 banner-btn-arrow">
                    {buttonText}
                    <img
                      src={angleRight}
                      alt="Right Arrow"
                      className="arrow-img ms-2"
                    />
                  </a>
                )}
              </div>
            </Col>
          );
        })}
      </Row>

      {visibleCount < services.length && (
        <div className="text-center mt-4">
            {buttonText && (
                <Button variant="primary" className="rounded-pill px-5 fw-semibold" onClick={showMore}>
                    Load More
                    <img
                        src={angleRight}
                        alt="Right Arrow"
                        className="arrow-img ms-2"
                    />
                </Button>
            )}
        </div>
      )}
    </>
  );
};

export default OurServices;
