const express = require('express');
const router = express.Router();
const images = require('./images');
const users = require('./users');
const portfolios = require('./portfolios');

router.use('/images', images);
router.use('/users', users);
router.use('/portfolios', users);

//Server
router.get("/", (request, response) => {
    response.send("Bienvenue sur Express");
  });
  

module.exports = router;
