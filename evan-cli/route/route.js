const express = require('express');
const router = express.Router();
const { getItems, findItems } = require("../controller/controller")

// path to return all items
router.get("/items", getItems);

// path to search by title
router.get("/find/:title", findItems);

module.exports = router;