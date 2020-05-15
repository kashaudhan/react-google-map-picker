import React, { useState } from 'react'

import MapPicker from 'react-google-map-picker'

const App = () => {
  const [lat, setLat] = useState(22);
  const [lng, setLng] = useState(99);

  function handleChangeLocation (lat, lng){
    setLat(lat);
    setLng(lng);
  }

  return (
    <>
  <label>Latitute:</label><input type='text' value={lat} disabled/>
  <label>Longitute:</label><input type='text' value={lng} disabled/>
  <MapPicker defaultLocation={{lat: lat, lng: lng}} 
    style={{height:'700px'}}
    onChange={handleChangeLocation} 
    apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'/>
  </>
  );
}

export default App