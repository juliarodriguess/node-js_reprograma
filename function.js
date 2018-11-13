const showResult = soma => `A soma é ${soma}`

function sum (number) {
    var soma = number + number
    console.log(showResult(soma));
}

module.exports.sumResult = sum;

