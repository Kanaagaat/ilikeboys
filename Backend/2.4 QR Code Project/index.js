/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import { input } from '@inquirer/prompts';
import fs from 'fs'
import qr  from 'qr-image'


const userUrl = await input({ message: 'Enter your url' });
var image = qr.image(userUrl);
image.pipe(fs.createWriteStream("myQr.png"));




fs.writeFile("kana.txt", userUrl, (err) => {
    if(err) throw err;
    console.log("Data was added!");
})



console.log(userUrl);