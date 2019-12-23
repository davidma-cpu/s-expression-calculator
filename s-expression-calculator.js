//argument is the second in argv array
var userInput = process.argv[2];

//helper function to test if a value is a number
function isNumeric(value) {
    return /^-{0,1}\d+$/.test(value);
}

//function to turn raw input into an array of tokens 
var generateTokens = function (inputString) {
    return inputString
        .replace(/\([m]/g, '( m')
        .replace(/\([a]/g, '( a')
        .replace(/\)/g, " )")
        .split(" ");
}

//function to convert array of tokens into ordered list for calculation
//accepts initial empty array to build onto
var tokensToList = function (tokens, array) {
    let currentToken = tokens.shift();
    if (currentToken == "(") {
        let nestedArray = [];
        while (tokens[0] != ")") {
            array.push(tokensToList(tokens, nestedArray));
        }
        //pop the "("
        tokens.shift();
        return array;
    }
    else {
        return currentToken;
    }
}

//recursive function to evaluate a list of tokens in the form of [operator,expression,expression]
var evaluate = function (tokenList) {
    if (isNumeric(tokenList)) {
        return parseInt(tokenList);
    }
    else {
        if (tokenList[0] === "multiply") {
            return (evaluate(tokenList[1]) * evaluate(tokenList[2]));
        }
        else if (tokenList[0] === "add") {
            return (evaluate(tokenList[1]) + evaluate(tokenList[2]));
        }
    }
}

//invoke the functions on userInput
if (userInput === undefined) {
    console.log("No expression entered");
}
    //handles ase where input is not an expression and only a number
else if (isNumeric(userInput)) {
    console.log(userInput);
}
else {
    var tokenInput = generateTokens(userInput);
    var tokenList = tokensToList(tokenInput, []);
    var finalResult = evaluate(tokenList);
    //console.log(tokenList);
    console.log(finalResult);
}

