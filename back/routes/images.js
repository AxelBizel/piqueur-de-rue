const express = require('express');
const router = express.Router();
const connection = require('../conf');

//Récupération des images
router.get("/images", (req, res) => {
    connection.query("SELECT * from images", (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des portfolios");
      } else {
        res.json(results);
      }
    });
  });

module.exports = router;