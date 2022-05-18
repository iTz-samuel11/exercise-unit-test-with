const { sum } = require('./app.js');
test('7 and 3 should return 10',() =>  {
    let result = sum(7,3);
    expect(result).toBe(10)
})

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')

    expect(fromEuroToDollar(3.5)).toBe(4.2); 
});

test("One dollar should be 106.58 yen", function(){
    const {fromDollarToYen}= require('./app.js')

    expect(fromDollarToYen(1.2)).toBe(127.9)
});

test ('One yen shoud be 0.01 Pound', function(){
    const{YenToPound}= require('./app.js')

    expect(YenToPound(127.9)).toBe(0.8)
});