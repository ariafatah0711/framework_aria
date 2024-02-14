import winston from "winston";

test("trasnport file level", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    transports: [
      new winston.transports.File({
        filename: "log/application-info.log",
      }),
      new winston.transports.File({
        level: "error",
        filename: "log/application-error.log",
      }),
    ],
  });

  logger.info(new Date());
  logger.info("response: 200");
  logger.info("response: 200");
  logger.error("reject: 404");
});
