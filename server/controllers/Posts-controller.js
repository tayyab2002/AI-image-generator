const Post = require("../model/Posts-model");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({ sucess: true, data: posts });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Something is wrong");
  }
};

const createPost = async (req, res, next) => {
  try {
    const { name, prompt } = req.body;
    const postUrl = await cloudinary.uploader.upload(req.file.path,{
        resource_type: "image"
      });
    const newPost = await Post.create({
      name,
      prompt,
      image: postUrl?.secure_url,
    });
    return res.status(200).json({ sucess: true, data: newPost });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Something is wrong posting");
  }
};

module.exports = { getAllPosts, createPost };
