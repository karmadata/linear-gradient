var Gradient = require('./index')

var grad1 = new Gradient([
    [0,0,0],
    [0,80,0],
    [0,160,80],
    [80,80,80],
    [160,40,40],
    [255,0,0]
]);

console.log(grad1.calcArray(0));
console.log(grad1.calcArray(1));
console.log(grad1.calcArray(0.25));
console.log(grad1.calcArray(0.5));
console.log(grad1.calcArray(0.75));

console.log(grad1.calcHex(0));
console.log(grad1.calcHex(1));
console.log(grad1.calcHex(0.25));
console.log(grad1.calcHex(0.5));
console.log(grad1.calcHex(0.75));

