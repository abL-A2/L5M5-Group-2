import React, { useState } from "react";
import styles from "./FilterSection.module.css";
// import here the three different filter components - distance, price, services

export default function FilterSection() {


  return (
    <>
      <div className={styles.filtersBox}>
        <h1>Section showing filters!</h1>

        <div></div>
        {/*
        <FilterService />
        <FilterPrice />
        <FilterDistance /> */}
      </div>
      ;
    </>
  );
}
