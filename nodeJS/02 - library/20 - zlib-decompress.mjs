import zlib from "zlib";
import fs from "fs";

const source = fs.readFileSync("zlib.txt"); // membaca file zlib.txt
console.info(source.toString());
console.log(" ");

const result = zlib.unzipSync(source); // de-compress file itu
console.info(result.toString());

// fs.writeFileSync("zlib.txt", result); // mengubah filenya menjadi de-compress agar bisa dibaca
