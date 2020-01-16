const express = require("express");
const app = express();
const port = 5000;
const connection = require("./conf");
const bodyParser = require("body-parser");
const path = require('path');
const session = require('express-session');
const jwt = require('jsonwebtoken')
const cors = require("cors");
const sendMail = require('./mail')
const http = require('http');
const fs = require('fs');

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
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json())

app.use(cors())

//ROUTES : Partie Authentification 

app.get('/', function (request, response) {
  const user = {}
  response.json(user)
});


app.post('/login', function (request, response) {
  console.log(request.body)
  const login = request.body.login;
  const password = request.body.password;
  if (login && password) {
    connection.query('SELECT * FROM users WHERE login = ? AND password = ?', [login, password], function (error, results, fields) {
      console.log("result", results.length)
      if (results.length > 0) {
        request.session.loggedin = true;
        request.session.login = login;
        jwt.sign({
          user: {
            id: results[0].id,
            login: results[0].login,
            portfolio_id: results[0].portfolio_id
          }
        },
          'toto', { expiresIn: '15sec' },
          (err, token) => {
            console.log(err, token)
            response.json({ token })
          })
      } else {
        response.send('Incorrect Username and/or Password!');
      }
    });
  } else {
    response.send('Please enter Username and Password!');
  }
});

//Verfication du token
function verifyToken (req,res,next) {
  console.log (req.headers.authorizaton)
  const token = req.headers.authorization.split ('') [1]
  jwt.verify (token,'toto', (err,payload) => {
    if(err){
      console.log(err)
      res.sendStatus(401)
    }else {
      req.user = payload.user
      console.log(req.user , payload.user)
      next()
    }
  })
}


// ROUTES : Partie Admin

app.get("/api/portfolios", (req, res) => {
  if (req.user.id === 1) {// a modifier avec role admin dans le meilleur des mondes
    connection.query(" SELECT * from portfolio", (err, results) => {
      if (err) {
        console.log(err)
        res.status(500).send('Error 500');
      } else {
        res.json(results);
      }
    })
  } else {
    res.sendStatus(401)
  }
})


app.get("/api/portfolios/:id",verifyToken, (req, res) => {
  connection.query(" SELECT * from portfolio where id = ?", req.user.portfolio_id, (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send('Error 500');
    } else {
      res.json(results);
    }
  })
})

app.put("/api/portfolio/:id", (req, res) => {
  connection.query("UPDATE portfolio SET active = ? WHERE id = ?", [req.body.active, req.params.id], (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send("Erreur 500");
    } else {
      res.json(results);
    }
  });
});

// //Cors
app.use(cors())

;

//ROUTES : Récupération des users
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
})

