import React, { useState } from 'react';
import './EventCard.css';

const EventCard = ({ event, onClick }) => {
  const [rating, setRating] = useState(event.rating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleMouseOver = (rate) => {
    setHoverRating(rate);
  };

  const handleMouseOut = () => {
    setHoverRating(0);
  };

  return (
    <div className="event-card" onClick={onClick}>
      <img src={event.image} alt={event.title} />
      <div className="event-card-content">
        <h3>{event.title}</h3>
        <p>{event.date}</p>
        <p>{event.location}</p>
        <p>{event.description}</p>
        <div
          className="rating"
          onClick={(e) => e.stopPropagation()} // Prevents triggering the card's onClick
        >
          {[1, 2, 3, 4, 5].map((rate) => (
            <span
              key={rate}
              className={`star ${rate <= (hoverRating || rating) ? 'filled' : ''}`}
              onClick={() => handleRating(rate)}
              onMouseOver={() => handleMouseOver(rate)}
              onMouseOut={handleMouseOut}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
