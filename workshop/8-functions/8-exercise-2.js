// Q2a
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

function max(num1, num2) {
      return math.max(num1, num2);
}   
console.log(`${max(12, 43)} is the greater number`);

max(12, 43);


// Q2b
// Without changing the function at all, 
// can you figure out how we could use it to determine the greater number between 4 integers?

let biggestInt = (max(num1, num2), max(num3, num4));
console.log(`${biggestInt} is the greater number`);

let biggestInt = (max(12, 43), max(53, 89));
console.log(`${biggestInt} is the greater number`);

// Q2c
// Would this work with more integers? 

let biggestInt = (max(12, 43), max(53, 89), max(18, 106));
console.log(`${biggestInt} is the greater number`);









