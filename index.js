//requirement variables
const fs = require("fs");
const inquirer = require("inquirer");
const generateLogo=require("./examples/logo.svg")
const {Circle, Triangle, Square} = require("./lib/shapes.js");


//limits the number of characters the user can enter 
const LogoPrompt = require('inquirer-maxlength-input-prompt');
const { log } = require("console");
inquirer.registerPrompt('maxlength-input', LogoPrompt);

function init(){
//prompts
inquirer.prompt([
{
    type: "maxlength-input",
    message: "Enter 3 character logo name",
    name: "logoText",
    maxLength: 3,
},

{ 
    type: "input",
    message: "logo text color",
    name: "textColor",
},

{
    type: "list",
    message: "Which shape?",
    choices: ["circle", "triangle", "square"],
    name: "logoShape",

},

{
    type: "input",
    message: "color of shape",
    name: "shapeColor",
},

]).then(({logoText, textColor, shapeColor, logoShape,})=>{
    let shape;
    switch (logoShape) {
        case "circle":
            shape=new Circle();
            break;

        case "square":
         shape=new Square();
            break;

        case "triangle":
        shape=new Triangle();
        break;


    }
   
    const generateLogo=shape.render()

fs.writeFile("./examples/logo.svg", generateLogo, (err)=>
err ? console.log(err) : console.log("Generated logo.svg"));
})}


//     let shapeString=new shape(shape, shapecolor)
//     shapeString=shapeString.render()
//     const logoImage=generateLogo(logotext, textcolor, shape, shapecolor);
//     const logoSVG=(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
//     <circle cx="50" cy="50" r="40" fill="red" />
//     <text x="25" y="55" fill="white">My Logo</text>
//   </svg>`);
//     console.log(logoImage);
//     fs.writeFile("lib/logo.svg", logoImage, (err)=>
//     err ? console.log(err) : console.log("Generated logo.svg"));
//})
//function to make file for logo 

//function createFile(logo.svg, data = ) {
    //return fs.
//}

//}

init();





//GIVEN a command-line application that accepts user input
//WHEN I am prompted for text
//THEN I can enter up to three characters
//WHEN I am prompted for the text color
//THEN I can enter a color keyword (OR a hexadecimal number)
//WHEN I am prompted for a shape
//THEN I am presented with a list of shapes to choose from: circle, triangle, and square
//WHEN I am prompted for the shape's color
//THEN I can enter a color keyword (OR a hexadecimal number)
//WHEN I have entered input for all the prompts
//THEN an SVG file is created named `logo.svg`
//AND the output text "Generated logo.svg" is printed in the command line
//WHEN I open the `logo.svg` file in a browser
//THEN I am shown a 300x200 pixel image that matches the criteria I entered