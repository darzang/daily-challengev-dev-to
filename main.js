const readline = require('readline')
const fs = require('fs')

const main = async () => {
    const challengeAmount = fs.readdirSync('./challenges').length

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question(`
        Which challenge do you want to run ?
        Please enter a number between 1 and ${challengeAmount}
    `, async (input) => {
        const challenge = await require(`./challenges/challenge${input}`)
        await challenge.execute
    })
}

main()