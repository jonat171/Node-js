const db = require('mongoose');
const Schema = db.Schema;

let EmployeSchema = new Schema(
{
    Nom:String,
    Prenom:String,
    username:String,
    birthday:Date,
    address: String,
    tel: {type: String, match: /\d{10}/},
    mail: String,
    poste:String

});

module.exports = db.model('Employe', EmployeSchema);
