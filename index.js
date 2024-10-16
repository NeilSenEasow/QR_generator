/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image'; // Importing qr-image to generate QR code
import fs from 'fs'; // Importing file system module to save the input

// Prompt the user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter a URL to generate a QR code:',
    },
  ])
  .then((answers) => {
    const url = answers.url;
    
    // Task 2: Generate QR code image from the entered URL
    const qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_image.png')); // Save QR code as a PNG image

    // Task 3: Save the user input to a text file
    fs.writeFile('user_input.txt', `User entered URL: ${url}`, (err) => {
      if (err) throw err;
      console.log('URL has been saved to user_input.txt');
    });
    
    console.log('QR code has been generated and saved as qr_image.png');
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log('Something went wrong:', error);
    }
  });
