const fs = require('fs');


function policies_checker() {
  fs.readFile('./password_policies.txt', (err, data) => {
    const string = data.toString();
    const policies = string.split('\r\n');

    // Splitting the input into processing elements
    let  corect_passwords = 0;
    policies.forEach(policie => {
      const password = policie.split(':')[1];
      const letter = policie.split(' ')[1].replace(':', '');
      const min_max = policie.split(' ')[0];
      const min = min_max.split('-')[0];
      const max = min_max.split('-')[1];

      const occurencies = password.split(letter).length - 1;
      
      if (password.includes(letter) &&
          occurencies >= min &&
          occurencies <=max) {
            corect_passwords += 1
          }
      
    });
    console.log(corect_passwords);
  })
}

policies_checker();
