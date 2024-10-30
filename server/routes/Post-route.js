const express = require("express");
const router = express.Router();
const multer = require("multer");

const { getAllPosts, createPost } = require("../controllers/Posts-controller");
const storage = multer.diskStorage({});
const upload = multer({ storage: storage });

router.get("/allpost", getAllPosts);
router.post("/newpost", upload.single("image"), createPost);

module.exports = router;
