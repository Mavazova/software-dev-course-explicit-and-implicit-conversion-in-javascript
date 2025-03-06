/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;//this one example of implicit type conversion 
console.log("The result is: " + result);

let isValid = Boolean("false" === "true");//this also explicit conversion. boolean method onlu converts empty, null,Nan, 0 to false. It does not convert string
//console.log(isValid);
if (isValid) {
    console.log("This is valid!");//this should not run
}
else{
  console.log("This is not valid!");
}

let age = "25";
let totalAge = Number(age) + 5;//this is explicit type conversion
console.log("Total Age: " + totalAge);


// end 