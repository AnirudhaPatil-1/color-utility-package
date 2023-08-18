const colorUtils = require('@anirudha_patil/repo-color-utility-package');

const randomColor = colorUtils.generateRandomColor();
console.log(randomColor);

const randomColorHex = colorUtils.rgbToHex(0, 255, 255);
console.log(randomColorHex);