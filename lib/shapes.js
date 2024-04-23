class Shape {
  constructor(logoText, textColor, shapeColor) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  render() {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
    </svg>`;
  }
}
class Triangle extends Shape {
  render() {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points = "150,18 244,182 56,182" fill="${this.shapeColor}" />
    <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
    </svg>
    `;
  }
}

class Square extends Shape {
  render() {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="45" width="150" height="150" fill="${this.shapeColor}" />
    <text x="165" y="135" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
    </svg>
    `;
  }
}

module.exports = { Circle, Triangle, Square };
