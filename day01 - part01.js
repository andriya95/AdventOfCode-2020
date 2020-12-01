const fs = require('fs');


function question1() {
  fs.readFile('./santa.txt', (err, data) => {
    const string = data.toString();
    const input = string.split('\r\n'); 
    
    // Finding subtractions 
    const mapInput = input.map(num => { 
      return 2020 - num
    })
    
    // Mapping Subtractions to Array of Strings
    const subtractions = mapInput.map(String);

    // Looking for the same numbers from both arrays
    let intersection = input.filter(num => subtractions.includes(num))

    // Multiplying intersected numbers
    let solution = intersection.reduce((acc, num) => {
      return acc * num
    })
    console.log(solution);
  })
}
question1();



