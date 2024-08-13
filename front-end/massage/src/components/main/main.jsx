import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route} from 'react-router-dom';
import Home from '../main/Home';
import Services from '../main/Services';
import Booking from '../main/Booking';
import Contact from '../main/Contact';

const Main = ({marginTop, contactDetails, pricesData}) => {
  const { t } = useTranslation();

  return (
    <main className="main">
        <Routes>
          <Route path="/" element={<Home city={contactDetails.address.city}/>} />
          <Route path="/services" element={<Services marginTop={marginTop} pricesData={pricesData} />} />
          <Route path="/booking" element={<Booking marginTop={marginTop} />} />
          <Route path="/contact" element={<Contact marginTop={marginTop} contactsData={contactDetails} />} />
        </Routes>
    </main>
  );
};

export default Main;
