import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  //   handleExceptions: true,
  transports: [
    new winston.transports.File({
      handleExceptions: true,
      filename: "log/exception.log",
    }),
  ],
});

hello();
