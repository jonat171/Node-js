const fs = require('fs');
const Employe = require('../models/employe.model.js');

exports.createEmploye = function(req,res)
{
    //récupération du client dans la requete http
    let Employe = new Employe(
    {
      name:req.body.name,
      username:req.body.username,
      birthday:req.body.birthday,
      address:req.body.address,
      tel:req.body.tel,
      mail:req.body.mail,
      poste:req.body.poste
    });

    //envoi du client dans la bdd avec un callback
    employe.save((err) =>
    {
        if(err)
        {
            console.log('erreur lors de la création du user');
        }
        else
        {
            console.log('yeah boi! user created');
        }
        res.send(employe);
    })
}

//update client à partir de son email en query
exports.updateEmploye = function(req,res)
{
    const usermail = req.query.mail;
    const updateTo = req.body;

    Employe.findOneAndUpdate({mail: usermail}, updateTo, (err,client) =>
    {
        if(err)
        {
            console.log('problème de modification du user');
        }
        Employe.findById(employe.id, (err, user2) =>
        {
            if(err)
            {
                console.log('no user..');
            }
            console.log(`${user2.name} à été modifié`);
            res.send(user2);
        })
    });

}

//suppression client à partir de son email en query aussi
exports.deleteEmploye = function(req,res)
{
    const usermail = req.query.mail;

    Employe.findOneAndDelete({mail: usermail}, (err,employe) =>
    {
        if(err)
        {
            console.log('problème de suppression du user');
        }
        console.log('employe supprimmé');
        res.sendStatus('200');
    });

}

//affichage des utilisateurs avec un template EJS
exports.showEmploye = function(req,res)
{
    Employe.find((err, employe) =>
    {
        if(err)
        {
            console.log(err);
        }

        res.render('index', {employes: employes});
    })
}
