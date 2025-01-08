import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Directions = () => {
  const location = useLocation();
  const { station } = location.state; // Selected station details
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    const fetchDirections = async () => {
      try {
        const userLocation = await getUserLocation(); // Get the user's current location
        const response = await fetch(
          `http://localhost:3000/api/directions?origin=${userLocation.lat},${userLocation.lng}&destination=${station.latitude},${station.longitude}`
        );
        const data = await response.json();
        setDirections(data);
      } catch (error) {
        console.error('Error fetching directions:', error);
      }
    };

    fetchDirections();
  }, [station]);

  const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => reject(error)
      );
    });
  };

  if (!directions) {
    return <p>Loading directions...</p>;
  }

  return (
    <div>
      <h1>Selected Z Station</h1>
      <p>You are redirected to Google Maps for directions.</p>
      <div>
        <p>Route Length: {directions.distance}</p>
        <p>Estimated Arrival: {directions.duration}</p>
      </div>
      <div id="map">
        {/* Map will be displayed here */}
      </div>
    </div>
  );
};

export default Directions;