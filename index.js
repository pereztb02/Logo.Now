const inquirer = require('inquirer');
const jest = require('jest');

inquirer
.prompt(
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
    when: (answers) => answers.text_confirm === true,
    },    
)
.then((answers) => {
    if (answers.text_confirm) {
        console.log("logo text recieved!");
    } else if (answers.text) {
            console.log("user does not want text")
        }
});