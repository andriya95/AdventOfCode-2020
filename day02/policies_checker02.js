const fs = require('fs');


function policies_checker() {
  fs.readFile('./password_policies.txt', (err, data) => {
    const string = data.toString();
    const policies = string.split('\r\n');

    // Splitting the input into processing elements
    let  contains_both = 0;
    let contains_one = 0;
    policies.forEach(policie => {
      const password = policie.split(':')[1];
      const letter = policie.split(' ')[1].replace(':', '');
      const min_max = policie.split(' ')[0];
      const min = min_max.split('-')[0];
      const max = min_max.split('-')[1];

      if (password.includes(letter) &&
          password[min] === letter ||
          password[max] === letter) {
            contains_both += 1
          }
      
          if (password.includes(letter) &&
          password[min] === letter &&
          password[max] === letter) {
            contains_one += 1
          }
      
    });
    console.log(contains_both - contains_one);
  })
}

policies_checker();