const express = require("express");
const app = express();
const port = 5000;
const connection = require("./conf");
const bodyParser = require("body-parser");
const path = require('path');
const session = require('express-session');
const jwt = require('jsonwebtoken')
const cors = require("cors");

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

app.get("/api/portfolios/:id", (req, res) => {
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
  connection.query(" UPDATE portfolio SET active = ? WHERE id = ?", [req.body.active, req.params.id], (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send("Erreur 500");
    } else {
      res.json(results);
    }
  });
});






// //Cors
// app.use(cors());
// app.get("/products/:id", function(req, res, next) {
//   res.json({ msg: "This is CORS-enabled for all origins!" });
// });

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

//Récupération des datas portfolios

app.get("/api/portfolio", (req, res) => {
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

//Server
app.get("/", (request, response) => {
  response.send("Bienvenue sur Express");
});

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${port}`);
})

