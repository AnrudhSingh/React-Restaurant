import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MenuSection.css';

const MenuSection = ({ subtitle, title, items }) => {
  // Split items into two columns
  const mid = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, mid);
  const rightItems = items.slice(mid);

  return (
    <>
        <Container>
            <Row>
                <Col lg={12} className='mb-4 mb-xl-5 text-white'>
                    {subtitle && <div className="menu-section-subtitle text-uppercase fw-semibold mb-2">{subtitle}</div>}
                    <h2 className="menu-section-title display-4 fw-bold">{title}</h2>
                </Col>
            </Row>
        </Container>
        <Container className="menu-section-content">
            <Row>
                <Col md={6}>
                    {leftItems.map((item, idx) => (
                        <div className="menu-item d-flex align-items-center mb-4" key={idx}>
                        {item.image && (
                            <img src={item.image} alt={item.name} className="menu-item-img rounded-circle me-3" width={52} height={52} />
                        )}
                        <div className="flex-grow-1">
                            <div className="d-flex align-items-center text-white mb-1">
                                <span className="menu-item-name fw-semibold flex-grow-1">{item.name}</span>
                                <span className="menu-item-line flex-grow-1 mx-2" style={{borderBottom:'1px solid #eee'}}></span>
                                <span className="menu-item-price fw-semibold">${item.price}</span>
                            </div>
                            <div className="menu-item-desc small">{item.description}</div>
                        </div>
                        </div>
                    ))}
                </Col>
                <Col md={6}>
                    {rightItems.map((item, idx) => (
                        <div className="menu-item d-flex align-items-center mb-4" key={mid + idx}>
                        {item.image && (
                            <img src={item.image} alt={item.name} className="menu-item-img rounded-circle me-3" width={52} height={52} />
                        )}
                        <div className="flex-grow-1">
                            <div className="d-flex align-items-center text-white mb-1">
                                <span className="menu-item-name fw-semibold flex-grow-1">{item.name}</span>
                                <span className="menu-item-line flex-grow-1 mx-2" style={{borderBottom:'1px solid #eee'}}></span>
                                <span className="menu-item-price fw-semibold">${item.price}</span>
                            </div>
                            <div className="menu-item-desc small">{item.description}</div>
                        </div>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    </>
  );
};

export default MenuSection; 