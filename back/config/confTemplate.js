// Conf.js
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost", // adresse du serveur
    user: "root", // le nom d'utilisateur
    password: "", // le mot de passe
    database: "piqueurderue" // le nom de la base de données
});

const IPserver = "51.178.48.160";
const portHttp = 5000;
const portHttps = null;
const key= "";
const  cert= "";
const  chain="";

module.exports = {
	connection,
	IPserver,
	portHttp,
	portHttps,
	key,
	cert,
	chain,
};
