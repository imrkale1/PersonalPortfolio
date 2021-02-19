const router = require('express').Router();
const File = require('../models/file');
console.log("Outside")
router.get('/:uuid', async (req, res) => {
    // Extract link and get file from storage send download stream 
    const file = await File.findOne({ uuid: req.params.uuid });
    console.log("Inside")
    console.log(file)
    // Link expired
    if(!file) {
         return res.render('download', { error: 'Link has been expired.'});
    } 

    
    const filePath = `${__dirname}/../${file.path}`;
    console.log(filePath)
    res.download(filePath);
 });
 
 
 module.exports = router;