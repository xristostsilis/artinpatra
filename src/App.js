import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import PastEvents from './pages/PastEvents';
import Contact from './pages/Contact';
import Purchase from './pages/Purchase';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
