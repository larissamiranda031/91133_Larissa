// db.js
const sqlite3 =require('sqlite3').verbose();

const db = new sqlite3.Database('./cadastrar.db');

// criar a tabela se não existir
db.serialize(()=>{
    db.run("CREATE TABLE IF NOT EXISTS pessoas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome)")
});

module.exports = db;