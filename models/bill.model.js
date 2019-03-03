const db = require('mongoose');
const Schema = db.Schema;

let BillSchema = new Schema(
{
    numFacture: String,
    ttc: Number
});

module.exports = db.model('Bill', BillSchema);