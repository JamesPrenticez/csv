let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');

const csvWorker = require('../controllers/csv.controller.js');

let path = __basedir + '/public';

router.get('/', (req,res) => {
    console.log("__basedir" + __basedir);
    res.sendFile(path + "/index.html");
});

router.post('/api/file/upload', upload.any('file'), csvWorker.uploadFile);
router.post('/api/file/multiple/upload', upload.array('files', 4), csvWorker.uploadMultipleFiles);

router.get('/api/file', csvWorker.downloadFile);

module.exports = router;