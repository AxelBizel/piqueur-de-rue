// Conf.js
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost", // adresse du serveur
    user: "root", // le nom d'utilisateur
    password: "Ivo13122018", // le mot de passe
    database: "piqueurderue" // le nom de la base de données
});
module.exports = connection;
