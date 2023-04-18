import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Pagination]);

const TestimonialsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
`;

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 10px;
  color: ${({ theme }) => theme.secondaryColor};
  max-width: 400px;
`;

const UserPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const UserName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const UserQuote = styled.p`
  font-size: 1rem;
`;

const testimonialsData = [
  {
    name: 'Alice',
    photo: '/images/user1.jpg',
    quote: 'The Voice Assistant app has greatly improved my productivity and communication with my team.',
  },
  {
    name: 'Bob',
    photo: '/images/user2.jpg',
    quote: 'I love the convenience of using either voice or text to interact with the Voice Assistant.',
  },
  {
    name: 'Charlie',
    photo: '/images/user3.jpg',
    quote: 'Voice Assistant has become an essential tool for managing my daily tasks and staying organized.',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <TestimonialsContainer>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard>
              <UserPhoto src={testimonial.photo} alt={testimonial.name} />
              <UserName>{testimonial.name}</UserName>
              <UserQuote>{testimonial.quote}</UserQuote>
            </TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;
