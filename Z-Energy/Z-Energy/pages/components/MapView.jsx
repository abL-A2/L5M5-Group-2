import styles from "./MapView.module.css";
import customPin from "/locationPin.png";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";

export default function MapView() {
const position = {lat: -36.84, lng: 174.76};
    // 
    // api key
  return (
   <>
   <APIProvider apiKey="AIzaSyCgpO3-bfWZ8BQwcXWId3XGR-ZpN9Gn3LU">
   <div className={styles.mapBox}>
    <Map zoom={15} center={position} mapId="176a731b39794e85">
        <div className={styles.station1Box}>
            Station 1
        </div>
        <div className={styles.station2Box}>
            Station 2
        </div>
        <div className={styles.station3Box}>
            Station 3
        </div>
        <AdvancedMarker position={position}>
            {/* <Pin /> */}
            <img src={customPin} alt="location pin" className={styles.locationPin}/>
        </AdvancedMarker>
    </Map>
   </div>
   </APIProvider>
   </>
  );
    
};
