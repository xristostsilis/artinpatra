import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import EventModal from '../components/EventModal';
import Search from '../components/Search';
import FiltersPopup from '../components/FiltersPopup';
import { remove as removeDiacritics } from 'diacritics';
import './Events.css';

const Events = () => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    startDate: '',
    endDate: '',
    type: '',
    rating: 0,
  });
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filtersVisible, setFiltersVisible] = useState(false);

  useEffect(() => {
    fetch('/events.json')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error loading events:', error));
  }, []);

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const startDate = filters.startDate ? new Date(filters.startDate) : null;
    const endDate = filters.endDate ? new Date(filters.endDate) : null;

    const normalizedTitle = removeDiacritics(event.title).toLowerCase();
    const normalizedQuery = removeDiacritics(query).toLowerCase();

    return (
      normalizedTitle.includes(normalizedQuery) &&
      (filters.location === '' || event.location === filters.location) &&
      (!startDate || eventDate >= startDate) &&
      (!endDate || eventDate <= endDate) &&
      (filters.type === '' || event.type === filters.type) &&
      event.rating >= filters.rating
    );
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      location: '',
      startDate: '',
      endDate: '',
      type: '',
      rating: 0,
    });
    setQuery('');
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  const applyFilters = () => {
    setFiltersVisible(false);
  };

  return (
    <div className="events-page">
      <div className="search-container">
        <Search query={query} setQuery={setQuery} />
      </div>
      <button className="filters-button" onClick={toggleFilters}>
        Φίλτρα
      </button>
      <FiltersPopup
        isOpen={filtersVisible}
        onRequestClose={toggleFilters}
        filters={filters}
        handleFilterChange={handleFilterChange}
        handleResetFilters={handleResetFilters}
        applyFilters={applyFilters}
      />
      <div className="events">
        {filteredEvents.map((event, index) => (
          <EventCard key={index} event={event} onClick={() => setSelectedEvent(event)} />
        ))}
      </div>
      {selectedEvent && (
        <EventModal
          isOpen={Boolean(selectedEvent)}
          onRequestClose={() => setSelectedEvent(null)}
          event={selectedEvent}
        />
      )}
    </div>
  );
};

export default Events;
