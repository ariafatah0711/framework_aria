import fs, { write } from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("aria\n");
writer.write("fatah\n");
writer.write("anom\n");

// writer.close();
writer.end();

const render = fs.createReadStream("target.log");
render.addListener("data", (data) => {
  console.info(data.toString()); // data hanya tammpil hanya jika kita tidak memiliki file target.log dan tidak memiliki isi filenya
});

// render.on("data", (data) => {
//   console.info(data.toString());
//   render.close();
// });
