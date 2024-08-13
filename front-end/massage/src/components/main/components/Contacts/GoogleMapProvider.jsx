import React from 'react';
import { LoadScript } from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const GoogleMapsProvider = ({ children }) => {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      {children}
    </LoadScript>
  );
};

export default GoogleMapsProvider;
