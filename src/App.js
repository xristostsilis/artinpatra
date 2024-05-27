import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import PastEvents from './pages/PastEvents';  // Import the PastEvents page
import Contact from './pages/Contact';
import Purchase from './pages/Purchase';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/past-events" element={<PastEvents />} />  {/* Add the route for PastEvents */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
