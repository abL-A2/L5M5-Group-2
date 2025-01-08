const express = require('express');
const router = express.Router();
const { addressCoord, getDirections } = require("./controller");

// Convert address into coordinates
router.get("/address", addressCoord);

// Get directions for the selected station
router.get("/directions", getDirections);

module.exports = router;
