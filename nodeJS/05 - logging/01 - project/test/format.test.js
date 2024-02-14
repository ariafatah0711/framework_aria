import winston from "winston";

test("logging with format", () => {
  const logger = winston.createLogger({
    level: "info",
    // format: winston.format.json(),
    // format: winston.format.logstash(), // {"@fields":{"level":"info"},"@message":"Hello format"}
    format: winston.format.simple(), // info: Hello format
    transports: [new winston.transports.Console({})],
  });

  logger.info("hello info");
});
// info: Hello format

test("logging with custom format", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.printf((log) => {
      return `${new Date()} : ${log.level.toUpperCase()} : ${log.message}`;
    }),
    transports: [new winston.transports.Console({})],
  });

  logger.info("hello info");
  logger.warn("hello warn");
});
// Wed Feb 14 2024 19:49:18 GMT+0700 (Waktu Indonesia Barat) : INFO : Hello custom format
