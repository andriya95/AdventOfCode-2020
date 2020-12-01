const { captureRejectionSymbol } = require('events');
const fs = require('fs');

function question1part2() {
  fs.readFile('./numbers.txt', (err, data) => {
    // Converting numbers.txt into an array of strings 
    const string = data.toString();
    // and then into an array of integers 
    const input = string.split('\r\n').map(Number);
    
    
    for (a of input) {
      for (b of input) {
        for (c of input) {
          d = a + b + c
          if (d === 2020) {
            return console.log(a*b*c);
          }
        }
      }
    }

  }
)}

question1part2()

