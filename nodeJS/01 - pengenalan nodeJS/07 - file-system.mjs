/*
import fs from "fs"; // file system

// blocking = readFileSynch
const buffer = fs.readFileSync("07 - file-system.mjs");
console.log(buffer.toString());

fs.writeFileSync("temp.txt", "hello world");
*/

// non blocking asynch
import fs from "fs/promises";

// read
const buffer = await fs.readFile("07 - file-system.mjs");
console.info(buffer.toString());

// write file
fs.writeFile("temp.txt", "hello node js");

// fs.readdir()
// fs.unlink()
