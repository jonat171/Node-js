const db = require('mongoose');
const Bill = require('../models/bill.model.js');

db.connect('mongodb://saitamzer:Passw0rd@ds157834.mlab.com:57834/projet-final-factures', (err) =>
{
    if(err)
    {
        console.log("erreur lors de la connection à la bdd");
    }
    else
    {
        console.log("connecté à la bdd!");
    }
});

let ca = 0;

Bill.find((err, bill)=>
{
    if(err)
    {
        console.log(err);
    }
    bill.forEach(element=>
        {
            ca += element.ttc;
        });
    console.log(`Chiffre d'affaire total de la boite --> ${ca}`);
});
