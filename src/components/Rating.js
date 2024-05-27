import React from 'react';
import './Rating.css';

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((star, index) => {
        return (
          <span key={index} className={index < rating ? 'star filled' : 'star'}>
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
