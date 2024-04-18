const LogoImage = require("../index.js");

function LogoImage () {};


describe ("LogoImage", () => {
    
    describe("logotext", ()=>{
        it("should return the 3 characters the user entered", ()=>{
            const logotext = abc;
            const logoImage = new LogoImage();
            expect(logoImage.logotext);
        })
    })
    describe("textcolor", () =>{
        it("should return text in the color the user entered", () =>{
            const textcolor = blue;
            const logoImage = new LogoImage();
            expect(logoImage.textcolor);
        })
    })
})