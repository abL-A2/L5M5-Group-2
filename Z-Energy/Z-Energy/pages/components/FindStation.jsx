import React, { useState } from "react";
import styles from "./FindStation.module.css";
import locationIcon from "/locationIcon.png";

function FindStation() {
  // This is for the filter buttons
  const [pageDisplayed, setPageDisplayed] = useState("");

  // setPageDisplayed({component: <FilterService />})
  
    const handleContentClick = (event) => {
      console.log(event.target.id);
      //this works but it's not recommended to store components directly in the state in react
      // if (event.target.id === "service") {
      //   setPageDisplayed({
      //     component: <FilterService />,
      //   });
      // } else if (event.target.id === "price") {
      //   setPageDisplayed({
      //     component: <FilterPrice />,
      //   });
      // } else {
      //   setPageDisplayed({
      //     component: <FilterDistance />,
      //   });
      // }
      // setPage(event.target.id)
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
           <a href=""> <h4>OR USE MY CURRENT LOCATION</h4></a>
          </div>
        </div>
        <div className={styles.filterBtnBox}>
          
        {/* This is for the conditional rendering of the filter section -  */}
        {/* <button className={styles.btn} id="filter-service" onClick={handleContentClick}>
          Filter by service
        </button>
        <button className={styles.btn} id="filter-price" onClick={handleContentClick}>
          Filter by price
        </button>
        <button className={styles.btn} id="filter-distance" onClick={handleContentClick}>
          Filter by distance
        </button> */}
          <button className={styles.filterBtn}>Filter by service</button>
          <button className={styles.filterBtn}>Filter by fuel price</button>
          <button className={styles.filterBtn}>Filter by distance</button>
        </div>
      </div>
      <div className={styles.filtersBox}>
        I am showing the filters 
      {/* This is the section that conditionally shows the different filter screens */}
      {pageDisplayed.component}

      </div>
    </>
  );
}

export default FindStation;
