import fs from 'fs';
import path from 'path';
import {fileURLToPath} from "node:url";
import os from 'os';

console.log(os.totalmem() / 1024 / 1024 / 1024)


const __filename  = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


fs.writeFile(path.join(__dirname, 'hello.txt'), 'hello', (err) => {
    console.log('Finish writing')

    fs.appendFile(path.join(__dirname, 'hello.txt'), 'world', (err) => {
        console.log('Finish appending')
    })
})

const url =  new URL()