import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const center = {
  lat:' YOUR_LATITUDE',
  lng:' YOUR_LONGITUDE',
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      />
    </LoadScript>
  );
};

export default MapComponent;
