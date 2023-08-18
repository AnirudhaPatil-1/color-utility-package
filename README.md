


# Color Utilities 🎨

<p align="center">
    <img src="https://img.shields.io/npm/v/@anirudha_patil/repo-color-utility-package.svg" alt="npm version">
<!--     <img src="https://img.shields.io/npm/dm/@anirudha_patil/repo-color-utility-package.svg" alt="npm downloads">
    <img src="https://img.shields.io/github/license/anirudha_patil/repo-color-utility-package.svg" alt="license"> -->
</p>

Color Utilities is a simple npm package that offers convenient utility functions for working with colors in JavaScript.

## ✨ Features

- 🎉 Convert RGB color values to hexadecimal format.
- 🌈 Generate random RGB colors.

## 🚀 Installation

To start using the Color Utilities package in your project, you can install it via npm:

```bash
npm install @anirudha_patil/repo-color-utility-package
```

## 💡 Usage

### Converting RGB to Hex

```javascript
const colorUtils = require('@anirudha_patil/repo-color-utility-package');

const red = 255;
const green = 128;
const blue = 0;

const hexColor = colorUtils.rgbToHex(red, green, blue);
console.log(hexColor); // Outputs: "#ff8000"
```

### Generating Random Colors

```javascript
const colorUtils = require('@anirudha_patil/repo-color-utility-package');

const randomColor = colorUtils.generateRandomColor();
console.log(randomColor); // Outputs: "rgb(123, 45, 67)"
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any improvements or new features.

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

