import { useState } from 'react';
import FindStation from './FindStation';
import MapView from './MapView';

const StationFinder = () => {
  const [stations, setStations] = useState([]);
  const [userLocation, setUserLocation] = useState({ lat: -36.84, lng: 174.76 }); // Default to Auckland

  return (
    <div>
      <FindStation 
        onStationsFound={setStations} 
        onLocationUpdate={setUserLocation}
      />
      <MapView 
        stations={stations} 
        userLocation={userLocation}
      />
    </div>
  );
};

export default StationFinder;
