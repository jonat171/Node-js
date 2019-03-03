const db = require('mongoose');
const Schema = db.Schema;

let ClientSchema = new Schema(
{
    name: String,
    adress: String,
    cp: Number,
    ville: String,
    refContact: String,
    tel: {type: String, match: /\d{10}/},
    mail: String,
    prospect: Boolean
});

module.exports = db.model('Client', ClientSchema);
