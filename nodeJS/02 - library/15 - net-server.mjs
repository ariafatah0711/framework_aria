import net from "net";

// network server
const server = net.createServer((client) => {
  console.info(`Client Connection`);
  client.on("data", (data) => {
    console.info(`Receive data from client : ${data.toString()}`);
    client.write(`Hello ${data.toString()}\r\n`); // \r\n untuk enter
  });

  //   client.addListener((data) => {
  //     console.info(`Receive data from client : ${data.toString()}`);
  //     client.write(`Hello ${data.toString()}\r\n`);
  //   });
});

server.listen(3000, "localhost"); // listen(port, hostname);
