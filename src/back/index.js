const express = require("express");
const app = express();
const port = 5000;
const connection = require("./conf");

//Import bodyParser
const bodyParser = require("body-parser");
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


app.get("/", (request, response) => {
    response.send("Bienvenue sur Express");
  });
  
  app.listen(port, err => {
    if (err) {
      throw new Error("Something bad happened...");
    }
  
    console.log(`Server is listening on ${port}`);
  });


  // ROUTES

  //GET

app.get("/api/portfolio", (req, res) => {
    connection.query("SELECT * from portfolio", (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des portfolios");
      } else {
        res.json(results);
      }
    });
  });

// //POST

// // écoute de l'url "/api/employees" avec le verbe POST
// app.post("/api/employees", (req, res) => {
//   // récupération des données envoyées
//   const formData = req.body;

//   // connexion à la base de données, et insertion de l'employé
//   connection.query("INSERT INTO employee SET ?", formData, (err, results) => {
//     if (err) {
//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       console.log(err);
//       res.status(500).send("Erreur lors de la sauvegarde d'un employé");
//     } else {
//       // Si tout s'est bien passé, on envoie un statut "ok".
//       res.sendStatus(200);
//     }
//   });
// });

  // //PUT

// // écoute de l'url "/api/employees"
// app.put("/api/employees/:id", (req, res) => {
//   // récupération des données envoyées
//   const idEmployee = req.params.id;
//   const formData = req.body;

//   // connection à la base de données, et insertion de l'employé
//   connection.query(
//     "UPDATE employee SET ? WHERE id = ?",
//     [formData, idEmployee],
//     err => {
//       if (err) {
//         // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//         console.log(err);
//         res.status(500).send("Erreur lors de la modification d'un employé");
//       } else {
//         // Si tout s'est bien passé, on envoie un statut "ok".
//         res.sendStatus(200);
//       }
//     }
//   );
// });




// //DELETE

// // listen to the url "/api/employees" with the verb DELETE
// app.delete('/api/employees/:id', (req, res) => {

//   // Get the data sent
//   const idEmployee = req.params.id;

//   // connection to the database, and insert the employee
//   connection.query('DELETE FROM employee WHERE id = ?', [idEmployee], err => {
//     if (err) {
//       // If an error has occurred, then the user is informed of the error
//        console.log(err);
//       res.status(500).send("Error deleting an employee");
//     } else {
//       // If everything went well, we send a status "ok".
//       res.sendStatus(200);
//     }
//   });
// });