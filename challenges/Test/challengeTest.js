const challengeFunction = () => {
    return 1
}

module.exports = {
    function: challengeFunction()
}


/**
 * Best response from dev.to comments:
 
f=s=>(`${s}`.match(/[aeiou]/gi)||'').length;

 */