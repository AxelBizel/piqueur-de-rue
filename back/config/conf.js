const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost", // adresse du serveur
    user: "root", // le nom d'utilisateur
<<<<<<< HEAD
    password: 'Ivo13122018', // le mot de passe
=======
    password: "", // le mot de passe
>>>>>>> dev
    database: "piqueurderue" // le nom de la base de données
});

const IPserver = "http://localhost:5000";
const portHttp = 5000;
// const portHttps = null;

module.exports = {
    connection,
    IPserver,
    portHttp,
};

