const { Circle, Triangle, Square } = require("./shapes.js");

//test for circle
describe("Circle", () => {
  it("should return a blue circle with the white text CMC", () => {
    const shape = new Circle("CMC", "white", "blue");
    expect(shape.render()).toEqual(`
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="blue" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">CMC</text>
    </svg>`);
  });
});

//test for triangle
describe("Triangle", () => {
  it("should return an orange triangle with the pink text ALC", () => {
    const shape = new Triangle("ALC", "pink", "orange");
    expect(shape.render()).toEqual(`
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points = "150,18 244,182 56,182" fill="orange" />
    <text x="150" y="145" font-size="60" text-anchor="middle" fill="pink">ALC</text>
    </svg>
    `);
  });
});

//test for square
describe("Square", () => {
  it("should return a green square with the gray text CCC", () => {
    const shape = new Square("CCC", "gray", "green");
    expect(shape.render()).toEqual(`
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="45" width="150" height="150" fill="green" />
    <text x="165" y="135" font-size="60" text-anchor="middle" fill="gray">CCC</text>
    </svg>
    `);
  });
});
