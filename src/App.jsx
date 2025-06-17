import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar2 from './Project2/Navbar2';
import Home2 from './Project2/Home2';
import AboutUs2 from './Project2/AboutUs2';
import OurServices2 from './Project2/OurServices2';
import OurTeam2 from './Project2/OurTeam2';
import ContactUs2 from './Project2/ContactUs2';
import Details2 from './Project2/Details2';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar2 />
        <Routes>
          <Route path='/' element={<Home2 />} />
          <Route path='/AboutUs2' element={<AboutUs2 />} />
          <Route path='/OurServices2' element={<OurServices2 />} />
          <Route path='/OurTeam2' element={<OurTeam2 />} />
          <Route path='/ContactUs2' element={<ContactUs2 />} />
          <Route path='/Details2' element={<Details2 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
