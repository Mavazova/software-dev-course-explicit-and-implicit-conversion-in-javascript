/*
Instructions

Create a command-line quiz application that tests students on knowledge from the
Values, Data Types, and Operations module.

Your application should:
    1. Use the readline-sync node module to ask users questions and collect their
    responses.
    2. Prompt the user for their name and greet them.
    3. Use readline-sync.question() to ask the user 5 questions that test their
    knowledge of Values, Data Types, and Operations.
        - At least one of your questions should prompt the user for a number.
    4. Store the user’s answers in variables.
    5. Print the value of those answers back to the user.
Setup
    1. Make sure you install readline-sync following the instructions in the
    Lesson: Values, Data Types, and Operations - 4.
    2. For this activity, you will create your own repository to store your code:
        1. Create a new repository.
    2. Name it: practice-readline-sync-[Your First Name]-[Your Last Initial]
    3. Make sure the repository is public.
    4. Clone the repository to your local machine.
    5. Start working on the code.
    6. When you are finished, commit your changes and push them to your
    repository.
*/

//Write your code below//

const readlineSync = require('readline-sync');


const questionOne = readlineSync.question('What is the result of 5 + 3? ');
const questionTwo = readlineSync.question('What data type is "Hello, World!"? ');
const questionThree = readlineSync.question('What keyword is used to declare a variable in JavaScript?');
const questionFour = readlineSync.question('What is the result of 10 / 2? ');
const questionFive = readlineSync.question('Which symbol is used for single-line comments in JavaScript? ');

const anwerQuestionOne = questionOne;
const anwerQuestionTwo = questionTwo;
const anwerQuestionThree = questionThree;
const anwerQuestionFour = questionFour;
const anwerQuestionFive = questionFive;

console.log("Here are your answers:");
console.log(`1. Answer to Question One: ${anwerQuestionOne}`);
console.log(`2. Answer to Question Two: ${anwerQuestionTwo}`);
console.log(`3. Answer to Question Three: ${anwerQuestionThree}`);
console.log(`4. Answer to Question Four: ${anwerQuestionFour}`);
console.log(`5. Answer to Question Five: ${anwerQuestionFive}`);







