const express = require("express");
const app = express();
const port = 5000;
const connection = require("./conf");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');
const xoauth2 = require('xoauth2');

// const cors = require("cors");
const cors = require("cors");
var http = require('http');
var fs = require('fs');

//filesystem
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);

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

//Récupération des portfolios
app.get("/api/portfolio", (req, res) => {
  connection.query("SELECT * from portfolio", (err, results) => {
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
  connection.query('INSERT INTO customers SET?',formData, (err,results)=>{
    if(err){
      console.log(err);
      res.status(500).send("erreur de récupération des données du formulaire");
    }else{
      console.log('YES ça fonctionne !!!!!!!!!!!!!')
      res.sendStatus(200);
    }
  })
});

  // console.log(req.body.firstname);
  // console.log(req.body.lastname);
  // console.log(req.body.age);
  // console.log(req.body.phone);
  // console.log(req.body.email);
  // console.log(req.body.tattoolocation);
  // console.log(req.body.hauteur);
  // console.log(req.body.largeur);
  // console.log(req.body.budget);
  // console.log(req.body.story)

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

// Création de la méthode de transport de l'email NODEMAILER
// const transporter = nodemailer.createTransport("SMTP",{
//     service: "Gmail",
//     auth: {
//         user: "chadieleman@gmail.com",
//         pass: "userpass"
//     }
// });

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth:{
            xoauth2: xoauth2.createXOAuth2Generator({
            user: 'abc@gmail.com',
            })
    }
  }))


transporter.sendMail({
    from: "test@gmail.com", // Expediteur
    to: "chadieleman@gmail.com", // Destinataires
    subject: "", // Sujet
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world ✔</b>" // html body
}, (error, res) => {
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + res.message);
    }
});

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});