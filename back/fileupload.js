//-----------------------------------//
//           FILE UPLOAD             //
//-----------------------------------//

// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/ //

const multer = require('multer')  /* TEST UPLOAD FILE */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'img')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
  })
  
  const upload = multer({ storage: storage }).single('file')

module.exports.storage = storage;