const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

// let oneEuroIs = {
//     "JPY": 127.9, 
//     "USD": 1.2, 
//     "GBP": 0.8, 
// }

function fromEuroToDollar(valueInEuro){
    return valueInEuro*1.2
}

function fromDollarToYen(valueInDollar){
    return valueInDollar/1.2*127.9
}

function YenToPound(valueInYen){
    return valueInYen/127.9*0.8
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, YenToPound };