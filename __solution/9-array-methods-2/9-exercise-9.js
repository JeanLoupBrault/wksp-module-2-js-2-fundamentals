// Q9
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

// Remember that it requires a function as its parameter.

function calculateAverage(grade) {
    let sum = 0;

    grade.forEach(function(grade) {
        sum += grade;
    });

    return Math.round(sum / grade.length);
}

console.log(calculateAverage([76, 60, 83, 100, 78]));