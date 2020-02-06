// Q1
// Write a function that accepts two integers and displays
// the greater one.

// Define the function
function max(num1, num2) {
    let greaterNumber;
    if (num1 < num2) {
        greaterNumber = num2;
    }
    else {
        greaterNumber = num1;
        }
   console.log(`The greater number is ${greaterNumber}`)     
}


// Call the function
max(12, 43);
