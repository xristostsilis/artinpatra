import React, { useState } from 'react';
import './Purchase.css';

const Purchase = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const seats = Array.from({ length: 50 }, (_, index) => index + 1); // 50 seats for example

  const handleSeatSelect = (seat) => {
    setSelectedSeat(seat);
  };

  return (
    <div className="purchase-page">
      <h2>Αγορά Εισιτηρίου</h2>
      <div className="seat-selection">
        <h3>Επιλέξτε Θέση:</h3>
        <div className="seats">
          {seats.map((seat) => (
            <button
              key={seat}
              className={`seat ${selectedSeat === seat ? 'selected' : ''}`}
              onClick={() => handleSeatSelect(seat)}
            >
              {seat}
            </button>
          ))}
        </div>
        {selectedSeat && <p>Επιλέξατε Θέση: {selectedSeat}</p>}
      </div>
      <div className="payment-options">
        <h3>Επιλογές Πληρωμής:</h3>
        <form>
          <label htmlFor="card-number">Αριθμός Κάρτας:</label>
          <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required />
          
          <label htmlFor="card-expiry">Ημερομηνία Λήξης:</label>
          <input type="text" id="card-expiry" name="card-expiry" placeholder="MM/YY" required />
          
          <label htmlFor="card-cvc">CVC:</label>
          <input type="text" id="card-cvc" name="card-cvc" placeholder="123" required />
          
          <label htmlFor="card-name">Όνομα στην Κάρτα:</label>
          <input type="text" id="card-name" name="card-name" placeholder="John Doe" required />
          
          <h4>Ή επιλέξτε άλλο τρόπο πληρωμής:</h4>
          <div className="alternative-payments">
            <button type="button" className="paypal-button">PayPal</button>
            <button type="button" className="applepay-button">Apple Pay</button>
          </div>
          
          <button type="submit" className="submit-button">Αγορά</button>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
