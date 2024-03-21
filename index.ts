#! /usr/bin/env node
import inquirer from "inquirer"
 
const answers = await inquirer.prompt([
    {
      message: "Enter first Number ", type : "number" ,name : "FirstNumber"
    },
    {
        message: "Enter Second Number ", type : "number" ,name : "SecondNumber"
      },
      { 
        message :"Select one operation from Operators",
        type :"list",
        name :"Operators",
        choices:["Addition", "Subtraction", "Multiplication", "Division"],
     },
]) ;



//Conditional Statment
if(answers.Operators === "Addition"){
    console.log(answers.FirstNumber + answers.SecondNumber);

}  else if(answers.Operators === "Subtraction"){
    console.log(answers.FirstNumber - answers.SecondNumber);

} else if(answers.Operators === "Multiplictaion"){
    console.log(answers.FirstNumber * answers.SecondNumber);

} else if(answers.Operators === "Division"){
    console.log(answers.FirstNumber / answers.SecondNumber);
} else{
    console.log("Please Select valid Number");
}