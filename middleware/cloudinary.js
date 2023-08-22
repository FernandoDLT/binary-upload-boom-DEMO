const cloudinary = require("cloudinary").v2;

require("dotenv").config({ path: "./config/.env" });

cloudinary.config({ 
  cloud_name: 'one100devs', 
  api_key: '674222146271512', 
  api_secret: '***************************' 
});

module.exports = cloudinary;