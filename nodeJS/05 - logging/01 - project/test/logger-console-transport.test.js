import winston from "winston";

test("create new logger", () => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({}),
      //   new winston.transports.File({}),
    ],
  });

  logger.log({
    level: "info",
    message: "Hello Logger",
  }); // ini seperti console log
});
