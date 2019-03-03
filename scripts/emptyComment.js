const prompt = require('prompt');
const fs = require('fs');



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
           
}

prompt.get(['name'], (err,result)=>
{
    if(err)
    {
        console.log(err);
    }
    
    let files2 = fs.readdirSync('./notes');
    let validator2 = true;
    files2.forEach(element => {
        if(element == `./notes/${result.name}`)
        {
            validator2 = false;
        }
    });
    if(validator2 == true)
    {
        fs.writeFile(`./notes/${result.name}/notes.txt`, '', (err)=>
        {
            if(err)
            {
                console.log(err);
            }
            console.log("file emptied");
        });       
    }
  
});