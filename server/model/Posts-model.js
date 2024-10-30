const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    name: String,
    prompt: String,
    image: String,
})

const Post = mongoose.model("post",PostSchema);

module.exports = Post;