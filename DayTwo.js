// Day-2: Operators
//Activity One: Arithmatic operations

// Task-1
const num1 = 10;
const num2 = 3;
//console.log(`the sum of ${num1} and ${num2} is ${num1 + num2}`);

//Task-2
const a = 56;
const b = 45;
//console.log(`the difference of ${a} and ${b} is ${a - b}`);

// Task-3
//console.log(`the product of ${a} and ${b} is ${a * b}`);

//Task-4
const Num1 = 15;
const Num2 = 2;
// console.log(`the quotient of ${Num1} divide by ${Num2} is ${Num1/Num2}`);
// task-5
// console.log(`the remainder of ${Num1} divide by ${Num2} is ${Num1%Num2}`);

//Activity Two: Assignment operator
//Task-4
let MyNum = 3;
MyNum+= 4;
//console.log(MyNum);
//Task-5
 let MyNum2 = 8;
MyNum2-= 3;
//console.log(MyNum2);

//Activity Three: Comparison Operator
let MyNum3 = 8;
let MyNum4 = 4;
let MyNum5 = 8;
//Task-8
if(MyNum3 > MyNum4){
  console.log(`${MyNum3} is greater than ${MyNum4}`);
}
if(MyNum4 < MyNum3){
  console.log("why are you kidding");
}
//Task-9
let GreaterEqual= MyNum3 >= MyNum5? `${MyNum3} and ${MyNum5} are equal`: `${MyNum3} and ${MyNum5} aren't equal` ;
console.log(GreaterEqual);

//Task-10
let MyNumberIs ="16";
let MyNumberAgainIs = 16;
if(MyNumberIs == MyNumberAgainIs){
  console.log(`yes "16" is equal to 16`);
}
if(MyNumberIs === MyNumberAgainIs){
  console.log("hey whats up");
}else{
  console.log(`hey I'm strict equality check`);
}
// Activity Four: Logical Operator
//Task-11
 if(MyNum2<MyNum3 && MyNumberAgainIs === MyNumberIs ){
   console.log("I'm In")
 }else{
   console.log( `&& condition is false that's why I print`)
 }
//Task-12
if(MyNum2<MyNum3 || MyNumberAgainIs === MyNumberIs ){
  console.log("Hey I'm Pipe sign")
}
//Task-13
if(!2==2){
  console.log(`hey`);
}else{
  console.log(`I'm printing coz if condition is false`);
}
// Task-14
let CheckNum = 8;
let PrintResult = 8>0?"number is positive":"number is negative"
console.log(PrintResult);