import net from "net";

// client
const Connection = net.createConnection({
  port: 3000,
  host: "localhost",
});

Connection.addListener("data", (data) => {
  console.info(`Receive data from server : ${data.toString()}`);
});
// Connection.on("data", (data) => {
//   console.info(`Receive data from server : ${data.toString()}`);
// });

setInterval(() => {
  Connection.write("aria\r\n");
  //   Connection.write(`${process.argv[1]}\r\n`);
}, 2000);
