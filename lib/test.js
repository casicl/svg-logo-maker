const LogoImage = require("../index.js");

function LogoImage () {};


describe ("LogoImage", () => {
    
    describe("logoText", ()=>{
        it("should return the 3 characters the user entered", ()=>{
            const logoText = abc;
            const logoImage = new LogoImage();
            expect(logoImage.logotext);
        })
    })
    describe("textColor", () =>{
        it("should return text in the color the user entered", () =>{
            const textColor = white;
            const logoImage = new LogoImage();
            expect(logoImage.textColor);
        })
    })

    describe("logoShape", () => {
        it("should return the shape the user entered", ()=> {
            const logoShape = circle;
            const logoImage = new LogoImage();
            expect(logoImage.logoShape);
            
        })
    })
    describe ("shapeColor", () => {
        it("should return the color the user input for the shape", ()=>{
            const shapecolor = blue;
            const logoImage = new LogoImage();
            expect(logoImage.shapeColor)
        })
    })

})