const assert = require('assert');
const colorUtils = require('repo-color-utility-package');

const randomColor = colorUtils.generateRandomColor();
// console.log(randomColor);
assert(randomColor.match(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/));
console.log('Random color test passed');

const hexColor = colorUtils.rgbToHex(255, 128, 0);
// console.log(hexColor);
assert.strictEqual(hexColor, '#ff8000');
console.log('RGB to Hex Color test passed');

console.log('All tests passed');