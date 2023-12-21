import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = "report.json"; // file yang berisi informasi error yang teerjaddi

function sampleError() {
  throw new Error("Ups!"); // error
}

sampleError();
