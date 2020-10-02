const readline = require('readline');
const challengeName = 'Daily Challenge #3 - Vowel Counter'
const challengeDefinition = `
    ${challengeName}
    Write a function that returns the number (count) of vowels in a given string.
    Letters considered as vowels are: a, i, e, o, and u.
    The function should be able to take all types of characters as input,
    including lower case letters, upper case letters, symbols, and numbers.
\n\n\n`

const askInputString = `Please enter any string: `

const challengeFunction = (input) => {
    const result = input.match(/[aeiou]/gi)   // global: don't stop on the first match, insensitive: case insensitive
    return ('Result: ' + result.length || "0" + " vowels in the string")
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
    mainFunction: challengeFunction(),
    definition: challengeDefinition,
    askInputString: askInputString,
    execute: execute(),
}


/**
 * Best response from dev.to comments:
 
f=s=>(`${s}`.match(/[aeiou]/gi)||'').length;

 */