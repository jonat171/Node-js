const Projet = require('../models/projet.model.js');


exports.createProjet = function(req,res)
{
    //récupération du client dans la requete http
    let projet= new Projet(
    {
      name:req.body.name,
      description: req.body.description,
      dated: req.body.dated,
      datef: req.body.datef,
      montant:req.body.montant,
      statut:req.body.status

    });


    //envoi du client dans la bdd avec un callback
    projet.save((err) =>
    {
        if(err)
        {
            console.log('erreur lors de la création du user');
        }
        else
        {
            console.log('yeah boi! user created');
        }
        res.send(projet);
    })
}

//update projet à partir de son nom
exports.updateProjet = function(req,res)
{
    const name= req.query.name;
    const updateTo = req.body;

    rojet.findOneAndUpdate({name:name}, updateTo, (err,projet) =>
    {
        if(err)
        {
            console.log('problème de modification du nom');
        }
        Projet.findById(name.id, (err, user2) =>
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

//suppression projet à partir de son nom
exports.deleteProjet = function(req,res)
{
    const name = req.query.name;

    Projet.findOneAndDelete({name: name}, (err,projet) =>
    {
        if(err)
        {
            console.log('problème de suppression du user');
        }
        console.log('projet supprimmé');
        res.sendStatus('200');
    });

}

//affichage des utilisateurs avec un template EJS
exports.showProjet = function(req,res)
{
    Projet.find((err, projets) =>
    {
        if(err)
        {
            console.log(err);
        }

        res.render('index', {Projet: projets});
    })
}
