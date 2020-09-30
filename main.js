const challenge1 = require('./challenges/challenge1') 

const main = () => {
    console.log(challenge1.stringPeeler("Hey"))
    console.log(challenge1.stringPeeler(-1))
    console.log(challenge1.stringPeeler("0"))
    console.log(challenge1.stringPeeler(null))
    console.log(challenge1.stringPeeler(undefined))
    console.log(challenge1.stringPeeler("123456789"))
}

main()