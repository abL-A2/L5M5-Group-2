import React, { useState } from "react";
import styles from "./FilterServices.module.css";
// import here the three different filter components - distance, price, services

export default function FilterServices() {
  return (
    <>
      <div className={styles.filtersBox}>
        {/* select fuel */}
        <div className={styles.selectionBox}>
          <h3 className={styles.filterTitle}>Select Fuel</h3>
          <div className={styles.btnBox}>
            <button className={styles.filterBtn}>ZX premium</button>
            <button className={styles.filterBtn}>Z91 unleaded</button>
            <button className={styles.filterBtn}>Z diesel</button>
          </div>
        </div>
        {/* select services */}
        <div className={styles.selectionBox}>
          <h3 className={styles.filterTitle}>Select Services</h3>
          <div className={styles.btnBox}>
            <button className={styles.filterBtn}>Car wash</button>
            <button className={styles.filterBtn}>Trailer hire</button>
            <button className={styles.filterBtn}>LPG swap</button>
            <button className={styles.filterBtn}>Engine oil</button>
            <button className={styles.filterBtn}>Tyre pressure</button>
            <button className={styles.filterBtn}>Food & drink</button>
            <button className={styles.filterBtn}>Pay in app</button>
            <button className={styles.filterBtn}>Pay at pump</button>
            <button className={styles.filterBtn}>Pay by late</button>
            <button className={styles.filterBtn}>Wifi</button>
            <button className={styles.filterBtn}>ATM</button>
            <button className={styles.filterBtn}>Toilets</button>
          </div>
        </div>
        {/* Select station type / sort by div */}
        <div className={styles.splitBox}>
          <div className={styles.stationSortBox}>
            {/* Station Type */}
            <h3 className={styles.filterTitle}>Select Station Type</h3>
            <div className={styles.btnBox}>
              <button className={styles.filterBtn}>Service Station</button>
              <button className={styles.filterBtn}>Truck stop</button>
              <button className={styles.filterBtn}>EV charging</button>
            </div>
          </div>
          <div className={styles.stationSortBox}>
            {/* Sort by */}
            <h3 className={styles.filterTitle}>Sort by</h3>
            <div className={styles.btnBox}>
              <button className={styles.filterBtn}>Nearest</button>
              <button className={styles.filterBtn}>Cheapest</button>
              <button className={styles.filterBtn}>Economical</button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
