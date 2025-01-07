import React, { useState } from "react";
import styles from "./FilterSection.module.css";
// import here the three different filter components - distance, price, services

export default function FilterSection() {
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
      <div className={styles.filtersBox}>
        <h1>Section showing filters!</h1>

        {/* This should be applied to the findstation page I think */}
        {/* <button className={styles.btn} id="filter-service" onClick={handleContentClick}>
          Filter by service
        </button>
        <button className={styles.btn} id="filter-price" onClick={handleContentClick}>
          Filter by price
        </button>
        <button className={styles.btn} id="filter-distance" onClick={handleContentClick}>
          Filter by distance
        </button> */}
        <div>{pageDisplayed.component}</div>
        {/*
        <FilterService />
        <FilterPrice />
        <FilterDistance /> */}
      </div>
      ;
    </>
  );
}
