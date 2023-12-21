import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("19 - zlib-compress.mjs"); // membaca file ini
const result = zlib.gzipSync(source); // compress file ini

console.info(result);
console.log(" ");
console.info(result.toString());

fs.writeFileSync("zlib.txt", result); // membuat file zlib.txt valuenya result compresan
