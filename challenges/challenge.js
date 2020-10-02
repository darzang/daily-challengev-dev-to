const readline = require('readline');
const challengeName = ''
const challengeDefinition = `
    ${challengeName}

\n\n\n`

const askInputString = `Please enter `

const challengeFunction = (input) => {
    return null
}

const execute = () => {
    console.log(challengeDefinition)

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question(askInputString, (input) => {
        console.log(challengeFunction(input))
        rl.close();
    })
}

module.exports = {
    name: challengeName,
    definition: challengeDefinition,
    askInputString: askInputString,
    execute: execute(),
}