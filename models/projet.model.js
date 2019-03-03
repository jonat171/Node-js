const db = require('mongoose');
const Schema = db.Schema;

let ProjetSchema = new Schema(
{
    name: String,
    desccription: String,
    date_begin: Date,
    date_end: Date,
    budget:Number,
    status:String,

});

module.exports = db.model('Client', ClientSchema);
