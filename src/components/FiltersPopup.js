import React from 'react';
import Modal from 'react-modal';
import './FiltersPopup.css';

Modal.setAppElement('#root');

const FiltersPopup = ({ isOpen, onRequestClose, filters, handleFilterChange, handleResetFilters, handleApplyFilters }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Filters"
      className="filters-modal"
      overlayClassName="filters-modal-overlay"
    >
      <div className="filters-modal-content">
        <h2>Φίλτρα</h2>
        <div className="filter-group">
          <label>
            Τοποθεσία:
            <select name="location" value={filters.location} onChange={handleFilterChange}>
              <option value="">Όλες</option>
              <option value="Ρωμαϊκό Ωδείο Πατρών">Ρωμαϊκό Ωδείο Πατρών</option>
              <option value="Δημοτικό Θέατρο Απόλλων">Δημοτικό Θέατρο Απόλλων</option>
              <option value="Αρχαιολογικό Μουσείο Πατρών">Αρχαιολογικό Μουσείο Πατρών</option>
              <option value="Θέατρο Λιθογραφείο">Θέατρο Λιθογραφείο</option>
              <option value="Στάδιο Παναχαϊκής">Στάδιο Παναχαϊκής</option>
              <option value="Σινεμά Πάνθεον">Σινεμά Πάνθεον</option>
              <option value="Πολιτιστικό Κέντρο Πατρών">Πολιτιστικό Κέντρο Πατρών</option>
              <option value="Πάρκο Ειρήνης">Πάρκο Ειρήνης</option>
            </select>
          </label>
        </div>
        <div className="filter-group">
          <label>
            Ημερομηνία από:
            <input type="date" name="startDate" value={filters.startDate} onChange={handleFilterChange} />
          </label>
        </div>
        <div className="filter-group">
          <label>
            Ημερομηνία έως:
            <input type="date" name="endDate" value={filters.endDate} onChange={handleFilterChange} />
          </label>
        </div>
        <div className="filter-group">
          <label>
            Τύπος:
            <select name="type" value={filters.type} onChange={handleFilterChange}>
              <option value="">Όλοι</option>
              <option value="Εσωτερικός">Εσωτερικός</option>
              <option value="Εξωτερικός">Εξωτερικός</option>
            </select>
          </label>
        </div>
        <div className="filter-group">
          <label>
            Βαθμολογία:
            <input
              type="number"
              name="rating"
              value={filters.rating}
              onChange={handleFilterChange}
              min="0"
              max="5"
            />
          </label>
        </div>
        <div className="filter-modal-button-group">
          <button onClick={handleResetFilters} className="filter-modal-button reset">Επαναφορά Φίλτρων</button>
          <button onClick={handleApplyFilters} className="filter-modal-button apply">Εφαρμογή Φίλτρων</button>
          <button onClick={onRequestClose} className="filter-modal-button cancel">Ακύρωση</button>
        </div>
      </div>
    </Modal>
  );
};

export default FiltersPopup;
