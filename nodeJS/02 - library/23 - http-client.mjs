import https from "https";

const url = "https://eotz29yoy83n0er.m.pipedream.net";

/* request = https(url, option, callback) */
const request = https.request(
  url,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      //   console.info(`Receive data : ${data.toString()}`);
      console.info(`Receive data : ${JSON.stringify({ success: true })}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "aria",
  lastName: "fatah",
});

request.write(body);
request.end();
