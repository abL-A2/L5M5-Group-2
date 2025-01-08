import styles from "./MapView.module.css";
import customPin from "/locationPin.png";
import heart from "/heart.png";
import fullHeart from "/fullHeart.png";
import zLogo from "/ZLogo.png";
import pin from "/zPin.png";
import whiteHeart from "/lucide_heart.png";
import downArrow from "/downArrow.png";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function MapView({ stations = [], userLocation }) {
  const [active, setActive] = useState(false);
  const [infoWindow, setInfoWindow] = useState(false);
  const [selectedStation, setSelectedStation] = useState(null);

  // Default to Auckland if no user location
  const position = userLocation || { lat: -36.84, lng: 174.76 };

  const handleClick = () => {
    setActive(!active);
  };

  const handleInfoWindow = (station) => {
    setSelectedStation(station);
    setInfoWindow(!infoWindow);
  };

  return (
    <>
      <APIProvider apiKey="AIzaSyCgpO3-bfWZ8BQwcXWId3XGR-ZpN9Gn3LU">
        <div className={styles.mapBox}>
          <Map
            zoom={13}
            center={position}
            mapId="176a731b39794e85"
            gestureHandling="greedy"
            mapOptions={{
              streetViewControl: true,
              zoomControl: true,
              gestureHandling: "greedy",
              fullscreenControl: true,
              keyboardShortcuts: true,
              scrollwheel: true,
              disableDoubleClickZoom: false,
            }}
          >
            <div className={styles.station1Box}>
              <div className={styles.station1Title}>
                <h3>{stations[0]?.name || "Z Station One"}</h3>
                <h5>{stations[0]?.address || "Location/Area"}</h5>
              </div>
              <div className={styles.station1Info}>
                <h4>Opening hours V</h4>
                <div className={styles.servicesList}>
                  {stations[0]?.services && (
                    <ul>
                      {stations[0].services.map((service) => (
                        <li key={service} className={styles.serviceItem}>
                          {service}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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
                <h3>{stations[1]?.name || "Z Station Two"}</h3>
                <h5>{stations[1]?.address || "Location/Area"}</h5>
              </div>
              <div className={styles.station2Info}>
                <h4>Opening hours V</h4>
                <div className={styles.servicesList}>
                  {stations[1]?.services && (
                    <ul>
                      {stations[1].services.map((service) => (
                        <li key={service} className={styles.serviceItem}>
                          {service}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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
                <h3>{stations[2]?.name || "Z Station Three"}</h3>
                <h5>{stations[2]?.address || "Location/Area"}</h5>
              </div>
              <div className={styles.station3Info}>
                <h4>Opening hours V</h4>
                <div className={styles.servicesList}>
                  {stations[2]?.services && (
                    <ul>
                      {stations[2].services.map((service) => (
                        <li key={service} className={styles.serviceItem}>
                          {service}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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

            {/* Display user's current location */}
            <AdvancedMarker position={position}>
              <img
                src={customPin}
                alt="location pin"
                className={styles.locationPin}
              />
            </AdvancedMarker>

            {/* Display nearby stations */}
            {stations.map((station) => (
              <AdvancedMarker
                key={station.station_id}
                position={{ lat: station.latitude, lng: station.longitude }}
                gmpClickable={true}
                onClick={() => handleInfoWindow(station)}
              >
                {console.log("Station data:", station)}
                <div className={styles.advancedMarker}>
                  <img src={pin} alt="Z Logo Pin" className={styles.zPin} />
                  <div className={styles.circleGroup}>
                    <div className={styles.circle1}>
                      {station.price_per_litre
                        ? `$${station.price_per_litre["ZX Premium"]?.toFixed(
                            3
                          )}`
                        : "-.---"}
                    </div>
                    <div className={styles.circle2}>
                      {station.price_per_litre
                        ? `$${station.price_per_litre["Z91 unleaded"]?.toFixed(
                            3
                          )}`
                        : "-.---"}
                    </div>
                    <div className={styles.circle3}>
                      {station.price_per_litre
                        ? `$${station.price_per_litre["Z Diesel"]?.toFixed(3)}`
                        : "-.---"}
                    </div>
                  </div>
                  <div className={styles.distanceBox}>
                    {/* Calculate distance if needed */}
                    {calculateDistance(position, {
                      lat: station.latitude,
                      lng: station.longitude,
                    })}{" "}
                    KM
                  </div>
                </div>
              </AdvancedMarker>
            ))}

            {/* Display station information boxes */}
            {stations.slice(0, 3).map((station, index) => (
              <div
                key={station.station_id}
                className={styles[`station${index + 1}Box`]}
              >
                <div className={styles[`station${index + 1}Title`]}>
                  <h3>{station.name}</h3>
                  <h5>{station.address}</h5>
                </div>
                <div className={styles[`station${index + 1}Info`]}>
                  <h4>Opening hours V</h4>
                  <div className={styles.servicesList}>
                    {station.services && (
                      <ul>
                        {station.services.map((service) => (
                          <li key={service} className={styles.serviceItem}>
                            {service}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className={styles.stationBtns}>
                  <button className={styles.directionsBtn}>
                    Get directions
                  </button>
                  <img
                    src={`${active ? fullHeart : heart}`}
                    alt=""
                    onClick={handleClick}
                    className={styles.heartImg}
                  />
                </div>
              </div>
            ))}

            {/* Info window for selected station */}
            {infoWindow && selectedStation && (
              <InfoWindow
                position={{
                  lat: selectedStation.latitude,
                  lng: selectedStation.longitude,
                }}
                onCloseClick={() => setInfoWindow(false)}
                className={styles.infoWindow}
              >
                <div className={styles.infoWindowLeft}>
                  <h2>{selectedStation.name}</h2>
                  <p>{selectedStation.address}</p>
                  <h4>Opening hours V</h4>
                  <div className={styles.servicesList}>
                    <ul>
                      {selectedStation.services.map((service) => (
                        <li key={service} className={styles.serviceItem}>
                          {service}
                        </li>
                      ))}
                    </ul>
                    <div className={styles.infoWindowLeftBtns}>
                      <button className={styles.infoWindowBtn}>
                        Get directions
                      </button>
                      <button className={styles.infoWindowBtn}>
                        <img src={whiteHeart} alt="heart" />
                        Save for later
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.infoWindowRight}>
                  <div className={styles.infoWindowRightDay}>
                    {Object.entries(selectedStation.opening_hours).map(
                      ([day]) => (
                        <p key={day}>{`${day}: `}</p>
                      )
                    )}
                  </div>
                  <div className={styles.infoWindowRightHours}>
                    {Object.entries(selectedStation.opening_hours).map(
                      ([day, hours]) => (
                        <p key={day}>{`${hours}`}</p>
                      )
                    )}
                  </div>
                </div>
              </InfoWindow>
            )}
          </Map>
        </div>
      </APIProvider>
    </>
  );
}

// Helper function to calculate distance between two points
function calculateDistance(point1, point2) {
  const R = 6371; // Earth's radius in km
  const dLat = ((point2.lat - point1.lat) * Math.PI) / 180;
  const dLon = ((point2.lng - point1.lng) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((point1.lat * Math.PI) / 180) *
      Math.cos((point2.lat * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance.toFixed(1);
}
