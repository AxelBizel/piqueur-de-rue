// Conf.js
const mysql = require("mysql");


const IpServer = "localhost:5000";

const connection = mysql.createConnection({
    host: "localhost", // adresse du serveur
    user: "root", // le nom d'utilisateur
    password: "02011988", // le mot de passe
    database: "piqueurderue" // le nom de la base de données
});


module.exports = IpServer;
module.exports = connection;

