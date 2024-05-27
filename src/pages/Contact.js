import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Στοιχεία Επικοινωνίας</h2>
        <p><strong>Διεύθυνση:</strong> Παράδειγμα Οδός 123, Πάτρα, Ελλάδα</p>
        <p><strong>Τηλέφωνο:</strong> +30 2610 123456</p>
        <p><strong>Email:</strong> info@example.com</p>
      </div>
      <div className="contact-map">
        <iframe
          title="Patras Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12637.54579940712!2d21.725321869180177!3d38.24663929219986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b8ba3c3e13fcd%3A0x400bd2ce2b9d975!2sPatras!5e0!3m2!1sen!2sgr!4v1620384752564!5m2!1sen!2sgr"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-form">
        <h2>Φόρμα Επικοινωνίας</h2>
        <form>
          <label htmlFor="name">Όνομα:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Μήνυμα:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Αποστολή</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
