const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post('/analyze-video', upload.single('video'), async (req, res) => {
  try {

    const formData = new FormData();
    formData.append('video', req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    const response = await axios.post(
      'https://extract-frames-i-ffmpeg-kken.onrender.com/upload',
      formData,
      {
        headers: formData.getHeaders(),
        timeout: 60000,
      }
    );

    res.status(response.status).json(response.data);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'An error occurred during video analysis.',
    });
  }
});


module.exports = router;
