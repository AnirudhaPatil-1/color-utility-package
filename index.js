function rgbToHex(r, g, b){
    const red = Math.min(255, Math.max(0, r));
    const green = Math.min(255, Math.max(0, g));
    const blue = Math.min(255, Math.max(0, b));

    const hexRed = red.toString(16).padStart(2, '0');
    const hexGreen = green.toString(16).padStart(2, '0');
    const hexBlue = blue.toString(16).padStart(2, '0');

    return `#${hexRed}${hexGreen}${hexBlue}`;
}

function generateRandomColor(){
    const r = Math.floor(Math.random() *256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbColor =  `rgb(${r}, ${g}, ${b})`;
    return rgbColor;
}


module.exports = {
    rgbToHex,
    generateRandomColor
};