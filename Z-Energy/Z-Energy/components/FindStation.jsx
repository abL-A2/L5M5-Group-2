import styles from './FindStation.module.css';

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
        <input type="text" placeholder='Please enter a location / Station / Truck Stop / Airtop' className={styles.inputBox} />
        </div>
    <div>location</div>
    </div>
    <div>
        {/* three tabs along the bottom */}
        tabs
    </div>
    </div>
    </>
  );
}

export default FindStation;