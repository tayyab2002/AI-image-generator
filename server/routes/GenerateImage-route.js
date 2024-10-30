const express = require("express");
const { GenerateImage } = require("../controllers/GenerateImage");
const router = express.Router();

router.get("/generateimage",GenerateImage)

module.exports = router;
