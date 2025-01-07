import styles from "./MapView.module.css";
import customPin from "/locationPin.png";
import heart from "/heart.png";
import fullHeart from "/fullHeart.png";
import zLogo from "/ZLogo.png";
import { useState } from "react";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";

export default function MapView() {
const [active, setActive] = useState(false);
const position = {lat: -36.84, lng: 174.76};

const handleClick = () => {
    setActive(!active);
}
    // 
    // api key
  return (
   <>
   <APIProvider apiKey="AIzaSyCgpO3-bfWZ8BQwcXWId3XGR-ZpN9Gn3LU">
   <div className={styles.mapBox}>
    <Map zoom={15} center={position} mapId="176a731b39794e85">
        <div className={styles.station1Box}>
            <div className={styles.station1Title}>
            <h3>Z Station One 
                {/* This will need to be a Z station name from DB */}
            </h3>
            <h5>Location/Area 
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
            <img src={`${active ? fullHeart : heart}`} alt="" onClick={handleClick} className={styles.heartImg}/>
            </div>
        </div>
        <div className={styles.station2Box}>
        <div className={styles.station2Title}>
            <h3>Z Station Two
                {/* This will need to be a Z station name from DB */}
            </h3>
            <h5>Location/Area 
                {/* Also drawn from DB */}
            </h5>
            </div>
            <div className={styles.station2Info}>
                {/* All info here is from DB */}
                <h4>Opening hours V</h4>
                <ol>1</ol>
                <ol>2</ol>
                <ol>3</ol>
            </div>
            <div className={styles.stationBtns}>
            <button className={styles.directionsBtn}>Get directions</button>
            <img src={`${active ? fullHeart : heart}`} alt="" onClick={handleClick} className={styles.heartImg}/>
            </div>
        </div>
        <div className={styles.station3Box}>
        <div className={styles.station3Title}>
            <h3>Z Station Three 
                {/* This will need to be a Z station name from DB */}
            </h3>
            <h5>Location/Area 
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
            <img src={`${active ? fullHeart : heart}`} alt="" onClick={handleClick} className={styles.heartImg}/>
            </div>
        </div>
        {/* <AdvancedMarker position={position}>
            <img src={customPin} alt="location pin" className={styles.locationPin}/>
        </AdvancedMarker> */}
        <AdvancedMarker position={position}>
            <Pin background="rgb(44, 37, 155, 0.80)" borderColor={"none"} glyph={zLogo}/>
        </AdvancedMarker>
    </Map>
   </div>
   </APIProvider>
   </>
  );
    
};
