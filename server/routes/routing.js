const express = require("express");

const router = express.Router();

const PostRoutes = require("./Post-route");
const GenerateImage = require("./GenerateImage-route");
const BASE_URL = "/api";

router.use(BASE_URL,PostRoutes);
router.use(BASE_URL,GenerateImage);

module.exports = router;