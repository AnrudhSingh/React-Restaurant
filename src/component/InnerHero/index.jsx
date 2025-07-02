import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';

const InnerHero = ({ backgroundImage, title, description, breadcrumbItems }) => (
  <section
    className="InnerHero section-spacing position-relative"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}
  >
    <div className="Inner-overlay" />
    <Container className="position-relative z-1 pt-5">
      <Breadcrumb className="mb-5">
        {breadcrumbItems.map((item, idx) =>
          item.href ? (
            <Breadcrumb.Item key={idx} href={item.href}>{item.label}</Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item key={idx} active>{item.label}</Breadcrumb.Item>
          )
        )}
      </Breadcrumb>
      <h1 className="display-3 text-white fw-bold mb-4">{title}</h1>
      {description && <p className="display-5 text-white mb-0">{description}</p>}
    </Container>
  </section>
);

export default InnerHero;