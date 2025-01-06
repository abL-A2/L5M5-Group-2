// express, independent of CLI:

require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;
const mongoDB = process.env.DATABASE_NAME;
const URI = `${mongoURI}/${mongoDB}`;

console.log("Connecting to:", URI);

mongoose
  .connect(URI)
  .then(() => console.log(`connect OK`))
  .catch((e) => console.error(`connect error:`, e));
