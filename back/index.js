const express = require("express");
const app = express();
const port = 5000;
const connection = require("./conf");
const bodyParser = require("body-parser");
const path = require ('path');
const session = require ('express-session');
const jwt = require ('jsonwebtoken')
const cors = require("cors");

// bodyParser
app.use(bodyParser.json());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(express.json())

app.use(cors())

//Authetification avec Express-Session 

app.get('/', function(request, response) {
  const user = {}
  response.json(user)
});


app.post('/login', function(request, response) {
  const login = request.body.login;
	const password = request.body.password;
	if (login && password) {
		connection.query('SELECT * FROM users WHERE login = ? AND password = ?', [login, password], function(error, results, fields) {
      console.log ("result",results.length)
      if (results.length > 0) {
				request.session.loggedin = true;
				request.session.login = login;
        jwt.sign ({
          user : {
            id : results[0].id,
            login : results[0].login,
          } 
        }, 
       'toto', 
        (err,token) => {
          console.log(err, token)
          response.json({token})
        })
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
		});
	} else {
		response.send('Please enter Username and Password!');
	}
});


app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Bienvenue, ' + request.session.login + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
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

