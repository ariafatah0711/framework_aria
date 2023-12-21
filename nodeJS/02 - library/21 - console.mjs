// mengubah target console terminal ke file
import { Console } from "console";
import fs from "fs";

const logFile = fs.createWriteStream("application.log");

const log = new Console({
  stdout: logFile,
  stderr: logFile,
});

log.info("hello world");
log.error("Ups!");

const person = {
  firstName: "aria",
  lastName: "fatah",
};
log.table(person);

// const logTerminal = fs.readFileSync("application.log");
// console.info(logTerminal.toString());
