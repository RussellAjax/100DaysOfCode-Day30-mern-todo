const dbConfig = require('../db/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.todos = require('./todo.model.js')(mongoose);
console.log(db.todos);
module.exports = db;
