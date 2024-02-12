import winston from "winston";

test("create logger console", () => {
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
