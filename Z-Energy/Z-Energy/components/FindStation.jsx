import styles from "./FindStation.module.css";
import locationIcon from "/locationIcon.png";

function FindStation() {
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
          {/* three tabs along the bottom */}
          <button className={styles.filterBtn}>Filter by service</button>
          <button className={styles.filterBtn}>Filter by fuel price</button>
          <button className={styles.filterBtn}>Filter by distance</button>
        </div>
      </div>
    </>
  );
}

export default FindStation;
