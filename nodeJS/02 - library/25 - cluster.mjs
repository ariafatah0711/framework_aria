import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

/*
if (cluster.isPrimary) {
  console.info(`primary : ${process.pid}`);
  cluster.fork(); // saat ini fork dia akan menjalankan worker
  cluster.fork();
}

if (cluster.isWorker) {
  console.info(`worker ${process.pid}`);
}
*/

if (cluster.isPrimary) {
  console.info(`primary : ${process.pid}`);
  for (let i = 0; i < os.cpus().length; i++) {
    // jalankan worker sebanyak core yang kita miliki
    cluster.fork();
  }

  cluster.addListener("exit", (worker) => {
    console.info(`Worker ${worker.id} is exited`);
    cluster.fork(); // agar worker jalan terus
  });
}

if (cluster.isWorker) {
  const server = http.createServer((request, response) => {
    response.write(`Response from process ${process.pid}`);
    response.end();
    process.exit();
  });
  server.listen(3000);
  console.info(`Start cluster worker ${process.pid}`);
}
