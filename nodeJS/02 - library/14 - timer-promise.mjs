import timers from "timers/promises";

console.info(new Date());
const name = await timers.setTimeout(5000, "aria"); // setelah 5 detik akan dapat value aria

console.info(new Date());
console.info(name);

// setinterval
// for await (const startTime of timers.setInterval(1000, new Date())) {
//   console.info(`Start Timer at ${startTime}`); // tanggalnua tidak berubah kearena telah di buat
// }

for await (const startTime of timers.setInterval(1000, "igroned")) {
  console.info(`Start Timer at ${new Date()}`); // tanggalnya ikut berubah
}
