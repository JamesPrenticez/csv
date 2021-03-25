let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');
const path = require('path');
const __basedir = path.resolve();


const csvWorker = require('../controllers/csv.controller.js');

let pathway = __basedir + '\\server\\public';
console.log(pathway)

router.get('/', (req,res) => {
    console.log("__basedir" + __basedir);
    res.sendFile(pathway + "\\index.html");
});

router.post('/api/file/upload', upload.single("file"), csvWorker.uploadFile);
router.post('/api/file/multiple/upload', upload.array('files', 4), csvWorker.uploadMultipleFiles);

router.get('/api/file', csvWorker.downloadFile);

module.exports = router;