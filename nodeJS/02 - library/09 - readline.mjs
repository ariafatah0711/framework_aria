import readline from "readline";
import process from "process";
import { resolve } from "path";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// input.question("siapa nama anda? :", (name) => {
//   console.info(`Hello ${name}`);
//   input.close();
// });

const tanyaNama = () => {
  return new Promise((resolve) => {
    input.question(`siapa nama anda? : `, (name) => {
      resolve(name);
    });
  });
};

const main = async () => {
  try {
    const name = await tanyaNama();
    console.info(`Hello ${name}`);
  } finally {
    input.close();
  }
};

main();
