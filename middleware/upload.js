const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET,
  secure: true
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    allowedFormats: ['jpg', 'png', 'jpeg', 'webp'],
    folder: 'sushiman',
    use_filename: true
  }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;