import React, { useRef } from 'react';
import './Testimonials.css'
import image1 from '../../Uploads/image1.jpeg';
import image2 from '../../Uploads/image2.png';
import image3 from '../../Uploads/image3.jpeg';
import image4 from '../../Uploads/image4.jpeg';
import image5 from '../../Uploads/image5.png';
import image6 from '../../Uploads/image6.jpeg';
import image7 from '../../Uploads/image7.jpeg';
import image8 from '../../Uploads/image8.png';
import image9 from '../../Uploads/image9.jpg';
import image10 from '../../Uploads/image10.jpeg';
import image11 from '../../Uploads/image11.jpeg';
import image12 from '../../Uploads/image12.jpeg';
import image13 from '../../Uploads/image13.jpeg';

const testimonials = [
  {
    id: 1,
    image: image1,
    title: 'Piece of Crystal',
    date: 'Jan 2023',
    author: 'Author 1',
    description: 'Description 1'
  },
  {
    id: 2,
    image: image2,
    title: 'Fancy Gemstones',
    date: 'Feb 2023',
    author: 'Author 2',
    description: 'Description 2'
  },
  {
    id: 3,
    image: image3,
    title: 'Jewel Gear',
    date: 'Mar 2023',
    author: 'Author 3',
    description: 'Description 3'
  },
  {
    id: 4,
    image: image4,
    title: 'Homemade Gems',
    date: 'Apr 2023',
    author: 'Author 4',
    description: 'Description 4'
  },
  {
    id: 5,
    image: image5,
    title: 'Title 5',
    date: 'May 2023',
    author: 'Author 5',
    description: 'Description 5'
  },
  {
    id: 6,
    image: image6,
    title: 'Title 6',
    date: 'Jun 2023',
    author: 'Author 6',
    description: 'Description 6'
  },
  {
    id: 7,
    image: image7,
    title: 'Title 7',
    date: 'Jul 2023',
    author: 'Author 7',
    description: 'Description 7'
  },
  {
    id: 8,
    image: image8,
    title: 'Title 8',
    date: 'Aug 2023',
    author: 'Author 8',
    description: 'Description 8'
  },
  {
    id: 9,
    image: image9,
    title: 'Title 9',
    date: 'Sep 2023',
    author: 'Author 9',
    description: 'Description 9'
  },
  {
    id: 10,
    image: image10,
    title: 'Title 10',
    date: 'Oct 2023',
    author: 'Author 10',
    description: 'Description 10'
  },
  {
    id: 11,
    image: image11,
    title: 'Title 11',
    date: 'Nov 2023',
    author: 'Author 11',
    description: 'Description 11'
  },
  {
    id: 12,
    image: image12,
    title: 'Title 12',
    date: 'Dec 2023',
    author: 'Author 12',
    description: 'Description 12'
  },
  {
    id: 13,
    image: image13,
    title: 'Title 13',
    date: 'Jan 2024',
    author: 'Author 13',
    description: 'Description 13'
  }
];

const Testimonials = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -containerRef.current.clientWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: containerRef.current.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className="testimonials-section">
      <h2>From our blog</h2>
      <div className="testimonials-list-container">
        <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>
        <div className="testimonials-list" ref={containerRef}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.title} />
              <div className="testimonial-content">
                <span>ARTICLES</span>
                <h3>{testimonial.title}</h3>
                <p>{testimonial.description}</p>
                <p>{testimonial.date} by {testimonial.author}</p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default Testimonials;