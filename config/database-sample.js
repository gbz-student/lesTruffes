var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "", //put your local mysql user
    password: "", //put your local mysql pw
    database: "" //put your local database name
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

