const fs = require("fs");
const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);

const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:conf.host,
    user:conf.user,
    password:conf.password,
    database:conf.database,
    port:conf.port,
})

connection.connect();

module.exports = connection;