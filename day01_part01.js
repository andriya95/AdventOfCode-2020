const fs = require('fs');


function question1part1() {
  fs.readFile('./numbers.txt', (err, data) => {
    // Converting numbers.txt into an array of strings 
    const string = data.toString();
    // and then into an array of integers 
    const input = string.split('\r\n').map(Number); 
    
    // Finding subtractions 
    const subtractions = input.map(num => { 
      return 2020 - num
    });

    // Looking for the same numbers from both arrays
    const intersection = input.filter(num => subtractions.includes(num));

    // Multiplying intersected numbers
    const solution = intersection.reduce((acc, num) => {
      return acc * num
    }, 1);
    console.log(solution);
  })
}
question1part1();



