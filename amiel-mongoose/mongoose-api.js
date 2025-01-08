// config
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

const mongoURI = process.env.MONGO_URI;
const mongoDB = process.env.DATABASE_NAME;
const PORT = process.env.PORT || 3000;
const URI = `${mongoURI}/${mongoDB}`;

// ! ⚠️ for testing:
if (process.env.NODE_ENV !== "test") {
  // comment this line out if not testing
  app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
  });
} // comment this line out if not testing

// connecting to mongod
mongoose
  .connect(URI)
  .then(() =>
    console.log(`
    Connected OK to: ${URI}\n
    > Structure queries as follows:\n
       /api/items?<queryType>=query&...\n
    > Available query types:\n
       - title=String: Filter by item title (case-insensitive partial match)
       - min_price=Number: Filter by minimum start price (start_price >= value)
       - max_price=Number: Filter by maximum start price (start_price <= value)
       - min_reserve=Number: Filter by minimum reserve price (reserve_price >= value)
       - max_reserve=Number: Filter by maximum reserve price (reserve_price <= value)\n
    > Combine min/max for range filters. Separate queries with '&'.
  `)
  )
  .catch((e) => console.error("Connect error:", e));

// establishing the schema's document/field format
const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  start_price: { type: Number, required: true },
  reserve_price: { type: Number, required: true },
});

const Item = mongoose.model("Item", itemSchema);

app.get("/api/items", async (req, res) => {
  try {
    // queries: title (name of item), start price queries (min/max), and reserve price queries (min/max)
    const { title, min_price, max_price, min_reserve, max_reserve } = req.query;

    const query = {};

    // if items?title= : finds documents with titles that partially match query string
    // ignore case using JS's RegExp(parameter, "i"), "i" making match case-agnostic
    if (title) query.title = new RegExp(title, "i");

    // if items?min_price?= : finds documents where start_price is >= ($gte) queried value
    if (min_price) query.start_price = { $gte: parseFloat(min_price) };

    // if items?max_price= : finds documents where start_price is <= ($lte) queried value
    // uses spread op {...} to allow combining min & max_price query, e.g., /api/items?min_price=100&max_price=200, without overwriting min_price query; becomes a range filter
    if (max_price) query.start_price = { ...query.start_price, $lte: parseFloat(max_price) };

    // if items?min_reserve= : finds documents where reserve_price is >= ($gte) the queried value
    if (min_reserve) query.reserve_price = { $gte: parseFloat(min_reserve) };

    // if items?max_reserve= : finds documents where reserve_price is <= ($lte) queried value
    // uses spread op {...} to allow combining min & max_reserve query, e.g., /api/items?min_reserve=100&max_reserve=200, without overwriting min_reserve query; becomes a range filter
    if (max_reserve) query.reserve_price = { ...query.reserve_price, $lte: parseFloat(max_reserve) };

    const items = await Item.find(query);
    res.json(items);
  } catch (e) {
    console.error("Error fetching items:", e);
    res.status(500).send("Internal server error");
  }
});

// ! ⚠️ exclusively for testing
module.exports = app;
