const db = require('mongoose');
const parser = require('body-parser');
const express = require('express');
const app = express();
const clientController = require('./controllers/client.controller.js');
const billController = require('./controllers/bill.controller.js');






app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');

//connexion à la bdd mlab
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

/// CRUD ///
//creation client
app.post('/api/v1/createclient', clientController.createClient);

//modif client
app.put('/api/v1/updateclient', clientController.updateClient);

//suppression et affichage client
app.get('/api/v1/deleteclient', clientController.deleteClient);
app.get('/api/v1/showclients', clientController.showClients);
/// CRUD ///

/// Génération de factures ///
app.get('/api/v1/billtest', billController.showBill);
app.post('/api/v1/billtestshow', billController.showBill);

app.post('/api/v1/preparebill', billController.prepareBill);

// app.get('/api/v1', clientController.renderTest);
// app.post('/api/v1', clientController.renderTest);

//lancement serveur
app.listen(4949, () =>
{
	console.log('serveur lancé...');
});
