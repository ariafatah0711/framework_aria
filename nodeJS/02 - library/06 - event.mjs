import { EventEmitter } from "events"; // hanya mengambil EventEmitter

const emitter = new EventEmitter();

// listener pertama
emitter.addListener("hello", (name) => {
  console.info(`Hello ${name}`);
});
// listener kedua
emitter.addListener("hello", (name) => {
  console.info(`Bye ${name}`);
});

emitter.emit("hello", "aria"); // memanggil 2 trigger
emitter.emit("tidak ada"); // tidak di panggil
