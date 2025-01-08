const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// imported files
const router = require("./route/route");
const createAuctionItem = require("./items");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/mongo", router);

// default to check connection
app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

// setting up the mongo connection, only offer server if mongo is connected
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
      .listCollections({ name: "auctionitems" })
      .toArray();
    //   if the collection exists, drop
    if (collections.length > 0) {
      console.log("Dropping existing auctionitems collection");
      await db.dropCollection("auctionitems");
    }
    await createAuctionItem();
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongo();
