const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
    apikey: process.env.OPENAI_BASE_URL,

});
 const GenerateImage = async (req, res)=>{
    try {
        const {prompt} = req.body;
        const response = await openai.images.generate({
            prompt,
            n:1,
            size: "1024x1024",
            response_format:"b64_json",
        });
        const generateImage  = response.data.data[0].b64_json;
        return res.status(200).json({photo: generateImage});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: error.message });
    }
}

module.exports= {GenerateImage};
