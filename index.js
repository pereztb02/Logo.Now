const inquirer = require("inquirer");
const { Triangle } = require("./lib/shapes");
const { Square } = require("./lib/shapes");
const { Circle } = require("./lib/shapes");

const fs = require("fs");
// const { error } = require("console");
// const { ifError } = require("assert");

inquirer
  .prompt([
    //Array of questions for logo params
    {
      type: "list",
      name: "shapes",
      message: "What shape would you like?",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "colors",
      message: "What color would you like?",
    },
    {
      type: "confirm",
      name: "text_confirm",
      message: "Would you like text on your logo?",
    },
    {
      type: "input",
      name: "text_color",
      message: "What color would you like your text to be?",
      //only ask this question if the text_confirm was answered 'yes'.
      when: (answers) => answers.text_confirm === true,
    },
    {
      type: "input",
      name: "text",
      message: "Input logo text",
      //only ask this question if the text_confirm was answered 'yes'.
      when: (answers) => answers.text_confirm === true,
    },
  ])
  .then((answers) => {
    let svg;
    console.log(answers);
    if (answers.shapes === "triangle") {
      svg = new Triangle();
    } else if (answers.shapes === "square") {
      svg = new Square()
    } else if (answers.shapes === "circle") {
      svg = new Circle()
    }

    if (answers.text_confirm) {
      //if text_confirm is 'yes', and text is input, then message is sent
      console.log("logo text recieved!");
      svg.setText(answers.text)
    } else {
      console.log("user does not want text");
      svg.setText("")
    }
    svg.setColors(answers.colors);
    svg.setText_color(answers.text_color);
    fs.writeFile("./examples/logo.svg", svg.render(), (error) => {
        if (error) {
        console.log("no can do", error)
        }
        console.log("Generated logo.svg!")
    })
  });

