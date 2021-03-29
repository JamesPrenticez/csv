let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');

const csvWorker = require('../controllers/csv.controller.js');

// POST api/file/upload
router.post('/upload', upload.any('file'), csvWorker.uploadFile);

// POST api/file/multiple/upload
router.post('/multiple/upload', upload.array('files', 4), csvWorker.uploadMultipleFiles);

// GET api/file/download
router.get('/download', csvWorker.downloadFile);

module.exports = router;