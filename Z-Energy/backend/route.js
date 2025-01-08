const express = require('express');
const router = express.Router();
const { addressCoord } = require("./controller")

// turn address into coordinates
router.get("/address", addressCoord);

module.exports = router;