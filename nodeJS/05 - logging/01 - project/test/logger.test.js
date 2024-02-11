import winston from "winston";

test.skip("create new logger", () => {
  const logger = winston.createLogger({}); // error karena tidak ada transport

  logger.log({
    level: "info",
    message: "Hello Logger",
  }); // ini seperti console log
});
