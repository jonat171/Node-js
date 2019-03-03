const prompt = require('prompt');
const fs = require('fs');



let files = fs.readdirSync('./');
let validator = true;

files.forEach(element => {
    if(element == "logBills.txt")
    {
        validator = false;
    }
});
if(validator == false)
{
    fs.writeFile('./logBills.txt', '', (err)=>
    {
        if(err)
        {
            console.log(err);
        }
        console.log('log vidé');
    }); 
}
