import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Error from './components/Error/Error';
import Accomodation from './components/Accomodation/Accomodation';
// import data from './data/data.json'

function App() {
  return <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement" element={<Accomodation />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </div>
}

export default App;