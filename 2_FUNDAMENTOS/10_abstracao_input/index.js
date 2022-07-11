import inquirer from 'inquirer'
import chalk from 'chalk'

inquirer.prompt([
{
    name: 'pergunta1', 
    message: 'Qual é a primeira nota?',
},
{
    name: 'pergunta2',
    message: 'Qual é a segunda nota?',
},
]).then((answers) => {
    console.log(answers);
    const media = ((parseInt(answers.pergunta1) + parseInt(answers.pergunta2)) / 2);

    if (media >=6){
        console.log(chalk.green(`Parabéns, você foi aprovado!`));
    }
    else{
        console.log(chalk.red.bold(`Infelizmente você precisa fazer a recuperação`))
    }

    console.log(chalk.cyan.bold(`A média das notas é ${media}`));
})
.catch((err) => console.log(err))