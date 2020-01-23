const express = require("express");
const app = express();
const port = 5000;
const connection = require("./conf");
const bodyParser = require("body-parser");
const path = require('path');
const jwt = require('jsonwebtoken')
const cors = require("cors");
const {sendMail,sendMailGuest} = require('./mail')
const { storage } = require('./fileupload')
const http = require('http');
const fs = require('fs');


// File upload
var multer = require('multer')
var upload = multer({ storage: storage }).single('file')

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json())

app.use(cors())

// filesystem
app.use('/img', express.static(__dirname + '/img'));

//ROUTES : Partie Authentification 

app.get('/', function (request, response) {
  const user = {}
  response.json(user)
});


// File Upload
app.post('/upload',function(req, res) {
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
            return res.status(500).json(err)
         }
    return res.status(200).send(req.file)
  })
});


app.post('/login', function (request, response) {
  console.log("login", request.body)
  const login = request.body.login;
  const password = request.body.password;
  if (login && password) {
    connection.query('SELECT * FROM users WHERE login = ? AND password = ?', [login, password], function (error, results, fields) {
      console.log("result", results.length)
      if (results.length > 0) {
        jwt.sign({
          user: {
            id: results[0].id,
            login: results[0].login,
            portfolio_id: results[0].portfolio_id
          }
        },
          'toto', 
          // { expiresIn: '1500sec' },
          (err, token) => {
            console.log(err, token)
            response.json({ token })
          })
      } else {
        response.status(403).send('Incorrect Username and/or Password!');
      }
    });
  } else {
    response.status(403).send('Please enter Username and Password!');
  }
});



app.get("/api/portfolios",verifyToken, (req, res) => {
  connection.query(" SELECT * from portfolio", (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send('Error 500');
    } else {
      res.json(results);
    }
  })
})
//Verfication du token
function verifyToken(req, res, next) {
  console.log(req.headers.authorizaton)
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]
  jwt.verify(token, 'toto', (err, payload) => {
    if (err) {
      console.log(err)
      res.sendStatus(401)
    } else {
      req.user = payload.user
      console.log(req.user, payload.user)
      next()
    }
  })
}

//ROUTES FAKES ADMIN
//Formulaires USERS

//OK
app.get("/admin/users", (req, res) => {
  connection.query(" SELECT * from users ", (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send('Error 500');
    } else {
      res.json(results);
    }
  })
})

//OK
app.put("/admin/users/:id/active", (req, res) => {
  connection.query("UPDATE users SET active = ? WHERE id = ?", [req.body.active, req.params.id], (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send("Erreur 500");
    } else {
      res.json(results);
    }
  });
});


// app.put('/admin/users/:id', (req, res) => {
//   const idUsers = req.params.id;
//   const formData = req.body;
//    connection.query('UPDATE users SET ? WHERE id = ?', [formData, idUsers], (err,results) => {
//     if (err) {
//       console.log(err)
//       res.status(500).send('Error 500');
//     } else {
//       res.json(results);
//     }
//   })
// })


//Routes Admin - Login

// app.put("/admin/users/", (req, res) => {
//   connection.query("UPDATE users WHERE id = ? AND password = ?", [req.body.active, req.params.id], (err, results) => {
//     if (err) {
//       console.log(err)
//       res.status(500).send("Erreur 500");
//     } else {
//       res.json(results);
//     }
//   });
// });


//Formulaire Portfolios

//OK
app.get("/admin/portfolios", (req, res) => {
  connection.query(" SELECT * from portfolio ", (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send('Error 500');
    } else {
      res.json(results);
    }
  })
})

//OK
app.post('/admin/portfolios', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO portfolio SET ?', formData, (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send('Error 500');
    } else {
      res.json(results);
    }
  })
})

//OK
app.put('/admin/portfolio/:id', (req, res) => {
  const idPortfolio = req.params.id;
  const formData = req.body;
   connection.query('UPDATE portfolio SET ? WHERE id = ?', [formData, idPortfolio], (err,results) => {
    if (err) {
      console.log(err)
      res.status(500).send('Error 500');
    } else {
      res.json(results);
    }
  })
})


///////////////////////////////////////////////////////////////////////////////


app.get("/api/portfolios/:id", (req, res) => {
  connection.query(" SELECT * from portfolio where id = ?", [req.params.id], (err, results) => {
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

//ROUTES : Profile Portfolio 

app.post("/api/portfolio/:id", (req, res) => {
  connection.query("SELECT * from portfolio SET active = ? WHERE id = ?", [req.body.active, req.params.id], (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send("Erreur 500");
    } else {
      res.json(results);
    }
  });
});




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

//Récupération des portfolios team actifs
app.get("/api/portfolio/team/active", (req, res) => {
  connection.query("SELECT * from portfolio WHERE type='team' AND active='1'", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des portfolios");
    } else {
      res.json(results);
    }
  });
});

//Récupération des portfolios guests
app.get("/api/portfolio/guest", (req, res) => {
  connection.query("SELECT * from portfolio WHERE type='guest' ", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des portfolios");
    } else {
      res.json(results);
    }
  });
});

//Récupération des portfolios guests actifs
app.get("/api/portfolio/guest/active", (req, res) => {
  connection.query("SELECT * from portfolio WHERE type='guest' AND active='1'", (err, results) => {
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
      res.status(500).send("Erreur lors de la récupération des images");
    } else {
      res.json(results);
    }
  });
});

//Récupération des images par tatoueur
app.get("/api/images/:id", (req, res) => {
  connection.query("SELECT * from images WHERE portfolio_id = ?", req.params.id, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des images");
    } else {
      res.json(results);
    }
  });
});

// Récupération des données du formulaire client de contactTatoueur
//envoi du mail client au tatoueur
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
      res.status(500).send("erreur de récupération des données du formulaire Client");
    } else {
      console.log('YES ça fonctionne côté client !!!!!!!!!!!!!')
      try {
        //je mets dans mysql
        //j'envoie mon mail
        const sent = await sendMail(req.body)
        if (sent) {
          res.send({ message: 'email client envoyé avec succès' })
        }
      } catch (error) {
        console.log("gg1", error)
        // throw new Error(error.message)
        res.status(500).send("erreur d'envoie du mail client");

      }
    }
  })
});


// Récupération des données du formulaire guest de contactTatoueur
//envoi du mail guest au tatoueur
app.get("/api/guests", (req, res) => {
  connection.query("SELECT * from guests", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des guests");
    } else {
      res.json(results);
    }
  });
});


app.post('/api/guests', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO guests SET?', formData, async (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("erreur de récupération des données du formulaire Guest");
    } else {
      console.log('YES ça fonctionne côté guest !!!!!!!!!!!!!')
      try {
        //je mets dans mysql
        //j'envoie mon mail
        const sent = await sendMailGuest(req.body)
        if (sent) {
          res.send({ message: 'email guest envoyé avec succès' })
        }
      } catch (error) {
        console.log("gg2", error)
        // throw new Error(error.message)
        res.status(500).send("erreur d'envoie du mail guest");

      }
    }
  })
});

// Route pour l'envoi de Mails des clients avec sengrid : --------------------------------------------

app.post('/project', async (req, res) => {
  try {
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