const inquirer = require('inquirer');
const jest = require('jest');

inquirer
.prompt([ //Array of questions for logo params
{
type: 'list',
name: 'shapes',
message: 'What shape would you like?',
choices: ['circle', 'square', 'triangle']
},
{
    type: 'input',
    name: 'colors',
    message: 'What color would you like?'
},
{
    type: 'confirm',
    name: 'text_confirm',
    message: 'Would you like text on your logo?',
    
},
{
    type: 'input',
    name: 'text',
    message: 'Input logo text',
    //only ask this question if the text_confirm was answered 'yes'.
    when: (answers) => answers.text_confirm === true,
    },    
])
.then((answers) => {
    if (answers.text_confirm) {
        //if text_confirm is 'yes', and text is input, then message is sent
        console.log("logo text recieved!");
    } else if (answers.text) {
            console.log("user does not want text");
        }
});