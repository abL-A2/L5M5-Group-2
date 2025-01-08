import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirection to Directions page
import styles from "./FindStation.module.css";
import locationIcon from "/locationIcon.png";
import FilterServices from "../components/FilterServices";

function FindStation() {
  // This is for the filter buttons
  const [pageDisplayed, setPageDisplayed] = useState("");

  // Navigation hook for redirection
  const navigate = useNavigate();

  // Mock data for stations
  const stations = [
    {
      id: 1,
      name: "Z Station One",
      address: "34 Panehe Lane, Auckland",
      distance: "3 km",
      time: "15 min",
    },
    {
      id: 2,
      name: "Z Station Two",
      address: "56 High Street, Christchurch",
      distance: "5 km",
      time: "20 min",
    },
  ];

  // Handle redirection to Directions page
  const handleStationSelect = (station) => {
    navigate("/directions", { state: { station } });
  };

  return (
    <>
      <div className={styles.findStnBox}>
        <div className={styles.mainBox}>
          {/* This has the find station, search box, and use location divs */}
          <div className={styles.bigText}>
            <h1>Find a station</h1>
          </div>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Please enter a location / Station / Truck Stop / Airtop"
              className={styles.inputBox}
            />
          </div>
          <div className={styles.locationDiv}>
            <img src={locationIcon} alt="location icon" />
            <a href="">
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

        {/* Display list of stations */}
        <div className={styles.stationsList}>
          {stations.map((station) => (
            <div key={station.id} className={styles.stationCard}>
              <h3>{station.name}</h3>
              <p>{station.address}</p>
              <p>Distance: {station.distance}</p>
              <p>Time: {station.time}</p>
              <button
                className={styles.selectBtn}
                onClick={() => handleStationSelect(station)}
              >
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FindStation;
