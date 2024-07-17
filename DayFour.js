//Day-Four: Loops
//Activity One: For Loop
//Task-1:Write a program to print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
  //console.log(i);
}

//Task-2: Write a program to print the multiplication table of 5 using a for loop
for (let i = 5; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    //console.log(i*j);
  }
}

// Activity-2: While Loop
// Task-3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let i = 1;
let sum = 0;
while (i <= 10) {
  sum = sum +i;
  i++;
}
//console.log(sum);

//Task-4: Write a program to print numbers from 10 to 1 using a while loop
let a =10;
while(a>=1){
  //console.log(a);
  a--;
}

//Activity 3: Do...While Loop
//Task-5: Write a program to print numbers from 1 to 5 using a do...while loop
let k =1;
do{
 //console.log(k);
 k++
}while(k<=5)

//Task-6: Write a program to calculate the factorial of a number using a do...while loop
function CalculateFac(num){
  let i =num;
  let result =1;
  if(num<0){
    console.log("Factorial is undefined:Pls enter positive number");
  }else if(num===0){
    console.log("The factorial of Zero is 1");
  }else{
    do{
      result = result * i;
      i--;
    }while(i>0)
    console.log(`the factorial of ${num} is ${result}`);
  }
}
CalculateFac(5);
CalculateFac(4);
CalculateFac(-3);
CalculateFac(0);