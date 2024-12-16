// 1. How would you define a function that 
//takes two numbers as parameters and 
//returns their sum?

function sumOfTwoNumbers(a, b) {
    return(a + b);
}
var sumresult = sumOfTwoNumbers(25,25);
console.log(sumresult);

// 2. If you define a function that accepts  
// a string as a parameter, how would you 
// modify it to print the string in 
//uppercase?

function string(print) {
    console.log(print.toUpperCase());
}
string("mlk");

// 3. In JavaScript, what happens if you pass 
// an undefined value as an argument to a 
// function that expects a parameter?

function pass(hey) {
    console.log(hey);
}
pass();

//4.Suppose you have a function that takes an
// array as a parameter. How would you check 
// inside the function if the array is empty?

function array(a) {
    if(a==0) {
        console.log("empty");
    }
    else {
        console.log("not empty")
    }
}
array([]);

// 5. write a function that takes two numbers 
// as parameters and returns their difference.

function sumOfTwoDifference(a, b) {
    return(a - b);
}
var sumresult = sumOfTwoDifference(25,25);
console.log(sumresult);

// 6. Define a function that accepts a name 
// and age as parameters, and returns a string 
// with a greeting like "Hello, [name]! You 
// are [age] years old."

function greeting(name, age) {
    return `Hello, ${name}! You are ${age} years old`;
}
var value=greeting('teju',12);
console.log(value)

// 7. Write a function that takes a number as 
// a parameter and returns true if the number 
// is a even number, otherwise false.

function even(a) {
    if(a==0){
        console.log(0);
    }
    else if (a%2==0){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
even(24)