const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./route.js");
const createStationList = require("./stations.js");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/", router);

app.get("/", (req, res) => {
  res.send("You have connected to your Z server");
});

// app.get("/address",)
const addressCoord = async (address) => {
  try {
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
        const response = await fetch(
            // `https://maps.googleapis.com/maps/api/place/nearbysearch/json?latlng=${lat},${lng}&radius=${radius}&type${type}&keyword=${encodeURIComponent(
            //     name
            // )}&key=${process.env.GOOGLE_API_KEY}`
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=10000&type=${type}&keyword=Z%20Energy&key=${process.env.GOOGLE_API_KEY}
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

// Async function to handle address and stations
const handleRequest = async (address) => {
    try {
      const { lat, lng } = await addressCoord(address); // Await the result of addressCoord
      console.log(`Coordinates: Latitude: ${lat}, Longitude: ${lng}`); // Now it logs the resolved value
  
      const stations = await nearbyStations(lat, lng); // Await the result of nearbyStations
      console.log("Nearby Z Energy Stations: ", stations); // Logs the nearby stations
    } catch (err) {
      console.error("Error in handling request: ", err);
    }
  };
  
  // Example address to test
  handleRequest("34 Panehe Lane, Auckland");

const distanceAndDuration = async (originalLat, originalLng, destinationLat, destinationLng) => {
    try{
        const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json
  ?destinations=${destinationLat},${destinationLng}
  &origins=${originalLat},${originalLng}
  &units=metric
  &key=${process.env.GOOGLE_API_KEY}`);
    } catch (err) {
        console.error("Error in handling distance request: ", err);
    }
}

  // Express.js example for a GET request to fetch station data from MongoDB
// app.get('/stations', async (req, res) => {
//     try {
//       const stations = await Station.find({});  // Find all stations
//       res.json(stations);  // Return the data as a JSON response
//     } catch (err) {
//       res.status(500).json({ error: 'Failed to retrieve stations' });
//     }
//   });

// Express.js example for a POST request to insert a new station into MongoDB
// app.post('/stations', async (req, res) => {
//     try {
//       const { name, address, coordinates, fuelCost, services } = req.body;
  
//       // Create a new station document
//       const newStation = new Station({
//         name,
//         address,
//         location: { type: 'Point', coordinates },
//         fuelCost,
//         services,
//       });
  
//       await newStation.save();  // Save to MongoDB
//       res.status(201).json({ message: 'Station added successfully' });
//     } catch (err) {
//       res.status(500).json({ error: 'Failed to add station' });
//     }
//   });
  
  


const port = process.env.PORT || 3000;

async function connectToMongo(){
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
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });