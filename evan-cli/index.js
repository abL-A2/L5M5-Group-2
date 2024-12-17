const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// imported files

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use('/mongo', router);

// default to check connection
app.get("/", (req, res) => {
    res.send("Hello from Node API Server");
  });


// setting up the mongo connection, only offer server if mongo is connected
const port = process.env.PORT || 3000;

async function connectToMongo() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mongoose-practice',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
        console.log('Connected to MongoDB');
        await createAuctionItem();
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
}
};

connectToMongo();