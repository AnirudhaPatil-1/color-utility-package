const colorUtils = require('repo-color-utility-package');

const randomColor = colorUtils.generateRandomColor();
console.log(randomColor); //rgb(110, 76, 236)

const hexColor = colorUtils.rgbToHex(0, 255, 255);
console.log(hexColor); //#00ffff