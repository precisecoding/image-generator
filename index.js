const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { Triangle, Square, Circle } = require('./lib/shapes.js');
function begin() {
     inquirer
        .prompt([
            {
                type: 'input',
                name: 'logoname',
                message: 'Please enter no more than 3 characters maximum for the name of your logo',
                // use validate function to check user inputs if inputs are no value or greater than specified value return, "error message", else is true.
                validate: function (input) {
                    if (input.length >= 4 || input.length === 0) {
                        return "text should not be more than 3 characters or empty";
                    }
                    else {
                        return true;
                    }
                }

            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color would your text to be? Please use a color keyword or hexadecimal number.',
            },
            {
                // use array as choices for user to be prompted with specified list of values to choose from.
                type: 'list',
                name: 'shapes',
                message: 'Please select the shape circle, triangle, and square',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color would your shape to be? Please use a color keyword or hexadecimal number.',
            },
        ])
        // .then function executes as soons as all prompts are asnwered the answers are stored inside variable "answers" then added to temperate literal stored in variable "svg" to be rendered to new file writen below.
        .then((answers) => {
            const { logoname, textColor, shapes, shapeColor } = answers
            //^^ .then() contains user inputs from .prompt() and are stored within .then() as "answers"

            // fs.writFile function uses method path.join as formated, path.join__dirname, .... ) to write file name specified after folder file is to specified to which the file will be added to here it is, "assets" with file name being "logo.svg". If writefile()/path.join methods and (__dirname, ...)-property fails to load svg file handle that with the error function as written below svg,(err) => {}.
            let shape = "";
            if (shapes === "circle") {
                shape = new Circle(shapeColor)
            }
            else if (shapes === "triangle") {
                shape = new Triangle(shapeColor)
            }
            else {
                shape = new Square(shapeColor)
            }
            let svg = shape.render(logoname, textColor)

            fs.writeFile(
                path.join(__dirname, 'Assets', 'logo.svg'), svg, (err) => {
                    console.log(err);
                })
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.error(error)
                // Prompt couldn't be rendered in the current environment handles error.
            }
        }
        )
}
begin()
