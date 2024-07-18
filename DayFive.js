// Day-5: Functions
// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
let EvenOdd = (num)=>{
 if(num%2===0){
   //console.log(`${num} is Even`);
 }else{
   //console.log(`${num} is odd`);
 } 
}
EvenOdd(7);
EvenOdd(8);
// above script using simple Function
function EvenOddCheck(num){
  if(num%2===0){
     //console.log(`${num} is Even`);
   }else{
     //console.log(`${num} is odd`);
   } 
}
EvenOddCheck(7);
EvenOddCheck(8);
// Task 2: Write a function to calculate the square of a number and return the result.
let SquareFun = (num)=>{
  return num*num;
}
//console.log(SquareFun(8));

// above script using simple function
function SquareNum(num){
  return num*num;
}
//console.log(SquareNum(6));

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const FindMax = function(num1, num2){
  if(num1>num2){
    //console.log(`${num1} is maximum number`);
  }else{
    //console.log(`${num2} is maximum number`)
  }
}
FindMax(2,4);
FindMax(87, 4);
// Task 4: Write a function expression to concatenate two strings and return the result.
const StringConcatination = function( string1, string2){
  return string1 + string2;
}
//console.log(StringConcatination("I'm", " Azra"));

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let SumOfNum = (num1, num2)=>{
  return num1+num2;
}
//console.log(SumOfNum(9,6));
// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let CheckChar = (Str, Char)=>{
  let FindingChar = Str.includes(Char);
  return FindingChar;
}
//console.log(CheckChar("azra", "r"));

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter. 
let FunWithDEfaultParameters = (num1, num2 = 5)=>{
  return num1*num2;
}
// console.log(FunWithDEfaultParameters(8));
// console.log(FunWithDEfaultParameters(4,8));

// Task 8: Write a function that takes a person’s name and age and returns a greeting message. Provide a default value for the age.
let PersonInfo = (name, age = 18)=>{
  return `Hey ${name} Good Morning and your Age is ${age}`;
}

// console.log(PersonInfo("azra",20));
// console.log(PersonInfo("riya"));

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times
let RepeatedFun = (fun,Iteration)=>{
  for(let i =0; i<Iteration; i++){
    fun();
  }
}
function FUN(){
  console.log("Hey, good morning");
}
(RepeatedFun(FUN, 3));

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function FirstFun(value){
  return value+1;
}
function SecondFun(value){
  return value-3;
}
function LastFun(fun1, fun2, value){
  let result = fun1(value);
  return fun2(result);
}
let PrintingResult = LastFun(FirstFun,SecondFun,7);
console.log(PrintingResult);
