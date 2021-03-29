let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');

const csvWorker = require('../controllers/csv.controller.js');

// POST api/file/upload
router.post('/api/file/upload', upload.any('file'), csvWorker.uploadFile);

// POST api/file/multiple/upload
router.post('/api/file/multiple/upload', upload.array('files', 4), csvWorker.uploadMultipleFiles);

// GET api/file/download
router.get('/api/file/download', csvWorker.downloadFile);

module.exports = router;