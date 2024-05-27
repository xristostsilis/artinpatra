import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import EventCard from '../components/EventCard';

const Home = () => {
  const importantEvents = [
    {
      title: 'Συναυλία "Μαρία Φαραντούρη"',
      date: '2024-06-05',
      location: 'Ρωμαϊκό Ωδείο Πατρών',
      description: 'Η μεγάλη ερμηνεύτρια σε μια μοναδική συναυλία.',
      image: '/images/events/home1.jpeg',
      rating: 5,
      type: 'Εξωτερικός'
    },
    {
      title: 'Συναυλία "Πυξ Λαξ"',
      date: '2024-06-20',
      location: 'Στάδιο Παναχαϊκής',
      description: 'Η αγαπημένη ελληνική μπάντα σε μια βραδιά γεμάτη επιτυχίες.',
      image: '/images/events/home2.jpeg',
      rating: 5,
      type: 'Εξωτερικός'
    },
    {
      title: 'Συναυλία "Ελληνική Μουσική"',
      date: '2024-08-05',
      location: 'Ρωμαϊκό Ωδείο Πατρών',
      description: 'Βραδιά με αγαπημένα ελληνικά τραγούδια.',
      image: '/images/events/home3.jpeg',
      rating: 5,
      type: 'Εξωτερικός'
    },
  ];

  return (
    <div className="home">
      <Carousel showThumbs={false}>
        <div>
          <img src="/images/carousel/1.jpeg" alt="Event 1" />
          <p className="legend">Γέφυρα Ρίου Αντιρίου</p>
        </div>
        <div>
          <img src="/images/carousel/2.jpeg" alt="Event 2" />
          <p className="legend">Αχαια Κλάους</p>
        </div>
        <div>
          <img src="/images/carousel/3.jpeg" alt="Event 3" />
          <p className="legend">Μαρίνα Πάτρας</p>
        </div>
      </Carousel>
      <h2>Τα πιο διάσημα events της εβδομάδας</h2>
      <div className="important-events">
        {importantEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Home;
