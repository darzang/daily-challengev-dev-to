const readline = require('readline');
const challengeName = 'Daily Challenge #2 - String Diamond'

const challengeDefinition = `
    ${challengeName}
    Your task is to return a string that displays a diamond shape on the screen using asterisk (“*”) characters.
    The shape that the print method will return should resemble a diamond. 
    A number provided as input will represent the number of asterisks printed on the middle line. 
    The line above and below will be centered and will have two less asterisks than the middle line. 
    This reduction will continue for each line until a line with a single asterisk is printed at the top and bottom of the figure.

    Return null if input is an even number or a negative number.

    Note: JS and Python students must implement diamond() method and return None (Py) or null(JS) for invalid input.
\n\n\n`

const askInputString = `Please enter a positive, uneven number:`

const challengeFunction = (input) => {
    if (input < 0 || input % 2 === 0) return null
    let middleLine = (input + 1) / 2

    let diamond = ''
    for (let i = 1; i <= input; i++) {
        // Get index of the middle line
        const linesToMiddle = Math.abs(middleLine - i)

        // Get number of spacing before first character
        const spacing = ' '.repeat(linesToMiddle * 2)

        // Get amount of characters on the line
        const nbCharacters = input - (2 * linesToMiddle)

        // Get characters line
        let characters = ''
        for (let j = 1; j <= nbCharacters; j++) {
            if (j == nbCharacters) {
                characters += '*'  // No spacing after last one to allow spacing variable usage twice
            } else {
                characters += '* '
            }
        }
        const line = spacing + characters + spacing + '\n'
        diamond += line
    }
    // Write the diamond
    console.log(diamond)
}

const execute = () => {
    console.log(challengeDefinition)

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question(askInputString, (input) => {
        console.log(challengeFunction(parseInt(input)))
        rl.close();
    })
}

module.exports = {
    name: challengeName,
    definition: challengeDefinition,
    askInputString: askInputString,
    execute: execute(),
}