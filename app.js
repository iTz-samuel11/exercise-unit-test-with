// const sum = (a,b) => {
//     return a + b
// }

// console.log(sum(7,3))

// module.exports = { sum };

// let oneEuroIs = {
//     "JPY": 127.9,
//     "USD": 1.2,    
//     "GBP": 0.8,
// }

const fromEuroToDollar = function(valueInEuro){
    
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar
};

module.exports = { fromEuroToDollar }

const fromDollarToYen = function(valueInDollar){
    
    let valueInYen = valueInDollar/1.2*127.9;
    return valueInYen
};

module.exports = { fromDollarToYen }

const fromYenToPound = function(valueInYen){
    
    let valueInPound = valueInYen/127.9*0.8;
    return valueInPound
};

module.exports = { fromYenToPound }