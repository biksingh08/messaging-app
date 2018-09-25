const express = require("express");
const router = express.Router();

const roomsController = require("../controllers/roomsController")

router.get("/rooms", roomsController.index);

module.exports = router;
