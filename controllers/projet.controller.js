const Projet = require('../models/projet.model.js');


exports.createProjet = function(req,res)
{
    //récupération du client dans la requete http
    let projet= new Projet(
    {
      name:req.body.name,
      desccription: req.body.description,
      date_begin: req.body.date_begin,
      date_end: req.body.date_end,
      budget:req.body.budget,
      status:req.body.status

    });

    //envoi du client dans la bdd avec un callback
    client.save((err) =>
    {
        if(err)
        {
            console.log('erreur lors de la création du user');
        }
        else
        {
            console.log('yeah boi! user created');
        }
        res.send(client);
    })
}

//update client à partir de son email en query
exports.updateClient = function(req,res)
{
    const usermail = req.query.mail;
    const updateTo = req.body;

    Client.findOneAndUpdate({mail: usermail}, updateTo, (err,client) =>
    {
        if(err)
        {
            console.log('problème de modification du user');
        }
        Client.findById(client.id, (err, user2) =>
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
exports.deleteClient = function(req,res)
{
    const usermail = req.query.mail;

    Client.findOneAndDelete({mail: usermail}, (err,client) =>
    {
        if(err)
        {
            console.log('problème de suppression du user');
        }
        console.log('client supprimmé');
        res.sendStatus('200');
    });

}

//affichage des utilisateurs avec un template EJS
exports.showClients = function(req,res)
{
    Client.find((err, clients) =>
    {
        if(err)
        {
            console.log(err);
        }

        res.render('index', {clients: clients});
    })
}
