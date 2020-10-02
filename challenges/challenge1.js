const readline = require('readline');
const challengeName = 'Daily Challenge #1 - String Peeler'
const challengeDefinition = `
    ${challengeName}
    Your goal is to create a function that removes the first and last letters of a string
    Strings with two characters or less are considered invalid.
    You can choose to have your function return null or simply ignore.\n\n\n
`

const askInputString = `Please enter any string with at least 3 characters: `

const challengeFunction = (input) => {
    if (!input || !input.length) return 'Invalid String'
    if (input.length <= 2) return 'String too short'
    return input.slice(1, input.length - 1)
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

/**
 * module.exports = {
    Cat: Cat
}
Is the same as
exports.Cat = cat
 */