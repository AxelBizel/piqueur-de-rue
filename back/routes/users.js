const express = require('express');
const router = express.Router();
const connection = require('../conf');

//Récupération des users
router.get("/users", (req, res) => {
    connection.query("SELECT * from users", (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des portfolios");
      } else {
        res.json(results);
      }
    });
  });

module.exports = router;