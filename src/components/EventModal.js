import React from 'react';
import Modal from 'react-modal';
import './EventModal.css';

Modal.setAppElement('#root');

const EventModal = ({ isOpen, onRequestClose, event }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Event Details"
      className="event-modal"
      overlayClassName="event-modal-overlay"
    >
      <div className="event-modal-content">
        <h2>{event.title}</h2>
        <img src={event.image} alt={event.title} className="event-modal-image" />
        <p><strong>Ημερομηνία:</strong> {event.date}</p>
        <p><strong>Τοποθεσία:</strong> {event.location}</p>
        <p><strong>Περιγραφή:</strong> {event.description}</p>
        <p><strong>Κόστος:</strong> 20€</p>
        <div className="event-modal-map">
          <iframe
            title="Google Maps Patras"
            width="100%"
            height="200"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://maps.google.com/maps?hl=en&q=Patras,Greece&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="event-modal-buttons">
          <button onClick={() => window.location.href = '/purchase'}>Αγορά Εισιτηρίου</button>
          <button onClick={onRequestClose}>Κλείσιμο</button>
        </div>
      </div>
    </Modal>
  );
};

export default EventModal;
