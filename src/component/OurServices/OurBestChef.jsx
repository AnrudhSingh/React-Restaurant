import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const chefData = [
  {
    name: 'Annette Black',
    designation: 'Senior Chef',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=facearea&w=400&h=400',
    designationColor: '#E91E63',
    social: [
      { icon: FaFacebookF, link: '#' },
      { icon: FaTwitter, link: '#' },
      { icon: FaInstagram, link: '#' },
      { icon: FaLinkedin, link: '#' },
    ],
  },
  {
    name: 'Kristin Watson',
    designation: 'Master Chef',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400',
    designationColor: '#ED274B',
    social: [
      { icon: FaFacebookF, link: '#' },
      { icon: FaTwitter, link: '#' },
      { icon: FaInstagram, link: '#' },
      { icon: FaLinkedin, link: '#' },
    ],
  },
  {
    name: 'Ralph Edwards',
    designation: 'Senior Chef',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=400&h=400',
    designationColor: '#E91E63',
    social: [
      { icon: FaFacebookF, link: '#' },
      { icon: FaTwitter, link: '#' },
      { icon: FaInstagram, link: '#' },
      { icon: FaLinkedin, link: '#' },
    ],
  },
];

const OurBestChef = () => (
  <div className="row g-4 justify-content-center">
    {chefData.map((chef, idx) => (
      <div className="col-md-4 d-flex align-items-stretch" key={chef.name}>
        <div className="testimonial-card rounded-4 h-100 w-100">
            <div className="w-100 d-flex justify-content-center position-relative overflow-hidden">
                <div className="ratio ratio-4x3 rounded-4 overflow-hidden">
                    <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-100 object-fit-cover rounded-4"
                    style={{ height: 320, objectFit: 'cover' }}
                    />
                </div>
                {chef.social && (
                    <div className="cardsocial position-absolute top-50 end-0 translate-middle-y d-flex flex-column align-items-center gap-2" style={{ right: 0, marginRight: -32 }}>
                        {chef.social.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <a href={s.link} key={i} className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 32, height: 32 }}>
                                    <Icon size={16} color="#ED274B" />
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>
            <div className="w-100 d-flex flex-column align-items-center p-4 text-center">
                <h4 className="text-white fw-bold mb-2">{chef.name}</h4>
                <div className="text-primary mb-0">{chef.designation}</div>
            </div>
        </div>
      </div>
    ))}
  </div>
);

export default OurBestChef;