const express = require('express');
const router = express.Router();
const connection = require('../conf');

//Récupération des datas portfolios

router.get("/portfolio", (req, res) => {
    connection.query("SELECT * from portfolio", (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des portfolios");
      } else {
        res.json(results);
      }
    });
  });

router.post('/api/addportfolio', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO portfolio SET ?', formData, (err, results) => {
    if (err) {
    console.log(err);
    res.status(500).send("Error inserting portfolio");
    } else {
      console.log(req.body)
    res.sendStatus(200);
    }
    });
  });


module.exports = router;