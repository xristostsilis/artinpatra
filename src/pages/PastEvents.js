import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import './Events.css';

const PastEvents = () => {
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    fetch('/pastEvents.json')
      .then((response) => response.json())
      .then((data) => setPastEvents(data));
  }, []);

  return (
    <div className="events-page">
      <h2>Περασμένες Εκδηλώσεις</h2>
      <div className="events">
        {pastEvents.map((event, index) => (
          <EventCard key={index} event={event} isPast={true} />
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
