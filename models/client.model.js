const db = require('mongoose');
const Schema = db.Schema;

let ClientSchema = new Schema(
{
    name: String,
    address: String,
    cp: Number,
    city: String,
    refContact: String,
    tel: {type: String, match: /\d{10}/},
    mail: String,
    prospect: Boolean
});

module.exports = db.model('Client', ClientSchema);
