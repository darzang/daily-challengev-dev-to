/* Challenge 1
Your goal is to create a function that removes the first and last letters of a string.
Strings with two characters or less are considered invalid.
You can choose to have your function return null or simply ignore.
 */

const stringPeeler = (input) => {
    if(!input || !input.length) return 'Invalid String'
    if (input.length <= 2) return 'String too short'
    return input.slice(1, input.length - 1)
}

exports.stringPeeler = stringPeeler

/**
 * module.exports = {
    Cat: Cat
}
Is same as 
exports.Cat = cat
 */