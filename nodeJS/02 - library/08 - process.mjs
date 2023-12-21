import process, { exitCode } from "process";

process.addListener("exit", (exitCode) => {
  console.info(`NodeJS exit with code ${exitCode}`);
});

console.info(process.version);
console.table(process.argv);
console.table(process.report);
// console.info(process.env);

// process.exit(1); // jika ini di aktifkan maka progam yang dibawah akan berhenti

console.info(`Not Printed because alredy exit`);
// jadi ketika process behenti process add listenr exit akan terpanggil
