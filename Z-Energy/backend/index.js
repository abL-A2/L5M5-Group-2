const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
// const fetch = (await import("node-fetch")).default;
const router = require("./route.js");
const createStationList = require("./stations.js");
const Station = require("./stationSchema.js");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/", router);

app.get("/", (req, res) => {
  res.send("You have connected to your Z server");
});

const addressCoord = async (address) => {
  try {
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_API_KEY}`
    );
    const data = await response.json();
    if (data.status === "OK") {
      // console.log(data.results[0].geometry.location);
      const { lat, lng } = data.results[0].geometry.location;
      return { lat, lng }; // Return the coordinates
    }
  } catch (err) {
    console.error("Geocoding Error: ", err);
  }
};

const nearbyStations = async (lat, lng) => {
  const radius = 10000;
  const type = "gas_station";
  const name = "Z Energy";
  try {
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&keyword=Z%20Energy&key=${process.env.GOOGLE_API_KEY}
`
    );
    const data = await response.json();
    // console.log(`Data:`, data)
    if (data.status === "OK") {
      return data.results.slice(0, 3); // Get the first 3 results
    }
  } catch (err) {
    console.error("Geocoding Error: ", err);
  }
};

// regex for name of station
const normalizeName = (name) => {
  // Remove common prefixes and suffixes
  return name
    .replace(/^Z\s*-?\s*/, '') // Remove 'Z -' or 'Z' from start
    .replace(/\s*-?\s*Service\s+Station$/, '') // Remove '- Service Station' from end
    .replace(/\s+/g, ' ') // Normalize spaces
    .trim()
    .toLowerCase();
};

// Async function to handle address and stations
const handleRequest = async (address) => {
  try {
    const { lat, lng } = await addressCoord(address);
    console.log(`Coordinates: Latitude: ${lat}, Longitude: ${lng}`);

    const stations = await nearbyStations(lat, lng);
    if (!stations || stations.length === 0) {
      console.log("No nearby stations found.");
      return [];
    }
    console.log("Nearby Z Energy Stations: ", stations);

    // Normalize Google Maps station names
    const stationNames = stations.map((station) => normalizeName(station.name));
    console.log("Normalised Station names API", stationNames);

    // Get all stations from MongoDB 
    const allDbStations = await Station.find({});
    
    // Filter MongoDB stations based on normalized names and remove duplicates
    const matchedStations = allDbStations.filter(dbStation => 
      stationNames.some(apiName => 
        normalizeName(dbStation.name).includes(apiName) || 
        apiName.includes(normalizeName(dbStation.name))
      )
    );

    // Remove duplicates by station_id
    const uniqueStations = Array.from(
      matchedStations.reduce((map, station) => {
        if (!map.has(station.station_id)) {
          map.set(station.station_id, station);
        }
        return map;
      }, new Map()).values()
    );

    console.log("Unique stations from MongoDB: ", uniqueStations);
    return uniqueStations;
  } catch (err) {
    console.error("Error in handling request: ", err);
    return [];
  }
};
 
//   // Example address to test
handleRequest("34 Panehe Lane, Auckland");

//     // Express.js example for a GET request to fetch station data from MongoDB
app.get("/stations", async (req, res) => {
  const address = req.query.address; // Get the address from the query
  try {
    // const { lat, lng } = await addressCoord(address);
    // const stations = await nearbyStations(lat, lng);
    const dbStations = await handleRequest(address); // Find all stations
    res.json(dbStations); // Return the data as a JSON response
    console.log(dbStations);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve stations" });
  }
});

app.get("/address", async (req, res) => {
  try {
    const address = req.query.address;
    if (!address) {
      return res.status(400).json({ error: "Address is required" });
    }

    const stations = await handleRequest(address);
    res.json(stations);
  } catch (error) {
    console.error("Error handling address request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
 
const distanceAndDuration = async (address) => {
  try {
    destinationLat, destinationLng;
    const { originalLat, originalLng } = await addressCoord(address);
    // const {destinationLat, destinationLng} = await nearbyStations(originalLat, originalLng);

    const response =
      await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json
  ?destinations=${destinationLat},${destinationLng}
  &origins=${originalLat},${originalLng}
  &units=metric
  &key=${process.env.GOOGLE_API_KEY}`);
  } catch (err) {
    console.error("Error in handling distance request: ", err);
  }
};

const port = process.env.PORT || 3000;

async function connectToMongo() {
  try {
    await mongoose.connect("mongodb://localhost:27017/m5", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    // change this so if the db exists, do not create it / drop and create
    // Drop the collection if it exists
    // stating what db is
    const db = mongoose.connection.db;
    const collections = await db
      .listCollections({ name: "stationSchema" })
      .toArray();
    //   if the collection exists, drop
    if (collections.length > 0) {
      console.log("Collection exists");
      //   await db.dropCollection("auctionitems");
    } else {
      await createStationList();
    }
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongo();
