const express = require("express");
const app = express();
const port = 5000;
const connection = require("./conf");
const bodyParser = require("body-parser");
const sendMail = require('./mail')
const cors = require("cors");
var http = require('http');
var fs = require('fs');

//filesystem
// http.createServer(function (req, res) {
//   fs.readFile('demofile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);

// bodyParser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// //Cors
app.use(cors())

// ROUTES

//Récupération des users
app.get("/api/users", (req, res) => {
  connection.query("SELECT * from users", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des portfolios");
    } else {
      res.json(results);
    }
  });
});

//Récupération des portfolios team
app.get("/api/portfolio/team", (req, res) => {
  connection.query("SELECT * from portfolio WHERE type='team'", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des portfolios");
    } else {
      res.json(results);
    }
  });
});

//Récupération des portfolios guests
app.get("/api/portfolio/guest", (req, res) => {
  connection.query("SELECT * from portfolio WHERE type='guest'", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des portfolios");
    } else {
      res.json(results);
    }
  });
});

//Récupération des photos homepage portfolios
app.get("/api/portfolio/:id/{name}", (req, res) => {
  connection.query("SELECT * from portfolio", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des portfolios");
    } else {
      res.json(results);
    }
  });
});

//Récupération des images
app.get("/api/images", (req, res) => {
  connection.query("SELECT * from images", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des portfolios");
    } else {
      res.json(results);
    }
  });
});

// Récupération des données du formulaire de contactTatoueur
app.get("/api/customers", (req, res) => {
  connection.query("SELECT * from customers", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des customers");
    } else {
      res.json(results);
    }
  });
});


app.post('/api/customers', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO customers SET?', formData, async (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("erreur de récupération des données du formulaire");
    } else {
      console.log('YES ça fonctionne !!!!!!!!!!!!!')
      try {
        //je mets dans mysql
        const sent = await sendMail(req.body)
        if (sent) {
          res.send({ message: 'email envoyé avec succès' })
        }
      } catch (error) {
        console.log("gg1", error)
        // throw new Error(error.message)
        res.status(500).send("erreur d'envoie du mail");

      }
    }
  })
});

// Route pour l'envoi de Mails avec sengrid : --------------------------------------------

app.post('/project', async (req, res) => {
  try {
    //je mets dans mysql
    const sent = await sendMail(req.body)
    if (sent) {
      res.send({ message: 'email envoyé avec succès' })
    }
  } catch (error) {
    throw new Error(error.message)
  }
})

//Server
app.get("/", (request, response) => {
  response.send("Bienvenue sur Express de piqueur de rue");
});

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${port}`);
});
