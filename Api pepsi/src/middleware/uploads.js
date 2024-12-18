const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.array('files'), (req, res) => {
  res.status(200).json({ message: 'Files uploaded successfully' });
});

router.get('/download/:fileId', (req, res) => {
  const fileId = req.params.fileId;
  const filePath = path.join(__dirname, '..', 'uploads', fileId);

  if (fs.existsSync(filePath)) {
    res.download(filePath);
  } else {
    res.status(404).json({ message: 'File not found' });
  }
});

module.exports = router;
