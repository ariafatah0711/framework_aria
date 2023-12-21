import { URL } from "url";

const pzn = new URL("https://www.progammerzamannow.com/belajar?kelas=nodejs");

console.info(pzn.toString()); // https://www.progammerzamannow.com/belajar?kelas=nodejs
console.info(pzn.href); // https://www.progammerzamannow.com/belajar?kelas=nodejs
console.info(pzn.protocol); // https:
console.info(pzn.host); // www.progammerzamannow.com
console.info(pzn.pathname); // /belajar
console.info(pzn.searchParams + "\n"); // URLSearchParams { 'kelas' => 'nodejs' }

// mengubah URL
pzn.host = "www.ariafatah.com";
pzn.pathname = "/index.php";

const searchParams = pzn.searchParams;
searchParams.append("status", "premium");

console.info(pzn.toString());
