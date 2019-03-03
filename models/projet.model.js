const db = require('mongoose');
const Schema = db.Schema;

let ProjetSchema = new Schema(
{
    name: String,
    desccription: String,
    dated: Date,
    datef: Date,
    montant:Number,
    statut:String,

});

module.exports = db.model('projet', ProjetSchema);
