import styles from "./MapView.module.css";
import customPin from "/locationPin.png";
import heart from "/heart.png";
import fullHeart from "/fullHeart.png";
import zLogo from "/ZLogo.png";
import pin from "/zPin.png";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function MapView() {
  const [active, setActive] = useState(false);
  const [infoWindow, setInfoWindow] = useState(false);
  const position = { lat: -36.84, lng: 174.76 };

  const handleClick = () => {
    setActive(!active);
  };

  const handleInfoWindow = () => {
    setInfoWindow(!infoWindow);
    console.log("Clicked!");
    // if (infoWindow === true) {
    //   InfoWindow(open());
    // } else {
    //     InfoWindow(close());
    // }
  };
  //
  // api key
  return (
    <>
      <APIProvider apiKey="AIzaSyCgpO3-bfWZ8BQwcXWId3XGR-ZpN9Gn3LU">
        <div className={styles.mapBox}>
          <Map zoom={15} center={position} mapId="176a731b39794e85">
            <div className={styles.station1Box}>
              <div className={styles.station1Title}>
                <h3>
                  Z Station One
                  {/* This will need to be a Z station name from DB */}
                </h3>
                <h5>
                  Location/Area
                  {/* Also drawn from DB */}
                </h5>
              </div>
              <div className={styles.station1Info}>
                {/* All info here is from DB */}
                <h4>Opening hours V</h4>
                <ol>1</ol>
                <ol>2</ol>
                <ol>3</ol>
              </div>
              <div className={styles.stationBtns}>
                <button className={styles.directionsBtn}>Get directions</button>
                <img
                  src={`${active ? fullHeart : heart}`}
                  alt=""
                  onClick={handleClick}
                  className={styles.heartImg}
                />
              </div>
            </div>
            <div className={styles.station2Box}>
              <div className={styles.station2Title}>
                <h3>
                  Z Station Two
                  {/* This will need to be a Z station name from DB */}
                </h3>
                <h5>
                  Location/Area
                  {/* Also drawn from DB */}
                </h5>
              </div>
              <div className={styles.station2Info}>
                {/* All info here is from DB */}
                <h4>Opening hours V</h4>
                <ol>1</ol>
                <ol></ol>
                <ol>3</ol>
              </div>
              <div className={styles.stationBtns}>
                <button className={styles.directionsBtn}>Get directions</button>
                <img
                  src={`${active ? fullHeart : heart}`}
                  alt=""
                  onClick={handleClick}
                  className={styles.heartImg}
                />
              </div>
            </div>
            <div className={styles.station3Box}>
              <div className={styles.station3Title}>
                <h3>
                  Z Station Three
                  {/* This will need to be a Z station name from DB */}
                </h3>
                <h5>
                  Location/Area
                  {/* Also drawn from DB */}
                </h5>
              </div>
              <div className={styles.station3Info}>
                {/* All info here is from DB */}
                <h4>Opening hours V</h4>
                <ol>1</ol>
                <ol>2</ol>
                <ol>3</ol>
              </div>
              <div className={styles.stationBtns}>
                <button className={styles.directionsBtn}>Get directions</button>
                <img
                  src={`${active ? fullHeart : heart}`}
                  alt=""
                  onClick={handleClick}
                  className={styles.heartImg}
                />
              </div>
            </div>

            {/* This is the marker to show the users location */}
            <AdvancedMarker position={position}>
              <img
                src={customPin}
                alt="location pin"
                className={styles.locationPin}
              />
            </AdvancedMarker>

            {/* This marker will be used for the 3 closest stations, potentially use a map function over 
        API response / DB info */}
            {/* Position will be drawn from info from db */}
            <AdvancedMarker
              position={position}
              gmpClickable={true}
              onClick={handleInfoWindow}
            >
              <div className={styles.advancedMarker}>
                <img src={pin} alt="Z Logo Pin" className={styles.zPin} />

                <div className={styles.circleGroup}>
                  <div className={styles.circle1}></div>
                  <div className={styles.circle2}></div>
                  <div className={styles.circle3}></div>
                  <div className={styles.circle4}></div>
                </div>
                <div className={styles.distanceBox}>xyz KM</div>
              </div>
            </AdvancedMarker>
            {/* info window attached to marker */}
            {infoWindow && (
              <InfoWindow
                position={position}
                onCloseClick={() => setInfoWindow(false)} // Close InfoWindow on close button click
              >
                <div>
                  <h2>Custom InfoWindow</h2>
                  <p>This is a custom InfoWindow content.</p>
                </div>
              </InfoWindow>
            )}
          </Map>
        </div>
      </APIProvider>
    </>
  );
}
