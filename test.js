// const { sum } = require('./app.js');

const { expect } = require('expect');
const { test } = require('picomatch');

// test('adds 14 + 9 to equal 23', () => {
//     let total = sum(14,9);
//     expect(total).toBe(23);
// })

test('One euro should be 1.206 dollars', function() {
    const { fromEuroToDollar } = require('./app.js')
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
});

test('One dollar should be 106.58 yenes', function(){
    const { fromDollarToYen } = require('./app.js')

    expect(fromDollarToYen(4.2)).toBe(447.65);
});

test('One yen should be 0.01 pound', function(){
    const { fromYenToPound } = require('./app.js')

    expect(fromYenToPound(447.65)).toBe(2.80);
});