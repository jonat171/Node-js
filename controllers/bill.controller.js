const fs = require('fs');
const Client = require('../models/client.model.js');
const Bill = require('../models/bill.model.js');

exports.showBill = function(req,res)
{
    res.render('bill');
};

prepareDir = function(req,res)
{
    let files = fs.readdirSync('./');
    let validator = true;

    files.forEach(element => {
        if(element == "invoices")
        {
            validator = false;
        }
    });
    if(validator == true)
    {
        fs.mkdirSync('./invoices');
        console.log('dossier crée sans souci');        
    }
};

exports.prepareBill = function(req,res)
{
    prepareDir();
    
    Client.findOne({name: req.body.name}, (err,client) =>
    {
        if(err)
        {
            res.send(`ce nom de client n'est pas utilisé`);
            console.log(err);
        }

        let files2 = fs.readdirSync('./invoices');
        let validator2 = true;

        files2.forEach(element => {
            if(element == client.name)
            {
                validator2 = false;
            }
        });
        if(validator2 == true)
        {
            fs.mkdirSync(`./invoices/${client.name}`);
            console.log('dossier crée sans souci');        
        }


        //on récupère le nombre de facture déja existantes pour ce client, et on rajoute 1 pour le num de la
        //dacture en cours de création
        let files = fs.readdirSync(`./invoices/${client.name}`);
        let billNumber = files.length + 1;

        //on récupère la date et on formate
        let date = new Date();
        let billTime = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear() + ' à ' + date.getHours() + "h";

        //on récupère les infos du formlaire
        let data = {
            name: req.body.name,
            presta: req.body.presta,
            hours: req.body.hours,
            cost: req.body.cost,
            tva: req.body.tva,
            tauxTva: req.body.tauxTva
        };
        

        let billFinal = "Facture numéro " + billNumber + "/// datant du " + billTime + "\n";
        billFinal += (`\nnom client -> ${client.name} \nadresse -> ${client.address} \ncp -> ${client.cp} \nville -> ${client.city}`);
        let ttc = 0;

        //si la tva est présente
        if(data.tva == "tvaYes" && data.tauxTva !== '')
        {
            ttc = (data.hours * data.cost + ((data.hours * data.cost) * data.tauxTva * 0.01));
            billFinal += (`\nprestation fournie -> ${data.presta} \nnombre d'heure travaillées -> ${data.hours} & coût horaire -> ${data.cost} \ntaux de tva -> ${data.tauxTva} \nTTC = ${ttc}`);
        }
        //si la tva n'est pas présente
        else if(data.tva == "tvaNo")
        {
            ttc = (data.hours * data.cost);
            billFinal += (`\nprestation fournie -> ${data.presta} \nnombre d'heure travaillées -> ${data.hours} & coût horaire -> ${data.cost} \nTTC = ${ttc}`); 
        }

        //la facture est prête, on l'envoie dans le fichier au bon endroit
        fs.writeFile(`./invoices/${client.name}/F000${billNumber}.txt`, billFinal, (err) =>
        {
            if(err)
            {
                console.log(err);
            }

            //ajout de la facture dans la collection bills de la bdd
            let bill = new Bill(
            {
                numFacture: `F${billNumber}--from ${client.name}`,
                ttc: ttc
            });
            bill.save((err) =>
            {
                if(err)
                {
                    console.log(err);
                }
                console.log("facture crée en bdd");
            });

            //création du fichier log et son contenu
            let log = `${billTime} -- ${client.name}
            `;
            fs.appendFile('./logBills.txt', log, (err) =>
            {
                if(err)
                {
                    console.log(err);
                }
                console.log('log updated');
            })

            //fin de la création de factures
            res.send(billFinal);
            console.log('facture crée');
            
        });
        
        
    });
    
};

