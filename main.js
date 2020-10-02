const readline = require('readline')
const fs = require('fs')

const main = async () => {
    console.log("hey babe")
    const challengeAmount = fs.readdirSync('./challenges').length -1 // -1 because of template

    const lineReader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    lineReader.question(`
        Which challenge do you want to run ?
        Please enter a number between 1 and ${challengeAmount}
    `, async (input) => {
        lineReader.close()
        const challenge = await require(`./challenges/challenge${input}`)
        await challenge.execute
    })
}

main()



/**
 * module.exports = {
    Cat: Cat
}
Is the same as
exports.Cat = cat
 */

