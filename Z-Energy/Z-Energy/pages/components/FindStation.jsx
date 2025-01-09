import { useState } from "react";
import styles from "./FindStation.module.css";
import locationIcon from "/locationIcon.png";
import FilterServices from "../components/FilterServices";
import arrowRight from "/arrowRight.png";

function FindStation({ onStationsFound, onLocationUpdate }) {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const geocodeAddress = async (addressToGeocode) => {
    try {
      console.log("Geocoding address:", addressToGeocode);
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          addressToGeocode
        )}&key=AIzaSyCgpO3-bfWZ8BQwcXWId3XGR-ZpN9Gn3LU`
      );
      const data = await response.json();
      console.log("Geocoding response:", data);
      if (data.results[0]) {
        const { lat, lng } = data.results[0].geometry.location;
        onLocationUpdate({ lat, lng });
        return data.results[0].formatted_address;
      }
      return addressToGeocode;
    } catch (error) {
      console.error("Error geocoding address:", error);
      return addressToGeocode;
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("Searching for address:", address);
    setLoading(true);
    
    try {
      // First geocode the address to get coordinates
      const formattedAddress = await geocodeAddress(address);
      console.log("Geocoded address:", formattedAddress);
      setAddress(formattedAddress);

      // Then fetch nearby stations
      const response = await fetch(
        `http://localhost:3000/address?address=${encodeURIComponent(formattedAddress)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const stations = await response.json();
      console.log("Found stations:", stations);
      onStationsFound(stations);
    } catch (error) {
      console.error("Error in handleSearch:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationClick = async (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Got current location:", { latitude, longitude });
        onLocationUpdate({ lat: latitude, lng: longitude });

        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCgpO3-bfWZ8BQwcXWId3XGR-ZpN9Gn3LU`
          );
          const data = await response.json();
          if (data.results[0]) {
            const formattedAddress = data.results[0].formatted_address;
            console.log("Reverse geocoded address:", formattedAddress);
            setAddress(formattedAddress);
            
            // Create a new submit event
            const submitEvent = new Event("submit", { cancelable: true });
            handleSearch(submitEvent);
          }
        } catch (error) {
          console.error("Error getting location:", error);
        }
      });
    }
  };

  return (
    <>
      <div className={styles.findStnBox}>
        <div className={styles.mainBox}>
          {/* This has the find station, search box, and use location divs */}
        <div className={styles.bigText}>
          <h1>Find a station</h1>
        </div>
        <form onSubmit={handleSearch} className={styles.searchBox}>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Please enter a location / Station / Truck Stop / Airtop"
            className={styles.inputBox}
          />
          <button
            type="submit"
            className={styles.searchBtn}
            disabled={loading}
          >
            <img src={arrowRight} alt="arrow" />
          </button>
        </form>
        <div className={styles.locationDiv}>
          <img src={locationIcon} alt="location icon" />
          <a href="#" onClick={handleLocationClick}>
            <h4>OR USE MY CURRENT LOCATION</h4>
          </a>
              </div>
        </div>
        <div className={styles.filterBtnBox}>
          <button className={styles.filterBtn}>Filter by service</button>
          <button className={styles.filterBtn}>Filter by fuel price</button>
          <button className={styles.filterBtn}>Filter by distance</button>
        </div>
      </div>
      <div className={styles.filtersBox}>
        <FilterServices />
      </div>
    </>
  );
}

export default FindStation;
