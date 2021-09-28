const mysql = require("mysql");
// this constant is to save the mysql //

/* in this part we set the port with workbench */
const connexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    port: 3306,
    database: "movie",
});

/* in this part we check if we have an error and what kind of error first. If there is not an error, it will show the connection to the port */
connexion.connect((err) => {
    if (err) {
        console.log("ha ocurrido un error: " + err);
    } else {
        console.log("la base de datos se conecto!!");
    }
});

// in this part, the module is exported //
module.exports = connexion;
