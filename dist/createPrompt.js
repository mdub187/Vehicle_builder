import inquirer from "inquirer"
creatPromptModule()


const prompt = inquirer.createPromptModule();

prompt(questions).then(/* ... */);
