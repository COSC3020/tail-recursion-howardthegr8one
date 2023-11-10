const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert')

eval(fs.readFileSync('tailRecursion.js')+'');

function test() {
    let result = [0,1,1,2,3]
    assert.equal(result, fibonacciList(5))
}

test()
