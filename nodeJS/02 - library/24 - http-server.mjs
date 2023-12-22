import http from "http";

/*
const server = http.createServer((request, response) => {
  console.info(request.method); // GET
  console.info(request.url);
  //   console.info(request.headers);
  //   console.info(request.statusCode);

  if (request.url == "/aria") {
    response.write("Hello aria");
  } else {
    response.write("Hello HTTP server");
  }

  response.end();
});

server.listen(3000);
*/

/* kompleks */
const server = http.createServer((request, Response) => {
  if (request.method === "POST") {
    request.addListener("data", (data) => {
      Response.setHeader("Content-Type", "application/json"); // meresponse headers
      Response.write(data); // meresponse data client
      Response.end();
    });
  } else {
    Response.write("Hello World");
    Response.end();
  }
});

server.listen(3000);

/* http://localhost:3000/ // => buka di browser */
