import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Accomodation from './pages/Accomodation';
import Error from './pages/Error';

function App() {
  return (
      <Routes>
        <Route path='/OpenClassroomsProjet6/' element={<Home />} />
        <Route path='/OpenClassroomsProjet6/about' element={<About />} />
        <Route path='/OpenClassroomsProjet6/accomodation/:id' element={<Accomodation />} />
        <Route path='*' element={<Error />} />
      </Routes>
  )
}

export default App;