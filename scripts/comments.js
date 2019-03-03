const db = require('mongoose');
const Client = require('../models/client.model.js');
const prompt = require('prompt');
const fs = require('fs');



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

let files = fs.readdirSync('./');
let validator = true;

files.forEach(element => {
    if(element == "notes")
    {
        validator = false;
    }
});
if(validator == true)
{
    fs.mkdirSync('./notes');
    console.log('dossier crée sans souci');        
}

prompt.get(['name', 'comment', 'another'], (err,result)=>
{
    if(err)
    {
        console.log(err);
    }
    
    Client.findOne({name: result.name}, (err, client) =>
    {

        let files2 = fs.readdirSync('./notes');
        let validator2 = true;
        files2.forEach(element2 => {
            if(element2 == `${client.name}`)
            {
                validator2 = false;
            }
        });
        if(validator2 == true)
        {
            fs.mkdirSync(`./notes/${client.name}`);       
        }

        let messageClient = "";
        if(err)
        {
            console.log(err);
        }
        messageClient += `commentaire 1) ${result.comment} \n`;
        if(result.another == 'o' || result.another == 'O')
        {
            prompt.get(['comment2'], (err, result2)=>
            {
                if(err)
                {
                    console.log(err);
                }
                messageClient += `commentaire 2) ${result2.comment2} \n`;
                fs.writeFile(`./notes/${client.name}/notes.txt`, messageClient, (err)=>
                {
                    if(err)
                    {
                        console.log(err);
                    }
                    console.log('note crée');
                });
            })
        }
        else{
            fs.writeFile(`./notes/${client.name}/notes.txt`, messageClient, (err)=>
                {
                    if(err)
                    {
                        console.log(err);
                    }
                    console.log('note crée');
                });
            console.log('fin du programme');
        }
        
    })
    
});




