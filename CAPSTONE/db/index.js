const pg = require("pg");

const client = new pg.Client("postregs://localhost:5432/allgames");

module.exports = client;