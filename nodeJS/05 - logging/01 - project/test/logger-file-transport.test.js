import winston from "winston";

test("logger file transport", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [
      new winston.transports.File({
        filename: "application.log",
      }),
      // new winston.transports.File({
      //   filename: "app.log",
      // }),
    ],
  });

  logger.info(new Date());
  logger.info("hello log");
});
