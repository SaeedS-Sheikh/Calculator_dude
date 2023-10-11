#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { subtract, sum, multiplication, divion } from "./fun.js";
import showBanner from "node-banner";
import gradient from "gradient-string";

let answers = [
    {
    name: "num1",
    type: "number",
    message: gradient.teen("Enter First number:"),
    validate: (input:number) => {
        if(isNaN(input)){
            return "Please Enter Number"
        }
            return true;
         }
    },
    {
    name: "num2",
    type: "number",
    message: gradient.teen( "Enter Second number:")
     },
     {
    name: "operation",
    type: "list",
    choices: ["+", "-", "*", "/"],
    message: gradient.pastel("Enter your Operation:")
    }, 
];

let answer = [
    {
        name: "again",
        type: "confirm",
        message: "Do you wnat to calculate again"
    }
];


(async () => {
    await showBanner('CALCULATOR', 'We perform multi-calculation','white', 'blue');
})();

async function calculator (){
    let condition = true;
    while (condition){
let {num1,num2,operation} = await inquirer.prompt(answers);
 
if(operation == "+"){
    console.log("The Sum of two number: ", sum(num1,num2));
} else if (operation == "-"){
    console.log("The Subtraction of two numbers: ", subtract(num1,num2));    
} else if (operation == "*") {
    console.log("The Multiplication of two numbers: ", multiplication(num1, num2));
}else if (operation == "/") {
    console.log("The Division of two numbers: ", divion(num1, num2));
}
    let {again} = await inquirer.prompt(answer)
    condition = again;
}


} 
setTimeout(() => {
    calculator();
}, 1000);
