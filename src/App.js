import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Accomodation from './components/Accomodation';
import Error from './pages/Error';

function App() {
  return (
    // <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/logement/:id' element={<Accomodation />}/>
        <Route path='*' element={<Error />} />
      </Routes>
    // </div>
  )
}

export default App;