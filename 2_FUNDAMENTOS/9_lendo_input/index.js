const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Qual a sua linguagem preferida? ", (language) => {

    if(language == 'React'){
        console.log(`${language} não é uma linguagem de Programação!`)
    }
    else{
        console.log(`A minha linguagem preferida é ${language}!`)
    }
  
    readline.close()
});


