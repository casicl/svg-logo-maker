//add variables with requirements
const fs = require("fs");
const inquirer = require("inquirer");
const shapeLib = require("./lib/shapes.js");

const LogoPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', LogoPrompt);

function init(){
//prompts
inquirer.prompt([
{
    type: "maxlength-input",
    message: "Enter 3 character logo name",
    name: "logo",
    maxLength: 3,
},

{ 
    type: "input",
    message: "logo text color",
    name: "textcolor",
},

{
    type: "list",
    message: "Which shape?",
    choices: ["circle", "triangle", "square"],
    name: "shape",

},

{
    type: "input",
    message: "color of shape",
    name: "shapecolor",
},

]).then(({logo, textcolor, shape, shapecolor})=>{
    const logoImage=generateLogo(logo, textcolor, shape, shapecolor);
    console.log(logoImage);
    fs.createFile("lib/logo.svg", logoImage, (err)=>
    err ? console.log(err) : console.log("Generated logo.svg"));
})
//function to make file for logo 

//function createFile(logo.svg, data = ) {
    //return fs.
//}

}

init();

module.exports = {createFile}





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