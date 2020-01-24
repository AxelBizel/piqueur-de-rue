//-----------------------------------//
//           FILE UPLOAD             //
//-----------------------------------//

// https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/ //
const fs = require("fs");
const multer = require("multer");

const avatarStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    let id = req.params.id;
    let path = `img/${id}`;
    if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });
    cb(null, path);
  },
  filename: function(req, file, cb) {
    cb(null, "portrait.jpg");
  }
});


const imagesStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    let id = req.params.id;
    let path = `img/${id}`;
    if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });
    cb(null, path);
  },
  filename: function(req, file, cb) {
    cb(null, file.filename);
  }
});


module.exports.avatarStorage = avatarStorage;
module.exports.imagesStorage = imagesStorage;
